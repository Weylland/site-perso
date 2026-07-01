import { render, screen } from "@testing-library/react";
import { Testimonial } from "./Testimonial";

it("links to the client site externally with security attributes", () => {
  render(<Testimonial />);
  const link = screen.getByRole("link", { name: "cgr5962.asso.fr" });
  expect(link).toHaveAttribute("href", "https://www.cgr5962.asso.fr/");
  expect(link).toHaveAttribute("target", "_blank");
  expect(link).toHaveAttribute("rel", "noopener noreferrer");
});
