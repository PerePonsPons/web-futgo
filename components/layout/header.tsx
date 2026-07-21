import { Container } from "@/components/ui/container";
import { Navigation } from "./navigation";

export function Header() {
  return (
    <header>
      <Container>
        <div>Web Futgo</div>

        <Navigation />
      </Container>
    </header>
  );
}
