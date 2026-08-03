import type { Metadata } from "next";
import { About } from "@/components/layout/About";
import { Activities } from "@/components/layout/Activities";
import { Contact } from "@/components/layout/Contact";
import { Footer } from "@/components/layout/Footer";
import { Gallery } from "@/components/layout/Gallery";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/layout/Hero";

import { services, siteConfig, structuredData } from "@/config/site";

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
				<Gallery />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
