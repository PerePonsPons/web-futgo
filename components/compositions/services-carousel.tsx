"use client";

import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselDots,
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
			opts={{ watchDrag: true, align: "start", loop: true }}
			className="mx-10"
			plugins={[Autoplay({ delay: 4500, stopOnInteraction: true })]}
			orientation="horizontal"
		>
			<CarouselContent className="-ml-4">
				{services.map((service) => (
					<CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/3">
						<Card className="h-full flex flex-col justify-between py-0 border-none rounded-2xl shadow-none bg-white">
							<div>
								<div className="relative aspect-16/10 bg-muted">
									<Image
										src={service.image}
										alt={service.title}
										fill
										draggable={false}
										className="object-contain rounded-t-2xl"
										sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
									/>
								</div>

								<CardHeader>
									<CardTitle className="text-xl mt-6">
										{service.title}
									</CardTitle>
								</CardHeader>
							</div>

							<CardContent className="pb-6 flex flex-col justify-between flex-1">
								<p className="text-muted-foreground">{service.description}</p>
								<Button
									asChild
									className="w-full mt-5 font-semibold transition-all hover:bg-primary hover:text-white"
									variant="outline"
								>
									<Link href={`/actividades/${service.id}`}>
										Experiencias
										<ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
							</CardContent>
						</Card>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious aria-label="Servicio anterior" className="hidden" />
			<CarouselNext aria-label="Siguiente servicio" className="hidden" />
			<CarouselDots />
		</Carousel>
	);
}
