import type { Metadata } from "next";
import { MerciHero } from "@/components/sections/MerciHero";
import { MerciSteps } from "@/components/sections/MerciSteps";
import { MerciTeaser } from "@/components/sections/MerciTeaser";

export const metadata: Metadata = {
  title: "Message envoyé — Nicolas Samier",
  description: "Merci pour ton message. Réponse sous 48 h ouvrées.",
  robots: { index: false },
};

export default function ContactMerciPage() {
  return (
    <main>
      <MerciHero />
      <MerciSteps />
      <MerciTeaser />
    </main>
  );
}
