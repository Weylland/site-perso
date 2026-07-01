import { render, screen } from "@testing-library/react";
import { ServicesNotListed } from "./ServicesNotListed";

it("links to the contact page", () => {
  render(<ServicesNotListed />);
  expect(screen.getByRole("link", { name: /me poser la question/i })).toHaveAttribute(
    "href",
    "/contact",
  );
});
