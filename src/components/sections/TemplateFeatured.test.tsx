import { render, screen } from "@testing-library/react";
import { TemplateFeatured } from "./TemplateFeatured";

it("renders the template phare region", () => {
  render(<TemplateFeatured />);
  expect(screen.getByRole("region", { name: "Template phare" })).toBeInTheDocument();
});

it("renders the template title", () => {
  render(<TemplateFeatured />);
  expect(screen.getByRole("heading", { name: /freelance/i })).toBeInTheDocument();
});

it("renders the price", () => {
  render(<TemplateFeatured />);
  expect(screen.getByText(/12/)).toBeInTheDocument();
});

it("renders the CTA links with correct hrefs", () => {
  render(<TemplateFeatured />);
  expect(screen.getByRole("link", { name: /voir le template/i })).toHaveAttribute(
    "href",
    "/templates/freelance-dev-hub",
  );
  expect(screen.getByRole("link", { name: /autres templates/i })).toHaveAttribute(
    "href",
    "/templates",
  );
});

it("renders all five feature items", () => {
  render(<TemplateFeatured />);
  expect(screen.getByText(/8 databases/i)).toBeInTheDocument();
  expect(screen.getByText(/mises à jour à vie/i)).toBeInTheDocument();
});
