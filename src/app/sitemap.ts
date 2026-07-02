import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const routes = [
  { path: "", priority: 1 },
  { path: "/services", priority: 0.8 },
  { path: "/a-propos", priority: 0.8 },
  { path: "/realisations", priority: 0.8 },
  { path: "/contact", priority: 0.8 },
  { path: "/cgv", priority: 0.3 },
  { path: "/confidentialite", priority: 0.3 },
  { path: "/mentions-legales", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
