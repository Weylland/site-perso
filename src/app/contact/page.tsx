import { buildMetadata } from "@/lib/site-config";
import { ContactHero } from "@/components/sections/ContactHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactAlternatives } from "@/components/sections/ContactAlternatives";
import { ContactFaq } from "@/components/sections/ContactFaq";
import { ContactEngagement } from "@/components/sections/ContactEngagement";

export const metadata = buildMetadata({
  title: "Contact — Nicolas Samier, développeur fullstack freelance",
  description:
    "Parlons de votre projet ou d'un poste. Site, application web, automatisation n8n, mission freelance ou CDI. Réponse sous 48 h ouvrées.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <ContactAlternatives />
      <ContactFaq />
      <ContactEngagement />
    </main>
  );
}
