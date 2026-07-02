import { siteConfig } from "@/lib/site-config";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  alternateName: "Samier Nicolas",
  url: siteConfig.url,
  email: `mailto:${siteConfig.email}`,
  jobTitle: "Développeur web fullstack",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Hauts-de-France",
    addressCountry: "FR",
  },
  sameAs: ["https://www.linkedin.com/in/samier-nicolas/", "https://github.com/Weylland"],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
