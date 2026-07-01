import { render, screen } from "@testing-library/react";
import { AboutCv } from "./AboutCv";

it("links to the CV PDF with security attributes", () => {
  render(<AboutCv />);
  const link = screen.getByRole("link", { name: /télécharger mon cv/i });
  expect(link).toHaveAttribute("href", "/cv-nicolas-samier.pdf");
  expect(link).toHaveAttribute("target", "_blank");
  expect(link).toHaveAttribute("rel", "noopener noreferrer");
});
