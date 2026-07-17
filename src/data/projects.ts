export type ProjectCategory = "Projet perso" | "Site client";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  year: string;
  url?: string;
  tech: string[];
  sticker: string;
  image?: string;
  accent: "sunshine" | "peach" | "mint" | "sky";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "watch-ia",
    name: "watch·ia",
    tagline: "Média de veille IA à pipeline LLM automatisé",
    description:
      "Média de veille IA en français entièrement automatisé : scraping RSS, scoring des articles, puis rédaction via Mistral et Claude. Admin complet type WordPress, serveur MCP Claude intégré, base SQLite, newsletter et SEO.",
    category: "Projet perso",
    year: "2025 — aujourd'hui",
    url: "https://watch-ia.com",
    tech: ["Next.js", "TypeScript", "Node.js", "SQLite", "Mistral API", "Claude MCP", "Railway"],
    sticker: "/stickers/eye.png",
    image: "/realisations/watch-ia.jpg",
    accent: "sunshine",
    featured: true,
  },
  {
    slug: "rivalrush",
    name: "RivalRush",
    tagline: "Plateforme de mini-jeux multijoueur en temps réel",
    description:
      "Plateforme de mini-jeux multijoueur en temps réel (duels) : lobby, comptes joueurs, mode invité et synchronisation des parties.",
    category: "Projet perso",
    year: "2025 — aujourd'hui",
    url: "https://rival-rush.com",
    tech: ["Next.js", "TypeScript", "Supabase"],
    sticker: "/stickers/gamepad.png",
    image: "/realisations/rivalrush.jpg",
    accent: "mint",
    featured: true,
  },
  {
    slug: "cgr",
    name: "CGR Hauts-de-France",
    tagline: "Site vitrine d'une association d'accompagnement",
    description:
      "Site vitrine du CGR (Club Génération Réussite), association d'accompagnement des entrepreneurs, micro-entreprises et associations depuis 1978 : présentation des packs, services, formations, actualités et contact.",
    category: "Site client",
    year: "2024",
    url: "https://www.cgr5962.asso.fr/",
    tech: ["WordPress", "Elementor"],
    sticker: "/stickers/chart.svg",
    image: "/realisations/cgr.jpg",
    accent: "sky",
    featured: true,
  },
  {
    slug: "site-perso",
    name: "Ce site",
    tagline: "Portfolio & présentation en néo-brutalisme soft",
    description:
      "Le site que vous consultez : portfolio, présentation et point de contact. Design néo-brutalisme soft pastel, auto-hébergé et accessible.",
    category: "Projet perso",
    year: "2026",
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Coolify"],
    sticker: "/stickers/ns-big.svg",
    image: "/realisations/site-perso.jpg",
    accent: "peach",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
