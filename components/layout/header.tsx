import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Navigation } from "./navigation";

export function Header() {
  return (
    <header>
      <Container>
        <Image
          src="/logos/logo.svg"
          alt="Web Futgo"
          width={180}
          height={48}
          priority
        />

        <Navigation />
      </Container>
    </header>
  );
}
