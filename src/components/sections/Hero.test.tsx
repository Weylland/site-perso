import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders an h1 with the headline", () => {
    render(<Hero />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Nicolas");
  });

  it("renders the primary CTA pointing to contact", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: "Discuter d'un projet" })).toHaveAttribute(
      "href",
      "/contact",
    );
  });

  it("renders the secondary CTA pointing to templates", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: "Voir les templates" })).toHaveAttribute(
      "href",
      "/templates",
    );
  });

  it("renders the eyebrow availability label", () => {
    render(<Hero />);
    expect(screen.getByText(/Disponible/i)).toBeInTheDocument();
  });
});
