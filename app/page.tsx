import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ServicesCarousel } from "@/components/sections/services-carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

const containerClass = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
const sectionClass = "py-16";

const homeContent = {
  hero: {
    eyebrow: "Futbol base en Menorca",
    title:
      "FutGo Talent: futbol, formacion y experiencias para jugadores y jugadoras en Menorca",
    description:
      "Entrenamientos, clinics, torneos y preparacion fisica para futbolistas que quieren mejorar, competir y disfrutar del futbol en un entorno cercano, profesional y familiar.",
    image: "/images/images/CAMPUS.JPEG",
  },
  about: {
    title: "Sobre FutGo",
    description:
      "FutGo Talent es una organizacion deportiva nacida en Menorca con el objetivo de acompanar a futbolistas en su crecimiento personal y futbolistico. Priorizamos primero a las personas: el buen trato, la calidad del entrenamiento y la diversion son la base de cada experiencia.",
    secondary:
      "Trabajamos con una identidad clara: pasion, compromiso y respeto. Creamos entornos positivos donde cada jugador y jugadora puede evolucionar, aprender y sentirse parte de una familia deportiva.",
    image: "/images/images/ALEVMASC.jpg.jpeg",
  },
  servicesIntro:
    "Sesiones y experiencias pensadas para mejorar tecnica, confianza y lectura del juego desde el campo.",
  contactCta: {
    title: "Futbol para todos. Diversion y evolucion.",
    description:
      "Quieres entrenar, competir o vivir una experiencia FutGo? Contacta con nosotros y forma parte de FutGo Talent.",
  },
} as const;

const services = [
  {
    id: "tecnificacion",
    title: "Tecnificacion individual y grupal",
    description:
      "Sesiones adaptadas por edad, nivel y objetivos para mejorar la tecnica, la toma de decisiones y la confianza del futbolista.",
    image: "/images/images/IMG_0650.jpg.jpeg",
  },
  {
    id: "preparacion-fisica",
    title: "Preparacion fisica especifica",
    description:
      "Trabajo fisico orientado al futbol para ganar coordinacion, potencia, prevencion y rendimiento en entrenamientos y competicion.",
    image: "/images/images/IMG_4879.jpg.jpeg",
  },
  {
    id: "clinics",
    title: "Clinics intensivos",
    description:
      "Programas de vacaciones con grupos reducidos, tareas especificas por posicion, juegos de habilidad y feedback individual.",
    image: "/images/images/IMG_5113.jpg.jpeg",
  },
  {
    id: "torneos",
    title: "Torneos y experiencias",
    description:
      "Experiencias deportivas con convivencia, cultura y competicion para competir, hacer equipo y disfrutar dentro y fuera del campo.",
    image: "/images/images/IMG_0656.jpg.jpeg",
  },
] as const;

const featuredExperiences = [
  {
    id: "clinic-futgo-verano-2026",
    title: "Clinic FutGo Verano 2026",
    description:
      "Tecnificacion intensiva para jugadores y jugadoras de Menorca que quieren seguir mejorando durante el verano.",
    details: [
      "Fechas: del lunes 17 de agosto al jueves 20 de agosto de 2026.",
      "Horario: de 17:30 a 20:30.",
      "Lugar: Atletico Villacarlos.",
      "Categorias: F7, nacidos entre 2019 y 2015; F11, nacidos entre 2014 y 2010.",
      "Precio: 55 euros 4 dias / 30 euros 2 dias.",
      "Incluye camiseta FutGo, fruta, sombra, hidratacion, seguro FutGo y grupos reducidos.",
    ],
  },
  {
    id: "salou-cup-2026",
    title: "Salou Cup 2026",
    description:
      "Experiencia historica de FutGo Talent en la Salou Cup 2026: competicion, convivencia, dinamicas de equipo y futbol en instalaciones de primer nivel.",
    details: [
      "Incluyo torneo, hotel 4 estrellas, pension completa y transporte interno.",
      "Tambien entrenamientos previos en Menorca, staff tecnico, fisioterapeutas, entrenador de porteros, soporte nutricional, social media y grabacion de partidos.",
      "Fue una oportunidad para competir, conocer nuevos rivales y vivir una experiencia completa dentro y fuera del campo.",
    ],
  },
] as const;

const galleryImages = [
  {
    src: "/images/images/IMG_3839.JPG.jpeg",
    alt: "Entrenamiento FutGo en accion",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/images/IMG_2872.JPG.jpeg",
    alt: "Jugadores durante una actividad FutGo",
    className: "",
  },
  {
    src: "/images/images/IMG_2836.JPG.jpeg",
    alt: "Trabajo tecnico en campo",
    className: "",
  },
  {
    src: "/images/images/IMG_5107.jpg.jpeg",
    alt: "Grupo FutGo en sesion de futbol base",
    className: "",
  },
  {
    src: "/images/images/IMG_4960.jpg.jpeg",
    alt: "Detalle de entrenamientos FutGo",
    className: "",
  },
] as const;

const faqs = [
  {
    question: "Que es FutGo Talent?",
    answer:
      "FutGo Talent es una organizacion deportiva de Menorca que ofrece tecnificacion, preparacion fisica, clinics, torneos y experiencias futbolisticas para jugadores y jugadoras.",
  },
  {
    question: "Para quien son las actividades de FutGo?",
    answer:
      "Las actividades estan adaptadas por edad, nivel y necesidades del futbolista, con grupos reducidos y feedback individual.",
  },
  {
    question: "Como puedo contactar con FutGo Talent?",
    answer:
      "Puedes contactar por telefono en el +34 636 152 876, por email en futgotalent@gmail.com o a traves de Instagram en @futgotalent.",
  },
] as const;

export const metadata: Metadata = {
  title: "FutGo Talent | Tecnificacion, clinics y torneos de futbol en Menorca",
  description: siteConfig.description,
  keywords: [
    "FutGo Talent",
    "futbol Menorca",
    "tecnificacion futbol Menorca",
    "clinic futbol Menorca",
    "campus futbol Menorca",
    "entrenamientos futbol Menorca",
    "torneos futbol Menorca",
    "preparacion fisica futbol",
    "Salou Cup 2026",
  ],
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FutGo Talent | Futbol, formacion y experiencias en Menorca",
    description:
      "Tecnificacion, clinics, torneos y preparacion fisica para futbolistas en Menorca. Diversion, evolucion y trato cercano.",
    url: "/",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: services[0].image,
        width: 1200,
        height: 630,
        alt: "FutGo Talent - futbol y tecnificacion en Menorca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FutGo Talent | Futbol, formacion y experiencias en Menorca",
    description: siteConfig.description,
    images: [services[0].image],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SportsOrganization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.contact.email,
      telephone: "+34636152876",
      sport: "Football",
      areaServed: {
        "@type": "Place",
        name: "Menorca",
      },
      sameAs: [siteConfig.contact.instagram],
      description:
        "Organizacion deportiva en Menorca especializada en tecnificacion, preparacion fisica, clinics y torneos de futbol para jugadores y jugadoras.",
    },
    {
      "@type": "Event",
      "@id": `${siteConfig.url}/clinic-futgo-verano-2026/#event`,
      name: "Clinic FutGo Verano 2026",
      description:
        "Tecnificacion intensiva de futbol en grupos reducidos para jugadores y jugadoras, con trabajo tecnico-tactico, ejercicios por posicion, feedback individual y entrenamiento de porteros.",
      startDate: "2026-08-17T17:30:00+02:00",
      endDate: "2026-08-20T20:30:00+02:00",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: "Atletico Villacarlos",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Es Castell",
          addressRegion: "Menorca",
          addressCountry: "ES",
        },
      },
      organizer: {
        "@id": `${siteConfig.url}/#organization`,
      },
      offers: [
        {
          "@type": "Offer",
          name: "Clinic FutGo 4 dias",
          price: "55",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: `${siteConfig.url}/#experiencias`,
        },
        {
          "@type": "Offer",
          name: "Clinic FutGo 2 dias",
          price: "30",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: `${siteConfig.url}/#experiencias`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        <section id="home" className="relative overflow-hidden py-0">
          <div className="absolute inset-0">
            <Image
              src={homeContent.hero.image}
              alt="Campus FutGo en el campo de futbol"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/55" />
          </div>

          <div className={containerClass}>
            <div className="relative flex min-h-[calc(100svh-4rem)] justify-center max-w-4xl flex-col pb-15 text-white md:min-h-[720px] md:pb-15 ">
              <p className="text-sm font-semibold uppercase tracking-wide text-amber-300">
                {homeContent.hero.eyebrow}
              </p>

              <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
                {homeContent.hero.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
                {homeContent.hero.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-black hover:bg-white/90"
                >
                  <Link href="#contact">
                    Quiero formar parte
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/70 bg-white/10 text-white hover:bg-white hover:text-black"
                >
                  <Link href="#gallery">Ver ambiente</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className={sectionClass}>
          <div className={containerClass}>
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
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

        <section id="services" className={`${sectionClass} bg-muted/40`}>
          <div className={containerClass}>
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

        <section id="gallery" className={sectionClass}>
          <div className={containerClass}>
            <div className="mb-8 max-w-3xl space-y-3">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Futbol que se vive en el campo
              </h2>
              <p className="leading-7 text-muted-foreground">
                Una muestra del ambiente FutGo: entrenamientos, campus y
                momentos de equipo con jugadores de futbol base.
              </p>
            </div>

            <div className="grid auto-rows-[220px] gap-4 md:grid-cols-4 md:auto-rows-[190px] lg:auto-rows-[230px]">
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
          </div>
        </section>

        <section id="faq" className={sectionClass}>
          <div className={containerClass}>
            <div className="max-w-3xl space-y-6">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Preguntas frecuentes
              </h2>

              <div className="space-y-5">
                {faqs.map((faq) => (
                  <article key={faq.question} className="space-y-2">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <p className="leading-7 text-muted-foreground">
                      {faq.answer}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className={sectionClass}>
          <div className={containerClass}>
            <div className="max-w-3xl space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  {homeContent.contactCta.title}
                </h2>

                <p className="leading-7 text-muted-foreground">
                  {homeContent.contactCta.description}
                </p>
              </div>

              <address className="not-italic">
                <ul className="space-y-3">
                  <li>
                    <strong>Email:</strong>{" "}
                    <a
                      className="underline underline-offset-4 hover:text-muted-foreground"
                      href={`mailto:${siteConfig.contact.email}`}
                    >
                      {siteConfig.contact.email}
                    </a>
                  </li>

                  <li>
                    <strong>Telefono:</strong>{" "}
                    <a
                      className="underline underline-offset-4 hover:text-muted-foreground"
                      href={siteConfig.contact.phoneHref}
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </li>

                  <li>
                    <strong>Instagram:</strong>{" "}
                    <a
                      className="underline underline-offset-4 hover:text-muted-foreground"
                      href={siteConfig.contact.instagram}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {siteConfig.contact.instagramLabel}
                    </a>
                  </li>

                  <li>
                    <strong>Ubicacion:</strong> Menorca, Illes Balears
                  </li>
                </ul>
              </address>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
