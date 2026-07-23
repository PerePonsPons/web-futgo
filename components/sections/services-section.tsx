import { services } from "@/content";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";

export function ServicesSection() {
  return (
    <Section id="services">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight">
          Els nostres serveis
        </h2>

        <ul className="grid list-none gap-6 p-0 md:grid-cols-2">
          {services.map((service) => (
            <li key={service.id}>
              <Card>
                <h3 className="text-xl font-semibold">{service.title}</h3>

                <p className="mt-2 text-gray-600">{service.description}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
