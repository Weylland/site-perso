import { render, screen } from "@testing-library/react";
import { MerciHero } from "./MerciHero";

it("renders the h1", () => {
  render(<MerciHero />);
  expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
});

it("links back to the home page", () => {
  render(<MerciHero />);
  expect(screen.getByRole("link", { name: /retour à l'accueil/i })).toHaveAttribute("href", "/");
});

it("links to the about page", () => {
  render(<MerciHero />);
  expect(screen.getByRole("link", { name: "Voir mon parcours" })).toHaveAttribute(
    "href",
    "/a-propos",
  );
});
