import { render, screen } from "@testing-library/react";
import { Highlight } from "@/components/ui/Highlight";

describe("Highlight", () => {
  it("renders its children", () => {
    render(<Highlight>fullstack</Highlight>);
    expect(screen.getByText("fullstack")).toBeInTheDocument();
  });

  it("applies the sunshine class by default", () => {
    render(<Highlight>x</Highlight>);
    expect(screen.getByText("x")).toHaveClass("highlight-sunshine");
  });

  it("applies the peach class when color is peach", () => {
    render(<Highlight color="peach">x</Highlight>);
    expect(screen.getByText("x")).toHaveClass("highlight-peach");
  });

  it("forwards extra className", () => {
    render(<Highlight className="extra">x</Highlight>);
    expect(screen.getByText("x")).toHaveClass("extra");
  });
});
