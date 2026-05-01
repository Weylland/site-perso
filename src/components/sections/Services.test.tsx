import { render, screen } from "@testing-library/react";
import { Services } from "./Services";

it("renders the services region", () => {
  render(<Services />);
  expect(screen.getByRole("region", { name: "Services" })).toBeInTheDocument();
});

it("renders all three service cards with correct headings", () => {
  render(<Services />);
  expect(screen.getByRole("heading", { name: /sites vitrine/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /applications/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /automatisations/i })).toBeInTheDocument();
});

it("renders card links pointing to correct service anchors", () => {
  render(<Services />);
  const links = screen.getAllByRole("link", { name: /voir les formules/i });
  expect(links).toHaveLength(3);
  expect(links[0]).toHaveAttribute("href", "/services#site-vitrine");
  expect(links[1]).toHaveAttribute("href", "/services#application-web");
  expect(links[2]).toHaveAttribute("href", "/services#automatisation-n8n");
});

it("renders the price tags", () => {
  render(<Services />);
  expect(screen.getByText(/1\s*200/)).toBeInTheDocument();
  expect(screen.getByText(/4\s*500/)).toBeInTheDocument();
  expect(screen.getByText(/400/)).toBeInTheDocument();
});
