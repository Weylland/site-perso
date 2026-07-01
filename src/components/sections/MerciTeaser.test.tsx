import { render, screen } from "@testing-library/react";
import { MerciTeaser } from "./MerciTeaser";

it("links to the about page", () => {
  render(<MerciTeaser />);
  expect(screen.getByRole("link", { name: "Voir mon parcours" })).toHaveAttribute(
    "href",
    "/a-propos",
  );
});

it("links back to the home page", () => {
  render(<MerciTeaser />);
  expect(screen.getByRole("link", { name: /retour à l'accueil/i })).toHaveAttribute("href", "/");
});
