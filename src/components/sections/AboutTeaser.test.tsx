import { render, screen } from "@testing-library/react";
import { AboutTeaser } from "./AboutTeaser";

it("links to the full about page", () => {
  render(<AboutTeaser />);
  expect(screen.getByRole("link", { name: "Parcours complet" })).toHaveAttribute(
    "href",
    "/a-propos",
  );
});
