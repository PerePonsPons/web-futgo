import { ServicesCarousel } from "@/components/compositions/services-carousel";
import { homeContent, services } from "@/config/site";
import { cn } from "@/lib/utils";

export function Activities() {
	return (
		<section id="services" className={cn("px-8 py-6 lg:px-40 bg-black/5")}>
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
	);
}
