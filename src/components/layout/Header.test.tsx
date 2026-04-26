import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders the header element with banner role", () => {
    render(<Header />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("renders a logo link pointing to home", () => {
    render(<Header />);
    const logo = screen.getByRole("link", { name: /Nicolas Samier/i });
    expect(logo).toHaveAttribute("href", "/");
  });

  it("renders the four navigation links with correct hrefs", () => {
    render(<Header />);
    const links = [
      { name: "Services", href: "/services" },
      { name: "À propos", href: "/a-propos" },
      { name: "Templates", href: "/templates" },
      { name: "Contact", href: "/contact" },
    ];

    links.forEach(({ name, href }) => {
      expect(screen.getByRole("link", { name })).toHaveAttribute("href", href);
    });
  });

  it("renders the CTA link pointing to contact", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: /Discuter/i })).toHaveAttribute("href", "/contact");
  });
});
