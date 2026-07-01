import { projects, featuredProjects } from "./projects";

it("only includes projects explicitly marked as featured", () => {
  expect(featuredProjects.length).toBeGreaterThan(0);
  expect(featuredProjects.every((p) => p.featured)).toBe(true);
  expect(featuredProjects.length).toBeLessThan(projects.length);
});

it("every project has a unique slug", () => {
  const slugs = projects.map((p) => p.slug);
  expect(new Set(slugs).size).toBe(slugs.length);
});
