import { render, screen } from "@testing-library/react";
import { Pill } from "./Pill";

describe("Pill", () => {
  it("renders its children", () => {
    render(<Pill>Disponible</Pill>);
    expect(screen.getByText("Disponible")).toBeInTheDocument();
  });

  it("applies the default tone shadow class", () => {
    render(<Pill>X</Pill>);
    expect(screen.getByText("X")).toHaveClass("shadow-brutal-sm");
  });

  it("applies a colored shadow when tone is set", () => {
    render(<Pill tone="peach">X</Pill>);
    const pill = screen.getByText("X");
    expect(pill.className).toContain("shadow-[2px_2px_0_var(--color-peach)]");
  });

  it("forwads extra className", () => {
    render(<Pill className="extra">X</Pill>);
    expect(screen.getByText("X")).toHaveClass("extra");
  });
});
