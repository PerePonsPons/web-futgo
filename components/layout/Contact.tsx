import { Mail, MapPin, Phone } from "lucide-react";
import type * as React from "react";
import { homeContent, siteConfig } from "@/config/site";

function InstagramIcon(props: React.ComponentProps<"svg">) {
	return (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
			<title>Instagram</title>
			<rect width="16" height="16" x="4" y="4" rx="4" strokeWidth="1.5" />
			<circle cx="12" cy="12" r="3.2" strokeWidth="1.5" />
			<circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
		</svg>
	);
}

export function Contact() {
	const containerClass = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
	return (
		<section id="contact" className="py-6">
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
								<Mail color="#e34033" className="inline-block mr-2" size={16} />
								<a
									className="underline underline-offset-4 hover:text-muted-foreground"
									href={`mailto:${siteConfig.contact.email}`}
								>
									{siteConfig.contact.email}
								</a>
							</li>

							<li>
								<Phone color="green" className="inline-block mr-2" size={16} />
								<a
									className="underline underline-offset-4 hover:text-muted-foreground"
									href={siteConfig.contact.phoneHref}
								>
									{siteConfig.contact.phone}
								</a>
							</li>

							<li className="relative">
								<InstagramIcon
									color="#8e34bd"
									className="h-6 inline-block mr-2 absolute left-[-2.5]"
								/>
								<a
									className="underline underline-offset-4 hover:text-muted-foreground relative left-6.5"
									href={siteConfig.contact.instagram}
									rel="noreferrer"
									target="_blank"
								>
									{siteConfig.contact.instagramLabel}
								</a>
							</li>

							<li>
								<MapPin className="inline-block mr-1.5" size={20} />
								<p className="inline-block underline underline-offset-4 hover:text-muted-foreground">
									Menorca, Illes Balears
								</p>
							</li>
						</ul>
					</address>
				</div>
			</div>
		</section>
	);
}
