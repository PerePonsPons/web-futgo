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

export function ServicesCarousel({ services }: { services: readonly Service[] }) {
  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[Autoplay({ delay: 4500, stopOnInteraction: true })]}
      className="mx-10"
    >
      <CarouselContent className="-ml-4">
        {services.map((service) => (
          <CarouselItem
            key={service.id}
            className="pl-4 md:basis-1/2 lg:basis-1/3"
          >
            <Card className="h-full overflow-hidden py-0">
              <div className="relative aspect-[16/10] bg-muted">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
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
      <CarouselPrevious aria-label="Servicio anterior" />
      <CarouselNext aria-label="Siguiente servicio" />
    </Carousel>
  );
}
