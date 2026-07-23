import { contact } from "@/content";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function ContactSection() {
  return (
    <Section id="contact">
      <Container>
        <div className="max-w-3xl space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Contacte</h2>

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
        </div>
      </Container>
    </Section>
  );
}
