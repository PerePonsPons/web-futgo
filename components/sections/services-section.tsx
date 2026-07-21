import { services } from "@/content";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function ServicesSection() {
  return (
    <Section>
      <Container>
        <h2>Els nostres serveis</h2>

        <ul>
          {services.map((service) => (
            <li key={service.id}>
              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
