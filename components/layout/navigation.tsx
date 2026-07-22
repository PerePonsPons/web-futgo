import Link from "next/link";
import type { NavigationItem } from "@/types";

const navigationItems: NavigationItem[] = [
  {
    label: "Inici",
    href: "/",
  },
];

export function Navigation() {
  return (
    <nav aria-label="Navegació principal">
      <ul className="flex items-center gap-6">
        {navigationItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
