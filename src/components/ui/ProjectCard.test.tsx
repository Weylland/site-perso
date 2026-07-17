import { render, screen } from "@testing-library/react";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/data/projects";

const baseProject: Project = {
  slug: "test-project",
  name: "Test Project",
  tagline: "Un projet de test",
  description: "Description longue du projet de test.",
  category: "Projet perso",
  year: "2026",
  tech: ["Next.js", "TypeScript"],
  sticker: "/stickers/eye.png",
  accent: "sunshine",
};

it("renders the tagline by default and the description when detailed", () => {
  render(<ProjectCard project={baseProject} />);
  expect(screen.getByText("Un projet de test")).toBeInTheDocument();

  render(<ProjectCard project={baseProject} detailed />);
  expect(screen.getByText("Description longue du projet de test.")).toBeInTheDocument();
});

it("shows the year instead of a link when the project has no url", () => {
  render(<ProjectCard project={baseProject} />);
  expect(screen.getByText("2026")).toBeInTheDocument();
  expect(screen.queryByRole("link", { name: "Voir le site" })).not.toBeInTheDocument();
});

it("shows a link to the site when the project has a url", () => {
  render(<ProjectCard project={{ ...baseProject, url: "https://example.com" }} />);
  const link = screen.getByRole("link", { name: "Voir le site" });
  expect(link).toHaveAttribute("href", "https://example.com");
  expect(link).toHaveAttribute("target", "_blank");
  expect(link).toHaveAttribute("rel", "noopener noreferrer");
});

it("renders the placeholder when the project has no image yet", () => {
  render(<ProjectCard project={baseProject} />);
  expect(screen.getByText("Aperçu à venir")).toBeInTheDocument();
});

it("renders the image instead of the placeholder once one is set", () => {
  render(<ProjectCard project={{ ...baseProject, image: "/projects/test.png" }} />);
  expect(screen.queryByText("Aperçu à venir")).not.toBeInTheDocument();
  expect(screen.getByRole("img", { name: "Aperçu de Test Project" })).toBeInTheDocument();
});
