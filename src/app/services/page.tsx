import type { Metadata } from "next";
import { ServicesHero } from "@/components/sections/ServicesHero";
import { ServicesMarquee } from "@/components/sections/ServicesMarquee";
import { ServicesFormules } from "@/components/sections/ServicesFormules";
import { ServicesNotListed } from "@/components/sections/ServicesNotListed";
import { Process } from "@/components/sections/Process";
import { Testimonial } from "@/components/sections/Testimonial";
import { ServicesFaq } from "@/components/sections/ServicesFaq";
import { CtaServices } from "@/components/sections/CtaServices";

export const metadata: Metadata = {
  title: "Services — Nicolas Samier, développeur fullstack freelance",
  description:
    "Sites vitrine, applications web sur mesure, automatisation, IA et maintenance. Développeur web fullstack, Hauts-de-France, sur place ou à distance.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesMarquee />
      <ServicesFormules />
      <ServicesNotListed />
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
