import type { Metadata } from "next";
import { TemplatesHero } from "@/components/sections/TemplatesHero";
import { TemplatesMarquee } from "@/components/sections/TemplatesMarquee";
import { TemplatesShop } from "@/components/sections/TemplatesShop";
import { TemplatesWhy } from "@/components/sections/TemplatesWhy";
import { TemplatesProcess } from "@/components/sections/TemplatesProcess";
import { TemplatesFaq } from "@/components/sections/TemplatesFaq";
import { TemplatesCta } from "@/components/sections/TemplatesCta";

export const metadata: Metadata = {
  title: "Templates Notion — Pour freelances tech · Nicolas Samier",
  description:
    "Templates Notion pour développeurs freelances. Outils prêts à l'emploi, en français, pour gérer son activité, ses clients et ses finances.",
};

export default function TemplatesPage() {
  return (
    <main>
      <TemplatesHero />
      <TemplatesMarquee />
      <TemplatesShop />
      <TemplatesWhy />
      <TemplatesProcess />
      <TemplatesFaq />
      <TemplatesCta />
    </main>
  );
}
