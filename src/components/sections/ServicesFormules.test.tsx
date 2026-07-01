import { render, screen } from "@testing-library/react";
import { ServicesFormules } from "./ServicesFormules";

it("renders an anchor id for each formula matching the home page links", () => {
  const { container } = render(<ServicesFormules />);
  const ids = [
    "site-vitrine",
    "site-vitrine-cms",
    "application-web",
    "automatisation-n8n",
    "ia",
    "tma",
  ];
  ids.forEach((id) => {
    expect(container.querySelector(`#${id}`)).not.toBeNull();
  });
});

it("renders a devis request link for each of the six formulas", () => {
  render(<ServicesFormules />);
  const links = screen.getAllByRole("link", { name: "Demander un devis" });
  expect(links).toHaveLength(6);
  expect(links[0]).toHaveAttribute("href", "/contact?formule=site-vitrine");
  expect(links[5]).toHaveAttribute("href", "/contact?formule=tma");
});
