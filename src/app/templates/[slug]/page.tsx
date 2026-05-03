import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { templates } from "@/data/templates";
import { TemplateDetailHero } from "@/components/sections/TemplateDetailHero";
import { TemplateDetailMarquee } from "@/components/sections/TemplateDetailMarquee";
import { TemplateDetailPreview } from "@/components/sections/TemplateDetailPreview";
import { TemplateDetailContent } from "@/components/sections/TemplateDetailContent";
import { TemplateDetailUsecases } from "@/components/sections/TemplateDetailUsecases";
import { TemplateDetailFor } from "@/components/sections/TemplateDetailFor";
import { TemplateDetailFaq } from "@/components/sections/TemplateDetailFaq";
import { TemplateDetailReviews } from "@/components/sections/TemplateDetailReviews";
import { TemplateDetailCta } from "@/components/sections/TemplateDetailCta";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return templates.filter((t) => t.status === "active" && t.detail).map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const template = templates.find((t) => t.slug === slug);
  if (!template) return {};
  return {
    title: `${template.name} — Template Notion · ${template.price} € · Nicolas Samier`,
    description: template.tagline,
  };
}

export default async function TemplateDetailPage({ params }: Props) {
  const { slug } = await params;
  const template = templates.find((t) => t.slug === slug);

  if (!template || !template.detail) notFound();

  const { detail } = template;

  return (
    <main>
      <TemplateDetailHero template={template} />
      <TemplateDetailMarquee />
      <TemplateDetailPreview detail={detail} />
      <TemplateDetailContent detail={detail} />
      <TemplateDetailUsecases detail={detail} />
      <TemplateDetailFor detail={detail} />
      <TemplateDetailFaq detail={detail} />
      <TemplateDetailReviews detail={detail} />
      <TemplateDetailCta template={template} />
    </main>
  );
}
