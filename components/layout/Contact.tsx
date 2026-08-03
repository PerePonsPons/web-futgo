import { homeContent, siteConfig } from "@/config/site";

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
 )
}
