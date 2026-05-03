import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/ContactHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactAlternatives } from "@/components/sections/ContactAlternatives";
import { ContactFaq } from "@/components/sections/ContactFaq";
import { ContactNewsletter } from "@/components/sections/ContactNewsletter";
import { ContactEngagement } from "@/components/sections/ContactEngagement";

export const metadata: Metadata = {
  title: "Contact — Nicolas Samier, développeur fullstack freelance",
  description:
    "Parlons de ton projet. Site, application web, automatisation n8n ou template sur mesure. Réponse sous 48 h ouvrées.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <ContactAlternatives />
      <ContactFaq />
      <ContactNewsletter />
      <ContactEngagement />
    </main>
  );
}
