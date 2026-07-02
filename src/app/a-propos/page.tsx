import { buildMetadata } from "@/lib/site-config";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutBio } from "@/components/sections/AboutBio";
import { AboutStack } from "@/components/sections/AboutStack";
import { AboutParcours } from "@/components/sections/AboutParcours";
import { AboutFormations } from "@/components/sections/AboutFormations";
import { AboutCv } from "@/components/sections/AboutCv";
import { AboutHobbies } from "@/components/sections/AboutHobbies";
import { CtaAbout } from "@/components/sections/CtaAbout";

export const metadata = buildMetadata({
  title: "À propos — Nicolas Samier, développeur fullstack",
  description:
    "Parcours, formations, stack technique et façon de travailler. Nicolas Samier, développeur fullstack, Hauts-de-France, disponible en CDI comme en freelance.",
  path: "/a-propos",
});

export default function APropos() {
  return (
    <main>
      <AboutHero />
      <AboutBio />
      <AboutStack />
      <AboutParcours />
      <AboutFormations />
      <AboutCv />
      <AboutHobbies />
      <CtaAbout />
    </main>
  );
}
