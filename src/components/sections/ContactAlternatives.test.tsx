import { render, screen } from "@testing-library/react";
import { ContactAlternatives } from "./ContactAlternatives";

it("links the email card with a mailto href", () => {
  render(<ContactAlternatives />);
  expect(screen.getByRole("link", { name: /email/i })).toHaveAttribute(
    "href",
    "mailto:samiernicolas62@gmail.com",
  );
});

it("links the LinkedIn card externally with security attributes", () => {
  render(<ContactAlternatives />);
  const link = screen.getByRole("link", { name: /linkedin/i });
  expect(link).toHaveAttribute("href", "https://www.linkedin.com/in/samier-nicolas/");
  expect(link).toHaveAttribute("target", "_blank");
  expect(link).toHaveAttribute("rel", "noopener noreferrer");
});

it("links the CV card to the about page CV anchor", () => {
  render(<ContactAlternatives />);
  expect(screen.getByRole("link", { name: /cv pdf/i })).toHaveAttribute("href", "/a-propos#cv");
});
