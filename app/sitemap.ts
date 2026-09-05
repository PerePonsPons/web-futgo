import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

const lastModified = new Date("2026-07-30T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
	const activities = ["torneos", "clinics", "tecnificacion", "preparacion-fisica"];

	return [
		{
			url: siteConfig.url,
			lastModified,
			changeFrequency: "monthly",
			priority: 1,
		},
		...activities.map((slug) => ({
			url: `${siteConfig.url}/actividades/${slug}`,
			lastModified,
			changeFrequency: "monthly" as const,
			priority: 0.8,
		})),
	];
}
