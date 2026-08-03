"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

type Service = {
	id: string;
	title: string;
	description: string;
	image: string;
};

export function ServicesCarousel({
	services,
}: {
	services: readonly Service[];
}) {
	return (
		<Carousel
			opts={{watchDrag: true, align: "start", loop: true }}
			className="mx-10"
			plugins={[Autoplay({ delay: 4500, stopOnInteraction: true })]}
			orientation="horizontal"
		>
			<CarouselContent className="-ml-4">
				{services.map((service) => (
					<CarouselItem
						key={service.id}
						className="md:basis-1/2 lg:basis-1/3"
					>
						<Card className="h-full py-0 border-none rounded-2xl shadow-none">
							<div className="relative aspect-16/10 bg-muted">
								<Image
									src={service.image}
									alt={service.title}
									fill
									className="object-cover rounded-t-2xl"
									sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
								/>
							</div>

							<CardHeader>
								<CardTitle className="text-xl">{service.title}</CardTitle>
							</CardHeader>

							<CardContent className="pb-6">
								<p className="text-muted-foreground">{service.description}</p>
							</CardContent>
						</Card>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious aria-label="Servicio anterior" className="hidden" />
			<CarouselNext aria-label="Siguiente servicio" className="hidden"/>
		</Carousel>
	);
}
