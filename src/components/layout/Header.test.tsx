import { render, within } from "@testing-library/react";
import Header from "./Header";

// MobileMenu portals its off-canvas nav to document.body, so queries are
// scoped to `container` (the header's own subtree) to avoid matching the
// duplicate, inert links inside that portal.

describe("Header", () => {
  it("renders the header element with banner role", () => {
    const { container } = render(<Header />);
    expect(within(container).getByRole("banner")).toBeInTheDocument();
  });

  it("renders a logo link pointing to home", () => {
    const { container } = render(<Header />);
    const logo = within(container).getByRole("link", { name: /Nicolas Samier/i });
    expect(logo).toHaveAttribute("href", "/");
  });

  it("renders the navigation links with correct hrefs", () => {
    const { container } = render(<Header />);
    const links = [
      { name: "Accueil", href: "/" },
      { name: "Services", href: "/services" },
      { name: "À propos", href: "/a-propos" },
      { name: "Réalisations", href: "/realisations" },
      { name: "Contact", href: "/contact" },
    ];

    links.forEach(({ name, href }) => {
      expect(within(container).getByRole("link", { name })).toHaveAttribute("href", href);
    });
  });

  it("renders the CTA link pointing to contact", () => {
    const { container } = render(<Header />);
    expect(within(container).getByRole("link", { name: /Discuter/i })).toHaveAttribute(
      "href",
      "/contact",
    );
  });
});
