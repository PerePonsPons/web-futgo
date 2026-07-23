import Link from "next/link";

import type { NavigationItem } from "@/types";

const navigationItems: NavigationItem[] = [
  {
    label: "Inici",
    href: "#home",
  },
  {
    label: "Sobre nosaltres",
    href: "#about",
  },
  {
    label: "Serveis",
    href: "#services",
  },
  {
    label: "Contacte",
    href: "#contact",
  },
];

export function Navigation() {
  return (
    <nav aria-label="Navegació principal">
      <ul className="flex items-center gap-6">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-gray-600"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
