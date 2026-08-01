import type { Metadata } from "next";
import Image from "next/image";
import { About } from "@/components/layout/About";
import { Activities } from "@/components/layout/Activities";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/layout/Hero";

import { faqs, galleryImages, homeContent, services, siteConfig, structuredData } from "@/config/site";

const containerClass = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

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



export default function HomePage() {
	return (
		<>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: This is a trusted JSON LD string
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<Header />
			<main>
				<Hero />
				<About />
				<Activities />

				<section id="gallery" className="py-16">
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

				<section id="faq" className="py-16">
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

				<section id="contact" className="py-16">
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
