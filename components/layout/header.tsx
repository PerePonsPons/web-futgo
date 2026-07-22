import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Navigation } from "./navigation";

export function Header() {
  return (
    <header className="border-b">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Image
            src="/logos/logo.svg"
            alt="Web Futgo"
            width={180}
            height={48}
            priority
          />

          <Navigation />
        </div>
      </Container>
    </header>
  );
}
