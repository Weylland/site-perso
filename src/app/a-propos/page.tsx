import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutBio } from "@/components/sections/AboutBio";
import { AboutStack } from "@/components/sections/AboutStack";
import { AboutParcours } from "@/components/sections/AboutParcours";
import { AboutCv } from "@/components/sections/AboutCv";
import { AboutHobbies } from "@/components/sections/AboutHobbies";
import { CtaAbout } from "@/components/sections/CtaAbout";

export const metadata: Metadata = {
  title: "À propos — Nicolas Samier, développeur fullstack",
  description:
    "Parcours, stack technique et façon de travailler. Nicolas Samier, développeur fullstack freelance, 3 ans d'expérience, Pas-de-Calais.",
};

export default function APropos() {
  return (
    <main>
      <AboutHero />
      <AboutBio />
      <AboutStack />
      <AboutParcours />
      <AboutCv />
      <AboutHobbies />
      <CtaAbout />
    </main>
  );
}
