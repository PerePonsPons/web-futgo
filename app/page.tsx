import type { Metadata } from "next";
import { About } from "@/components/layout/About";
import { Activities } from "@/components/layout/Activities";
import { Contact } from "@/components/layout/Contact";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/layout/Hero";

import { services, siteConfig, structuredData } from "@/config/site";

export const metadata: Metadata = {
	title: "Futgo Talent | Tecnificación, clínics y torneos de fútbol en Menorca",
	description: siteConfig.description,
	keywords: [
		"Futgo Talent",
		"fútbol Menorca",
		"tecnificación fútbol Menorca",
		"clínic fútbol Menorca",
		"campus fútbol Menorca",
		"entrenamientos fútbol Menorca",
		"torneos fútbol Menorca",
		"preparación física fútbol",
		"Salou Cup 2026",
		"futbol Menorca",
		"tecnificacion futbol Menorca",
	],
	metadataBase: new URL(siteConfig.url),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "Futgo Talent | Fútbol, formación y experiencias en Menorca",
		description:
			"Tecnificación, clínics, torneos y preparación física para futbolistas en Menorca. Diversión, evolución y trato cercano.",
		url: "/",
		siteName: siteConfig.name,
		locale: siteConfig.locale,
		type: "website",
		images: [
			{
				url: services[0].image,
				width: 1200,
				height: 630,
				alt: "Futgo Talent - fútbol y tecnificación en Menorca",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Futgo Talent | Fútbol, formación y experiencias en Menorca",
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
				<Contact />
			</main>
			<Footer />
		</>
	);
}
