import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the footer element", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("renders all internal links with correct hrefs", () => {
    render(<Footer />);
    const links = [
      { name: "Services", href: "/services" },
      { name: "À propos", href: "/a-propos" },
      { name: "Templates", href: "/templates" },
      { name: "Contact", href: "/contact" },
      { name: "Mentions légales", href: "/mentions-legales" },
      { name: "CGV", href: "/cgv" },
      { name: "Confidentialité", href: "/confidentialite" },
    ];

    links.forEach(({ name, href }) => {
      expect(screen.getByRole("link", { name })).toHaveAttribute("href", href);
    });
  });

  it("renders the email link with mailto href", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "contact@nicolassamier.fr" })).toHaveAttribute(
      "href",
      "mailto:contact@nicolassamier.fr",
    );
  });

  it("renders external social links with security attributes", () => {
    render(<Footer />);
    const externalLinks = ["LinkedIn", "GitHub"];
    externalLinks.forEach((name) => {
      const link = screen.getByRole("link", { name });
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  it.todo("links to the CV PDF file when available");
});
