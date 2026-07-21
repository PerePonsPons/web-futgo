import { contact } from "@/content";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function ContactSection() {
  return (
    <Section>
      <Container>
        <h2>Contacte</h2>

        <ul>
          <li>
            <strong>Correu:</strong> {contact.email}
          </li>

          <li>
            <strong>Telèfon:</strong> {contact.phone}
          </li>

          <li>
            <strong>Ubicació:</strong> {contact.address}
          </li>
        </ul>
      </Container>
    </Section>
  );
}
