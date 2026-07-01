import { render, screen } from "@testing-library/react";
import { AboutHero } from "./AboutHero";

it("renders the h1", () => {
  render(<AboutHero />);
  expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
});

it("links the CV button to the CV section anchor", () => {
  render(<AboutHero />);
  expect(screen.getByRole("link", { name: /télécharger mon cv/i })).toHaveAttribute("href", "#cv");
});

it("links the contact button to the contact page", () => {
  render(<AboutHero />);
  expect(screen.getByRole("link", { name: "Me contacter" })).toHaveAttribute("href", "/contact");
});
