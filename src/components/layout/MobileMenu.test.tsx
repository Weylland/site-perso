import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MobileMenu } from "./MobileMenu";

describe("MobileMenu", () => {
  it("hides the nav panel until the toggle is opened", () => {
    render(<MobileMenu />);
    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });

  it("opens the nav panel with all links when the toggle is clicked", async () => {
    const user = userEvent.setup();
    render(<MobileMenu />);

    await user.click(screen.getByRole("button", { name: "Ouvrir le menu" }));

    const nav = screen.getByRole("navigation", { name: "Navigation mobile" });
    const links = [
      { name: "Accueil", href: "/" },
      { name: "Services", href: "/services" },
      { name: "À propos", href: "/a-propos" },
      { name: "Réalisations", href: "/realisations" },
      { name: "Contact", href: "/contact" },
    ];
    links.forEach(({ name, href }) => {
      expect(screen.getByRole("link", { name })).toHaveAttribute("href", href);
    });
    expect(nav).toBeInTheDocument();
  });

  it("closes the nav panel when a link is clicked", async () => {
    const user = userEvent.setup();
    render(<MobileMenu />);

    await user.click(screen.getByRole("button", { name: "Ouvrir le menu" }));
    await user.click(screen.getByRole("link", { name: "Services" }));

    expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
  });

  it("toggles the button label and aria-expanded state", async () => {
    const user = userEvent.setup();
    render(<MobileMenu />);

    const toggle = screen.getByRole("button", { name: "Ouvrir le menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle);
    expect(screen.getByRole("button", { name: "Fermer le menu" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
  });
});
