import { render, screen } from "@testing-library/react";
import { ProjectsFeatured } from "./ProjectsFeatured";
import { featuredProjects } from "@/data/projects";

it("renders the projects region", () => {
  render(<ProjectsFeatured />);
  expect(screen.getByRole("region", { name: "Projets et réalisations" })).toBeInTheDocument();
});

it("renders one card per featured project", () => {
  render(<ProjectsFeatured />);
  featuredProjects.forEach((project) => {
    expect(screen.getByRole("heading", { name: project.name })).toBeInTheDocument();
  });
});

it("links to the full realisations page", () => {
  render(<ProjectsFeatured />);
  expect(screen.getByRole("link", { name: /toutes les réalisations/i })).toHaveAttribute(
    "href",
    "/realisations",
  );
});
