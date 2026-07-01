import { render, screen } from "@testing-library/react";
import { CtaFinal } from "./CtaFinal";

it("links to the contact page", () => {
  render(<CtaFinal />);
  expect(screen.getByRole("link", { name: "Discuter d'un projet" })).toHaveAttribute(
    "href",
    "/contact",
  );
});

it("links to the CV PDF with security attributes", () => {
  render(<CtaFinal />);
  const link = screen.getByRole("link", { name: "Télécharger mon CV" });
  expect(link).toHaveAttribute("href", "/cv-nicolas-samier.pdf");
  expect(link).toHaveAttribute("target", "_blank");
  expect(link).toHaveAttribute("rel", "noopener noreferrer");
});
