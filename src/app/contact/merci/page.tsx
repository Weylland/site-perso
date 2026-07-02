import { buildMetadata } from "@/lib/site-config";
import { MerciHero } from "@/components/sections/MerciHero";
import { MerciSteps } from "@/components/sections/MerciSteps";
import { MerciTeaser } from "@/components/sections/MerciTeaser";

export const metadata = buildMetadata({
  title: "Message envoyé — Nicolas Samier",
  description: "Merci pour ton message. Réponse sous 48 h ouvrées.",
  path: "/contact/merci",
  noindex: true,
});

export default function ContactMerciPage() {
  return (
    <main>
      <MerciHero />
      <MerciSteps />
      <MerciTeaser />
    </main>
  );
}
