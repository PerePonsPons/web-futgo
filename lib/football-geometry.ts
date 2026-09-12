import {
	BufferGeometry,
	Color,
	Float32BufferAttribute,
	IcosahedronGeometry,
	Vector3,
} from "three";

export function createFootballPanels() {
	const source = new IcosahedronGeometry(1, 0);
	const positions = source.getAttribute("position");
	const vertices: Vector3[] = [];
	const faces: number[][] = [];
	const neighbors: Set<number>[] = [];

	for (let i = 0; i < positions.count; i += 3) {
		const face: number[] = [];
		for (let j = 0; j < 3; j++) {
			const point = new Vector3().fromBufferAttribute(positions, i + j);
			let index = vertices.findIndex((v) => v.distanceToSquared(point) < 1e-10);
			if (index === -1) {
				index = vertices.length;
				vertices.push(point);
				neighbors.push(new Set());
			}
			face.push(index);
		}
		faces.push(face);
		for (const a of face) {
			for (const b of face) if (a !== b) neighbors[a].add(b);
		}
	}
	source.dispose();

	// Truncate each icosahedron edge at one third: 12 pentagons, 20 hexagons.
	const edge = (a: number, b: number) =>
		vertices[a]
			.clone()
			.lerp(vertices[b], 1 / 3)
			.normalize();
	const panels = vertices.map((_, a) =>
		Array.from(neighbors[a], (b) => edge(a, b)),
	);
	for (const [a, b, c] of faces) {
		panels.push([
			edge(a, b),
			edge(b, a),
			edge(b, c),
			edge(c, b),
			edge(c, a),
			edge(a, c),
		]);
	}
	return panels.map((corners) => {
		const center = corners
			.reduce((sum, p) => sum.add(p), new Vector3())
			.normalize();
		const tangent = corners[0]
			.clone()
			.sub(center.clone().multiplyScalar(corners[0].dot(center)))
			.normalize();
		const bitangent = new Vector3().crossVectors(center, tangent);
		return corners.sort(
			(a, b) =>
				Math.atan2(a.dot(bitangent), a.dot(tangent)) -
				Math.atan2(b.dot(bitangent), b.dot(tangent)),
		);
	});
}

export function createFootballGeometry() {
	const positions: number[] = [];
	const normals: number[] = [];
	const colors: number[] = [];
	const uvs: number[] = [];
	const white = new Color("#f4f5f3");
	const black = new Color("#171c22");

	function triangle(
		a: Vector3,
		b: Vector3,
		c: Vector3,
		color: Color,
		depth: number,
	) {
		if (depth > 0) {
			const ab = a.clone().add(b).normalize();
			const bc = b.clone().add(c).normalize();
			const ca = c.clone().add(a).normalize();
			triangle(a, ab, ca, color, depth - 1);
			triangle(ab, b, bc, color, depth - 1);
			triangle(ca, bc, c, color, depth - 1);
			triangle(ab, bc, ca, color, depth - 1);
			return;
		}
		for (const p of [a, b, c]) {
			positions.push(p.x * 1.004, p.y * 1.004, p.z * 1.004);
			normals.push(p.x, p.y, p.z);
			colors.push(color.r, color.g, color.b);
			uvs.push(
				Math.atan2(p.z, p.x) / (2 * Math.PI) + 0.5,
				Math.asin(p.y) / Math.PI + 0.5,
			);
		}
	}

	for (const panel of createFootballPanels()) {
		const center = panel
			.reduce((sum, p) => sum.add(p), new Vector3())
			.normalize();
		const inset = panel.map((p) => p.clone().lerp(center, 0.022).normalize());
		for (let i = 0; i < inset.length; i++) {
			triangle(
				center,
				inset[i],
				inset[(i + 1) % inset.length],
				panel.length === 5 ? black : white,
				3,
			);
		}
	}
	const geometry = new BufferGeometry();
	geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
	geometry.setAttribute("normal", new Float32BufferAttribute(normals, 3));
	geometry.setAttribute("color", new Float32BufferAttribute(colors, 3));
	geometry.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
	geometry.computeBoundingSphere();
	return geometry;
}
