import { render, screen } from "@testing-library/react";
import { CtaServices } from "./CtaServices";

it("links to the contact page", () => {
  render(<CtaServices />);
  expect(screen.getByRole("link", { name: "Discuter d'un projet" })).toHaveAttribute(
    "href",
    "/contact",
  );
});
