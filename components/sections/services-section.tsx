import { services } from "@/content";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";

export function ServicesSection() {
  return (
    <Section>
      <Container>
        <h2>Els nostres serveis</h2>

        <ul className="grid list-none gap-6 p-0 md:grid-cols-2">
          {services.map((service) => (
            <li key={service.id}>
              <Card>
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
