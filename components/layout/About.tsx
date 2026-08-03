import Image from "next/image";
import { homeContent } from "@/config/site";

export function About() {
	return (
	<section className="pt-10 grid place-items-center mb-8">
					<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
							<div className="max-w-3xl space-y-6">
								<h2 className="text-3xl font-bold tracking-tight md:text-4xl">
									{homeContent.about.title}
								</h2>

								<p className="leading-7 text-muted-foreground">
									{homeContent.about.description}
								</p>

								<p className="leading-7 text-muted-foreground">
									{homeContent.about.secondary}
								</p>
							</div>

							<div className="relative aspect-[4/3] overflow-hidden rounded-lg border bg-muted shadow-sm">
								<Image
									src={homeContent.about.image}
									alt="Equipo FutGo preparado para entrenar"
									fill
									className="object-cover"
									sizes="(min-width: 1024px) 42vw, 100vw"
								/>
							</div>
						</div>
					</div>
				</section>
	);
}
