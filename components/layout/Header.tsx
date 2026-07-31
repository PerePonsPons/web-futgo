import Image from "next/image";
import Link from "next/link";

const navigationItems = [
	{ label: "Inicio", href: "#home" },
	{ label: "Sobre FutGo", href: "#about" },
	{ label: "Actividades", href: "#services" },
	{ label: "Galeria", href: "#gallery" },
	{ label: "Contacto", href: "#contact" },
] as const;

export function Header() {
	return (
		<header className="sticky top-0 h-[12svh] z-50 border-b bg-white">
			<div className="w-full h-full flex justify-around items-center">
				<Link href="#home" className="relative w-40 h-full" aria-label="Ir al inicio de FutGo Talent">
					<Image
						src="/logos/futgo.jpeg"
						alt="FutGo Talent"
						className="object-cover"
						fill
						loading="eager"
					/>
				</Link>

				<nav aria-label="Navegacion principal" className="hidden md:block">
					<ul className="flex items-center gap-8">
						{navigationItems.map((item) => (
							<li key={item.href}>
								<Link
									href={item.href}
									className="p-4 text-md hover:text-gray-500 font-medium transition-colors"
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<Link
					href="#contact"
					className="inline-flex h-9 items-center justify-center rounded-md brightness-125 bg-[#637aa4] px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:hidden"
				>
					Contacto
				</Link>
			</div>
		</header>
	);
}
