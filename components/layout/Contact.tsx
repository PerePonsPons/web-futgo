import type * as React from "react";
import { homeContent, siteConfig } from "@/config/site";

function InstagramIcon(props: React.ComponentProps<"svg">) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
			<title>Instagram</title>
			<rect width="16" height="16" x="4" y="4" rx="4" strokeWidth="2" />
			<circle cx="12" cy="12" r="3.2" strokeWidth="2" />
			<circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
		</svg>
	);
}

const socialIcons = {
	Instagram: InstagramIcon,
} as const;

export function Contact() {
	const containerClass = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
	return (
		<section id="contact" className="py-8">
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
								<strong>Teléfono:</strong>{" "}
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
								<strong>Ubicación:</strong> Menorca, Illes Balears
							</li>
						</ul>
					</address>

					<div className="flex flex-wrap items-center gap-3">
						{siteConfig.contact.socials.map((social) => {
							const Icon = socialIcons[social.name as keyof typeof socialIcons];

							return (
								<a
									key={social.href}
									className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition-colors hover:border-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
									href={social.href}
									rel="noreferrer"
									target="_blank"
									aria-label={`${social.name}: ${social.label}`}
								>
									<Icon className="size-5" aria-hidden="true" />
									<span>{social.label}</span>
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
