import { render, screen } from "@testing-library/react";
import { Reveal } from "./Reveal";

it("renders its children", () => {
  render(
    <Reveal>
      <p>Contenu de la carte</p>
    </Reveal>,
  );
  expect(screen.getByText("Contenu de la carte")).toBeInTheDocument();
});

it("forwards the id to the wrapper for anchor links", () => {
  const { container } = render(
    <Reveal id="ma-section">
      <p>Contenu</p>
    </Reveal>,
  );
  expect(container.querySelector("#ma-section")).not.toBeNull();
});

it("shows content immediately when IntersectionObserver is unavailable (e.g. jsdom)", () => {
  render(
    <Reveal>
      <p>Contenu</p>
    </Reveal>,
  );
  expect(screen.getByText("Contenu").closest("div")).toHaveClass("opacity-100");
});
