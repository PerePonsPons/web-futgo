import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { Euler, Quaternion, Vector3 } from "three";
import { createFootballPanels } from "../lib/football-geometry.ts";

// Render the same panel layout to a small local bitmap without a browser or GPU.
const require = createRequire(import.meta.url);
const requireFromNext = createRequire(require.resolve("next/package.json"));
const sharp = requireFromNext("sharp");
const width = 600;
const height = 400;
const data = Buffer.alloc(width * height * 4);
const radius = 106;
const centerX = width / 2;
const centerY = 180;
const inverseRotation = new Quaternion()
	.setFromEuler(new Euler(0.18, 0.3, -0.22))
	.invert();
const key = new Vector3(-3, 5, 4).normalize();
const rim = new Vector3(3, 1, -2).normalize();
const panels = createFootballPanels().map((panel) => {
	const center = panel
		.reduce((sum, point) => sum.add(point), new Vector3())
		.normalize();
	const inset = panel.map((point) =>
		point.clone().lerp(center, 0.022).normalize(),
	);
	return {
		black: panel.length === 5,
		edges: inset.map((point, i) =>
			new Vector3()
				.crossVectors(point, inset[(i + 1) % inset.length])
				.normalize(),
		),
	};
});
const normal = new Vector3();
const localNormal = new Vector3();
for (let y = 0; y < height; y++) {
	for (let x = 0; x < width; x++) {
		const offset = (y * width + x) * 4;
		const nx = (x - centerX) / radius;
		const ny = (centerY - y) / radius;
		const distanceSquared = nx * nx + ny * ny;
		if (distanceSquared > 1) {
			const shadowDistance =
				((x - centerX - 9) / 100) ** 2 + ((y - 308) / 14) ** 2;
			data[offset] = 38;
			data[offset + 1] = 46;
			data[offset + 2] = 54;
			data[offset + 3] = Math.round(50 * Math.exp(-shadowDistance * 1.7));
			continue;
		}
		normal.set(nx, ny, Math.sqrt(1 - distanceSquared));
		localNormal.copy(normal).applyQuaternion(inverseRotation);
		const panel = panels.find((candidate) =>
			candidate.edges.every((edge) => edge.dot(localNormal) >= 0),
		);
		const base = !panel ? 0.052 : panel.black ? 0.028 : 0.88;
		const diffuse =
			0.46 +
			Math.max(0, normal.dot(key)) * 0.63 +
			Math.max(0, normal.dot(rim)) * 0.2;
		const grain = 1 + Math.sin(x * 2.8 + y * 1.7) * 0.014;
		const value = Math.min(1, base * diffuse * grain);
		data[offset] = Math.round(255 * value ** (1 / 2.2));
		data[offset + 1] = Math.round(
			255 * Math.min(1, value * 1.012) ** (1 / 2.2),
		);
		data[offset + 2] = Math.round(
			255 * Math.min(1, value * 1.027) ** (1 / 2.2),
		);
		data[offset + 3] = Math.round(
			255 * Math.min(1, (1 - Math.sqrt(distanceSquared)) * radius),
		);
	}
}
await sharp(data, { raw: { width, height, channels: 4 } })
	.png()
	.toFile(
		fileURLToPath(
			new URL("../public/images/football-poster.png", import.meta.url),
		),
	);
