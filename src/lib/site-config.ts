import type { Metadata } from "next";

export const siteConfig = {
  name: "Nicolas Samier",
  url: "https://nicolas-samier.fr",
  title: "Nicolas Samier — Développeur fullstack (CDI & freelance)",
  description:
    "Développeur web fullstack, Hauts-de-France — sur place ou à distance. Sites et applications web (Next.js, Node), infrastructure AWS, automatisation et IA. Disponible en CDI comme en freelance.",
  locale: "fr_FR",
  email: "samiernicolas62@gmail.com",
} as const;

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  noindex = false,
}: PageMetadataInput): Metadata {
  const url = path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title,
      description,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
    ...(noindex && { robots: { index: false, follow: false } }),
  };
}
