import type { Metadata } from "next";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { ServicesMarquee } from "@/components/sections/ServicesMarquee";
import { ServicesFormules } from "@/components/sections/ServicesFormules";
import { Process } from "@/components/sections/Process";
import { Testimonial } from "@/components/sections/Testimonial";
import { ServicesFaq } from "@/components/sections/ServicesFaq";
import { CtaServices } from "@/components/sections/CtaServices";

export const metadata: Metadata = {
  title: "Services — Nicolas Samier, développeur fullstack freelance",
  description:
    "Sites vitrine, applications web sur mesure, automatisations n8n, TMA. Développeur fullstack freelance, Pas-de-Calais, remote France.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesMarquee />
      <ServicesFormules />
      <Process
        subtitle={
          <>
            <em>Un cadre</em> clair.
          </>
        }
      />
      <Testimonial />
      <ServicesFaq />
      <CtaServices />
    </main>
  );
}
