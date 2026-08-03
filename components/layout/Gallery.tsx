import Image from "next/image";
import { galleryImages } from "@/config/site";

export function Gallery() {
	const containerClass = "mx-auto w-full max-w-7xl py-8 px-8 sm:px-6 lg:px-8 bg-black/5";

	return (
			<section id="gallery" className={containerClass}>
				<div className="mb-8 max-w-3xl space-y-3">
					<h2 className="text-3xl font-bold tracking-tight md:text-4xl">
						Futbol que se vive en el campo
					</h2>
					<p className="leading-7 text-muted-foreground">
						Una muestra del ambiente FutGo: entrenamientos, campus y momentos de
						equipo con jugadores de futbol base.
					</p>
				</div>

				<div className="grid auto-rows-55 gap-4 md:grid-cols-4 md:auto-rows-47.5 lg:auto-rows-57.5">
					{galleryImages.map((image) => (
						<figure
							key={image.src}
							className={`relative overflow-hidden rounded-lg border bg-muted shadow-sm ${image.className}`}
						>
							<Image
								src={image.src}
								alt={image.alt}
								fill
								className="object-cover transition-transform duration-500 hover:scale-105"
								sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
							/>
						</figure>
					))}
				</div>
			</section>
	);
}
