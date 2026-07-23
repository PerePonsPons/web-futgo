import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <Section id="home">
      <Container>
        <div className="max-w-3xl space-y-8 py-16 md:py-24">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Web Futgo
          </h1>

          <p className="max-w-2xl text-lg text-gray-600">
            Web corporativa per a campus, tecnificacions, clínics i tornejos de
            futbol base.
          </p>

          <Button className="px-6 py-3" type="button">
            Més informació
          </Button>
        </div>
      </Container>
    </Section>
  );
}
