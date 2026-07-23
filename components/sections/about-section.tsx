import { about } from "@/content";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function AboutSection() {
  return (
    <Section>
      <Container>
        <h2 className="text-3xl font-bold tracking-tight">{about.title}</h2>

        <p className="text-gray-600">{about.description}</p>
      </Container>
    </Section>
  );
}
