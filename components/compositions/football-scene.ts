import {
	ACESFilmicToneMapping,
	BufferAttribute,
	BufferGeometry,
	CanvasTexture,
	Color,
	DirectionalLight,
	DynamicDrawUsage,
	Float32BufferAttribute,
	Group,
	HemisphereLight,
	LineBasicMaterial,
	LineSegments,
	Mesh,
	MeshBasicMaterial,
	MeshStandardMaterial,
	OrthographicCamera,
	PCFShadowMap,
	PlaneGeometry,
	Points,
	PointsMaterial,
	RepeatWrapping,
	Scene,
	ShadowMaterial,
	SphereGeometry,
	WebGLRenderer,
} from "three";
import { vortexAngularVelocity } from "@/lib/football-flow";
import { createFootballGeometry } from "@/lib/football-geometry";

export type FootballScene = ReturnType<typeof createFootballScene>;

export function createFootballScene(host: HTMLDivElement, onError: () => void) {
	const renderer = new WebGLRenderer({
		alpha: true,
		antialias: true,
		powerPreference: "low-power",
	});
	const compact = window.matchMedia("(max-width: 640px)").matches;
	renderer.setPixelRatio(
		Math.min(window.devicePixelRatio, compact ? 1.25 : 1.5),
	);
	renderer.setClearColor(0x000000, 0);
	renderer.toneMapping = ACESFilmicToneMapping;
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = PCFShadowMap;
	const canvas = renderer.domElement;
	canvas.style.cssText = "display:block;width:100%;height:100%";
	canvas.setAttribute("aria-hidden", "true");
	host.appendChild(canvas);

	const scene = new Scene();
	const camera = new OrthographicCamera(-4, 4, 1.9, -1.9, 0.1, 30);
	camera.position.set(0, 1.5, 7);
	camera.lookAt(0, -0.15, 0);
	const rig = new Group();
	scene.add(rig);
	const ball = new Group();
	ball.rotation.set(0.18, 0.3, -0.22);
	rig.add(ball);

	const leatherCanvas = document.createElement("canvas");
	leatherCanvas.width = leatherCanvas.height = 128;
	const leatherContext = leatherCanvas.getContext("2d");
	if (leatherContext) {
		const pixels = leatherContext.createImageData(128, 128);
		for (let i = 0; i < pixels.data.length; i += 4) {
			const value = 110 + ((i * 13 + (i >> 7) * 17) % 37);
			pixels.data.set([value, value, value, 255], i);
		}
		leatherContext.putImageData(pixels, 0, 0);
	}
	const leather = new CanvasTexture(leatherCanvas);
	leather.wrapS = leather.wrapT = RepeatWrapping;
	leather.repeat.set(7, 4);
	const panelMaterial = new MeshStandardMaterial({
		vertexColors: true,
		roughness: 0.64,
		metalness: 0,
		bumpMap: leather,
		bumpScale: 0.006,
	});
	const panels = new Mesh(createFootballGeometry(), panelMaterial);
	panels.castShadow = true;
	ball.add(panels);
	ball.add(
		new Mesh(
			new SphereGeometry(0.996, 48, 32),
			new MeshStandardMaterial({ color: "#30363c", roughness: 0.9 }),
		),
	);

	scene.add(new HemisphereLight(0xffffff, 0x9298a0, 2.3));
	const key = new DirectionalLight(0xfff7e8, 3.4);
	key.position.set(-3, 5, 4);
	key.castShadow = true;
	key.shadow.mapSize.set(512, 512);
	Object.assign(key.shadow.camera, {
		left: -3,
		right: 3,
		top: 3,
		bottom: -3,
		near: 0.5,
		far: 15,
	});
	key.shadow.normalBias = 0.035;
	key.shadow.radius = 4;
	scene.add(key);
	const rim = new DirectionalLight(0xb8d7ed, 2);
	rim.position.set(3, 1, -2);
	scene.add(rim);

	const floor = new Mesh(
		new PlaneGeometry(12, 12),
		new ShadowMaterial({ color: 0x333c45, opacity: 0.18 }),
	);
	floor.rotation.x = -Math.PI / 2;
	floor.position.y = -1.28;
	floor.receiveShadow = true;
	scene.add(floor);

	const shadowCanvas = document.createElement("canvas");
	shadowCanvas.width = shadowCanvas.height = 64;
	const shadowContext = shadowCanvas.getContext("2d");
	if (shadowContext) {
		const gradient = shadowContext.createRadialGradient(32, 32, 0, 32, 32, 32);
		gradient.addColorStop(0, "rgba(34,43,51,0.28)");
		gradient.addColorStop(0.45, "rgba(34,43,51,0.12)");
		gradient.addColorStop(1, "rgba(34,43,51,0)");
		shadowContext.fillStyle = gradient;
		shadowContext.fillRect(0, 0, 64, 64);
	}
	const shadowTexture = new CanvasTexture(shadowCanvas);
	const contactShadow = new Mesh(
		new PlaneGeometry(3, 2.3),
		new MeshBasicMaterial({
			map: shadowTexture,
			transparent: true,
			depthWrite: false,
		}),
	);
	contactShadow.rotation.x = -Math.PI / 2;
	contactShadow.position.y = -1.27;
	scene.add(contactShadow);

	const count = compact ? 72 : 120;
	const positions = new Float32Array(count * 3);
	const trails = new Float32Array(count * 6);
	const colors = new Float32Array(count * 3);
	const radii = new Float32Array(count);
	const angles = new Float32Array(count);
	const heights = new Float32Array(count);
	const palette = [
		new Color("#637aa4"),
		new Color("#7d999c"),
		new Color("#b39867"),
	];
	for (let i = 0; i < count; i++) {
		const seed = (i * 0.61803398875) % 1;
		radii[i] = 1.32 + seed * 0.92;
		angles[i] = i * 2.399963;
		heights[i] = (((i * 0.754877666) % 1) - 0.5) * 1.05;
		palette[i % palette.length].toArray(colors, i * 3);
	}
	const particleGeometry = new BufferGeometry();
	particleGeometry.setAttribute(
		"position",
		new BufferAttribute(positions, 3).setUsage(DynamicDrawUsage),
	);
	particleGeometry.setAttribute("color", new Float32BufferAttribute(colors, 3));
	const particles = new Points(
		particleGeometry,
		new PointsMaterial({
			vertexColors: true,
			size: compact ? 2 : 2.3,
			sizeAttenuation: false,
			transparent: true,
			opacity: 0.6,
			depthWrite: false,
		}),
	);
	particles.frustumCulled = false;
	const trailGeometry = new BufferGeometry();
	trailGeometry.setAttribute(
		"position",
		new BufferAttribute(trails, 3).setUsage(DynamicDrawUsage),
	);
	const streaks = new LineSegments(
		trailGeometry,
		new LineBasicMaterial({
			color: "#8599b2",
			transparent: true,
			opacity: 0.17,
			depthWrite: false,
		}),
	);
	streaks.frustumCulled = false;
	const flow = new Group();
	flow.rotation.set(0.15, 0, -0.25);
	flow.add(particles, streaks);
	rig.add(flow);

	let elapsed = 0;
	let lastFrame = 0;
	let visible = true;
	let paused = false;
	let reduced = false;
	let disposed = false;
	let contextLost = false;
	let pointerX = 0;
	let pointerY = 0;
	let easedX = 0;
	let easedY = 0;
	function draw(delta = 0) {
		elapsed += delta;
		const smoothing = 1 - Math.exp(-3 * delta);
		easedX += (pointerX - easedX) * smoothing;
		easedY += (pointerY - easedY) * smoothing;
		rig.position.set(
			Math.sin(elapsed * 0.35) * 0.075 + easedX * 0.12,
			Math.sin(elapsed * 0.7) * 0.07 + easedY * 0.055,
			0,
		);
		ball.rotation.y = 0.3 + elapsed * 0.14 + easedX * 0.18;
		ball.rotation.x = 0.18 + Math.sin(elapsed * 0.3) * 0.08 + easedY * 0.12;
		contactShadow.position.x = rig.position.x;
		contactShadow.scale.setScalar(1 + rig.position.y * 0.25);
		for (let i = 0; i < count; i++) {
			const velocity = vortexAngularVelocity(radii[i], elapsed);
			angles[i] += velocity * delta;
			const p = i * 3;
			positions[p] = Math.cos(angles[i]) * radii[i];
			positions[p + 1] = heights[i];
			positions[p + 2] = -Math.sin(angles[i]) * radii[i];
			const tail = angles[i] - velocity * 0.32;
			trails[i * 6] = positions[p];
			trails[i * 6 + 1] = positions[p + 1];
			trails[i * 6 + 2] = positions[p + 2];
			trails[i * 6 + 3] = Math.cos(tail) * radii[i];
			trails[i * 6 + 4] = heights[i];
			trails[i * 6 + 5] = -Math.sin(tail) * radii[i];
		}
		particleGeometry.getAttribute("position").needsUpdate = true;
		trailGeometry.getAttribute("position").needsUpdate = true;
		renderer.render(scene, camera);
	}
	function animate(now: number) {
		if (!lastFrame) lastFrame = now;
		const delta = (now - lastFrame) / 1000;
		if (delta < 1 / 30) return;
		lastFrame = now;
		draw(Math.min(delta, 0.05));
	}
	function syncAnimation() {
		lastFrame = 0;
		renderer.setAnimationLoop(
			!disposed &&
				!contextLost &&
				visible &&
				!paused &&
				!reduced &&
				!document.hidden
				? animate
				: null,
		);
	}
	function resize() {
		if (disposed || contextLost) return;
		const { width, height } = host.getBoundingClientRect();
		if (!width || !height) return;
		const halfHeight = 1.85;
		const halfWidth = Math.max((halfHeight * width) / height, 2.55);
		camera.left = -halfWidth;
		camera.right = halfWidth;
		camera.top = (halfWidth * height) / width;
		camera.bottom = -camera.top;
		camera.updateProjectionMatrix();
		renderer.setSize(width, height, false);
		draw();
	}
	function move(event: PointerEvent) {
		if (event.pointerType === "touch") return;
		const bounds = host.getBoundingClientRect();
		pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
		pointerY = -((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
	}
	function leave() {
		pointerX = 0;
		pointerY = 0;
	}
	function loseContext(event: Event) {
		event.preventDefault();
		contextLost = true;
		syncAnimation();
		onError();
	}
	const resizeObserver = new ResizeObserver(resize);
	resizeObserver.observe(host);
	host.addEventListener("pointermove", move);
	host.addEventListener("pointerleave", leave);
	canvas.addEventListener("webglcontextlost", loseContext);
	document.addEventListener("visibilitychange", syncAnimation);
	resize();
	syncAnimation();

	return {
		setVisible(value: boolean) {
			visible = value;
			syncAnimation();
		},
		setPaused(value: boolean) {
			paused = value;
			syncAnimation();
		},
		setReducedMotion(value: boolean) {
			reduced = value;
			syncAnimation();
		},
		dispose() {
			if (disposed) return;
			disposed = true;
			renderer.setAnimationLoop(null);
			resizeObserver.disconnect();
			host.removeEventListener("pointermove", move);
			host.removeEventListener("pointerleave", leave);
			canvas.removeEventListener("webglcontextlost", loseContext);
			document.removeEventListener("visibilitychange", syncAnimation);
			scene.traverse((object) => {
				if (
					object instanceof Mesh ||
					object instanceof Points ||
					object instanceof LineSegments
				) {
					object.geometry.dispose();
					const materials = Array.isArray(object.material)
						? object.material
						: [object.material];
					for (const material of materials) material.dispose();
				}
			});
			leather.dispose();
			shadowTexture.dispose();
			key.shadow.dispose();
			renderer.dispose();
			renderer.forceContextLoss();
			canvas.remove();
		},
	};
}
