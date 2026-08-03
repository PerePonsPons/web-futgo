import { ServicesCarousel } from "@/components/compositions/services-carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { featuredExperiences, homeContent, services } from "@/config/site";
import { cn } from "@/lib/utils";

export function Activities() {
	return (
		<>
			{" "}
      <section id="services" className={cn("p-8 lg:px-40 bg-black/5")}>
				<div className="mb-8 max-w-3xl space-y-3">
					<h2 className="text-3xl font-bold tracking-tight md:text-4xl">
						Actividades
					</h2>
					<p className="leading-7 text-muted-foreground">
						{homeContent.servicesIntro}
					</p>
				</div>
				<ServicesCarousel services={services} />
			</section>
			<section className="p-8 mt-0 space-y-6 lg:px-40" id="experiencias">
					<h2 className="text-3xl font-bold tracking-tight md:text-4xl">
						Clinics y experiencias destacadas
					</h2>

					<div className="grid gap-6 lg:grid-cols-2">
						{featuredExperiences.map((experience) => (
							<Card key={experience.id} className="h-full">
								<CardHeader>
									<CardTitle className="text-2xl">{experience.title}</CardTitle>
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
			</section>
		</>
	);
}
