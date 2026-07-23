import { about } from "@/content";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function AboutSection() {
  return (
    <Section id="about">
      <Container>
        <div className="max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">{about.title}</h2>

          <p className="text-gray-600">{about.description}</p>
        </div>
      </Container>
    </Section>
  );
}
