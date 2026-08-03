import { siteConfig } from "@/config/site";

export function Footer() {
	return (
		<footer className="border-t py-6">
			<div className="mx-auto flex w-full max-w-7xl justify-around gap-2 px-4 text-sm text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
				<p>&copy; 2026 {siteConfig.name}</p>
				<a
					className="underline underline-offset-4 hover:text-foreground"
					href={siteConfig.contact.instagram}
					rel="noreferrer"
					target="_blank"
				>
					{siteConfig.contact.instagramLabel}
				</a>
			</div>
		</footer>
	);
}
