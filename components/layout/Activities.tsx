import { ServicesCarousel } from "@/components/compositions/services-carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { featuredExperiences, homeContent, services } from "@/config/site";

export function Activities() {
  return (
    <section id="services" className="mt-8 pt-8 pb-8 bg-linear-to-b from-black/5 to-black/5">
					<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="mb-8 max-w-3xl space-y-3">
							<h2 className="text-3xl font-bold tracking-tight md:text-4xl">
								Actividades
							</h2>
							<p className="leading-7 text-muted-foreground">
								{homeContent.servicesIntro}
							</p>
						</div>

						<ServicesCarousel services={services} />

						<div className="mt-14 space-y-6" id="experiencias">
							<h2 className="text-3xl font-bold tracking-tight md:text-4xl">
								Clinics y experiencias destacadas
							</h2>

							<div className="grid gap-6 lg:grid-cols-2">
								{featuredExperiences.map((experience) => (
									<Card key={experience.id} className="h-full">
										<CardHeader>
											<CardTitle className="text-2xl">
												{experience.title}
											</CardTitle>
										</CardHeader>
										<CardContent>
											<p className="leading-7 text-muted-foreground">
												{experience.description}
											</p>
											<ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
												{experience.details.map((detail) => (
													<li key={detail}>{detail}</li>
												))}
											</ul>
										</CardContent>
									</Card>
								))}
							</div>
						</div>
					</div>
				</section>
  );
}
