import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MobileMenu } from "./MobileMenu";

const links = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services" },
  { name: "À propos", href: "/a-propos" },
  { name: "Réalisations", href: "/realisations" },
  { name: "Contact", href: "/contact" },
];

describe("MobileMenu", () => {
  it("renders the nav panel as inert until opened", () => {
    render(<MobileMenu />);
    expect(screen.getByRole("navigation", { name: "Navigation mobile" })).toHaveAttribute("inert");
  });

  it("opens the nav panel with all links when the toggle is clicked", async () => {
    const user = userEvent.setup();
    render(<MobileMenu />);

    await user.click(screen.getByRole("button", { name: "Ouvrir le menu" }));

    expect(screen.getByRole("navigation", { name: "Navigation mobile" })).not.toHaveAttribute(
      "inert",
    );
    links.forEach(({ name, href }) => {
      expect(screen.getByRole("link", { name })).toHaveAttribute("href", href);
    });
  });

  it("closes the nav panel when the close button is clicked", async () => {
    const user = userEvent.setup();
    render(<MobileMenu />);

    await user.click(screen.getByRole("button", { name: "Ouvrir le menu" }));
    await user.click(screen.getByRole("button", { name: "Fermer le menu" }));

    expect(screen.getByRole("navigation", { name: "Navigation mobile" })).toHaveAttribute("inert");
  });

  it("closes the nav panel when a link is clicked", async () => {
    const user = userEvent.setup();
    render(<MobileMenu />);

    await user.click(screen.getByRole("button", { name: "Ouvrir le menu" }));
    await user.click(screen.getByRole("link", { name: "Services" }));

    expect(screen.getByRole("navigation", { name: "Navigation mobile" })).toHaveAttribute("inert");
  });

  it("closes the nav panel when Escape is pressed", async () => {
    const user = userEvent.setup();
    render(<MobileMenu />);

    await user.click(screen.getByRole("button", { name: "Ouvrir le menu" }));
    fireEvent.keyDown(window, { key: "Escape" });

    expect(screen.getByRole("navigation", { name: "Navigation mobile" })).toHaveAttribute("inert");
  });
});
