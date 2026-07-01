import { render, screen } from "@testing-library/react";
import { ServicesHero } from "./ServicesHero";

it("renders the h1", () => {
  render(<ServicesHero />);
  expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
});

it("links to the formules anchor", () => {
  render(<ServicesHero />);
  expect(screen.getByRole("link", { name: "Voir les formules" })).toHaveAttribute(
    "href",
    "#formules",
  );
});

it("links to the contact page", () => {
  render(<ServicesHero />);
  expect(screen.getByRole("link", { name: "Discuter d'un projet" })).toHaveAttribute(
    "href",
    "/contact",
  );
});
