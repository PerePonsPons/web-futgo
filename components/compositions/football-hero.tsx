"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { FootballScene } from "./football-scene";

export function FootballHero() {
	const hostRef = useRef<HTMLDivElement>(null);
	const sceneRef = useRef<FootballScene | null>(null);
	const [ready, setReady] = useState(false);

	useEffect(() => {
		const host = hostRef.current;
		if (!host) return;
		let cancelled = false;
		let loading = false;
		let visible = false;
		const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
		const connection = (
			navigator as Navigator & { connection?: { saveData?: boolean } }
		).connection;
		async function loadScene() {
			if (
				loading ||
				cancelled ||
				!visible ||
				motion.matches ||
				connection?.saveData
			)
				return;
			loading = true;
			try {
				const { createFootballScene } = await import("./football-scene");
				if (cancelled || !host) return;
				const scene = createFootballScene(host, () => setReady(false));
				sceneRef.current = scene;
				scene.setVisible(visible);
				scene.setReducedMotion(motion.matches);
				setReady(true);
			} catch {
				// Keep the local poster if WebGL or the deferred chunk is unavailable.
				if (!cancelled) setReady(false);
			}
		}
		function updateMotion() {
			sceneRef.current?.setReducedMotion(motion.matches);
			void loadScene();
		}
		const observer = new IntersectionObserver(([entry]) => {
			visible = entry.isIntersecting;
			sceneRef.current?.setVisible(visible);
			void loadScene();
		});
		observer.observe(host);
		motion.addEventListener("change", updateMotion);
		updateMotion();
		return () => {
			cancelled = true;
			observer.disconnect();
			motion.removeEventListener("change", updateMotion);
			sceneRef.current?.dispose();
			sceneRef.current = null;
		};
	}, []);

	return (
		<div
			className="relative mb-3 h-52 w-full max-w-3xl sm:h-64"
			data-football-hero
		>
			<div
				aria-hidden="true"
				className={`pointer-events-none absolute inset-0 ${ready ? "invisible" : "visible"}`}
			>
				<Image
					src="/images/football-poster.png"
					alt=""
					fill
					sizes="(min-width: 640px) 400px, 320px"
					className="object-contain"
				/>
			</div>
			<div
				ref={hostRef}
				aria-hidden="true"
				className={`absolute inset-0 ${ready ? "visible" : "invisible"}`}
			/>
		</div>
	);
}
