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
      <ul>
        {navigationItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
