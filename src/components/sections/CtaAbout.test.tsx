import { render, screen } from "@testing-library/react";
import { CtaAbout } from "./CtaAbout";

it("links to the contact page", () => {
  render(<CtaAbout />);
  expect(screen.getByRole("link", { name: "Discuter d'un projet" })).toHaveAttribute(
    "href",
    "/contact",
  );
});

it("links to the services page", () => {
  render(<CtaAbout />);
  expect(screen.getByRole("link", { name: "Voir les services" })).toHaveAttribute(
    "href",
    "/services",
  );
});
