/**
 * Lamb-Oseen angular velocity: Gamma/(2*pi*r^2) * (1-exp(-r^2/(4*nu*t))).
 * The analytic viscous vortex is a reduced Navier-Stokes solution; translating
 * and tilting it with the ball is art direction, not a sphere-boundary CFD solve.
 * Reference: https://link.springer.com/article/10.1007/s00348-016-2159-z
 */
export function vortexAngularVelocity(radius: number, age: number) {
	const circulation = 4.8;
	const viscosity = 0.018;
	const coreSquared = 4 * viscosity * (Math.max(0, age) + 5);
	const radiusSquared = radius * radius;
	if (radiusSquared < 1e-10) return circulation / (2 * Math.PI * coreSquared);
	return (
		(circulation * -Math.expm1(-radiusSquared / coreSquared)) /
		(2 * Math.PI * radiusSquared)
	);
}
