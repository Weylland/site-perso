import { render, screen } from "@testing-library/react";
import { Process } from "./Process";

it("renders the process region", () => {
  render(<Process />);
  expect(screen.getByRole("region", { name: "Processus" })).toBeInTheDocument();
});

it("renders all four step headings", () => {
  render(<Process />);
  expect(screen.getByRole("heading", { name: /brief/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /devis/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /développement/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /livraison/i })).toBeInTheDocument();
});

it("renders all four step numbers", () => {
  render(<Process />);
  expect(screen.getByText("01")).toBeInTheDocument();
  expect(screen.getByText("02")).toBeInTheDocument();
  expect(screen.getByText("03")).toBeInTheDocument();
  expect(screen.getByText("04")).toBeInTheDocument();
});
