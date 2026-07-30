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
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="#home" aria-label="Ir al inicio de FutGo Talent">
          <Image
            src="/logos/logo.svg"
            alt="FutGo Talent"
            width={180}
            height={48}
            priority
          />
        </Link>

        <nav aria-label="Navegacion principal" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="#contact"
          className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:hidden"
        >
          Contacto
        </Link>
      </div>
    </header>
  );
}
