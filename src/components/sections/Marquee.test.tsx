import { render, screen } from "@testing-library/react";
import { Marquee } from "./Marquee";

describe("Marquee", () => {
  it("renders with the stack technique aria-label", () => {
    render(<Marquee />);
    expect(screen.getByRole("region", { name: "Stack technique" })).toBeInTheDocument();
  });

  it("renders the tech stack items", () => {
    render(<Marquee />);
    expect(screen.getAllByText("TypeScript")).not.toHaveLength(0);
  });

  it("duplicates items for seamless infinite scroll", () => {
    render(<Marquee />);
    expect(screen.getAllByText("TypeScript")).toHaveLength(2);
  });
});
