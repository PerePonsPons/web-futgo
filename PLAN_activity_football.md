# PLAN.md

## Objective

* Add a reusable Three.js football above the activity hero text, with slow rotation, soft shadows and fluid particles.

## Requirements

* Preserve the existing copy, highlights grid and CTA.
* Use a transparent, unframed scene with responsive, stable dimensions.
* Model particle motion using the analytic Lamb-Oseen viscous vortex, a reduced Navier-Stokes model. The moving ball and flow are an artistic approximation, not a simulation of flow boundary conditions around a sphere.
* Keep the page content server rendered and readable by search engines and AI crawlers.
* Lazy-load Three.js, cap pixel density and particle count, pause offscreen/in hidden tabs, respect reduced motion, and dispose GPU resources.
* Provide an accessible pause control and a static fallback when WebGL is unavailable.

## Steps

1. [x] Inspect the activity hero and read the installed Next.js documentation and Context7 Three.js guidance.
2. [x] Install Three.js and implement the football geometry, lighting and analytic particle flow.
3. [x] Integrate the client component above the existing hero text with motion and lifecycle controls. Depends on step 2.
4. [x] Check lint, types and production compilation. Visual and interaction testing will be performed by Lluis, as requested. Depends on step 3.

## Dependencies

* Three.js and its TypeScript types.
* WebGL2 for animation; a local PNG for the fallback.

## Verification

* Run focused Biome and TypeScript checks; run a production build.
* Lluis will validate desktop/mobile appearance, animation, pointer response and pause controls. Do not run Playwright.

## Results

* Biome: all seven touched code/package files pass.
* TypeScript: `pnpm exec tsc --noEmit` passes.
* Production: `pnpm build` passes. Existing `metadataBase` warning remains outside this change.
* No browser tests performed, per Lluis's request.
* Existing development server: http://localhost:3000/actividades/torneos

## References

* Three.js: https://threejs.org/manual/en/cleanup.html
* Lamb-Oseen velocity model: https://link.springer.com/article/10.1007/s00348-016-2159-z
