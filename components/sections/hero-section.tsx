import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <Section>
      <Container>
        <div className="space-y-6">
          <h1>Web Futgo</h1>

          <p>
            Web corporativa per a campus, tecnificacions, clínics i tornejos de
            futbol base.
          </p>
          <Button type="button">Més informació</Button>
        </div>
      </Container>
    </Section>
  );
}
