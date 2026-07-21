import { about } from "@/content";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function AboutSection() {
  return (
    <Section>
      <Container>
        <h2>{about.title}</h2>

        <p>{about.description}</p>
      </Container>
    </Section>
  );
}
