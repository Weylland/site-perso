import { render, screen } from "@testing-library/react";
import { ContactForm } from "./ContactForm";

it("renders the required fields", () => {
  render(<ContactForm />);
  expect(screen.getByLabelText("Nom *")).toBeRequired();
  expect(screen.getByLabelText("Email *")).toBeRequired();
  expect(screen.getByLabelText("Type de demande *")).toBeRequired();
  expect(screen.getByLabelText("Message *")).toBeRequired();
});

it("renders the optional fields as not required", () => {
  render(<ContactForm />);
  expect(screen.getByLabelText("Structure (optionnel)")).not.toBeRequired();
  expect(screen.getByLabelText("Budget estimé (optionnel)")).not.toBeRequired();
  expect(screen.getByLabelText("Délai idéal (optionnel)")).not.toBeRequired();
});

it("hides the honeypot field from real users but keeps it in the DOM", () => {
  render(<ContactForm />);
  const honeypot = screen.getByLabelText("Site web (laisser vide)");
  expect(honeypot).toHaveAttribute("tabIndex", "-1");
  expect(honeypot).toHaveAttribute("autoComplete", "off");
});

it("requires consent to the privacy policy before submitting", () => {
  render(<ContactForm />);
  const consent = screen.getByRole("checkbox");
  expect(consent).toBeRequired();
});

it("links the privacy policy from the consent text", () => {
  render(<ContactForm />);
  expect(screen.getByRole("link", { name: "En savoir plus" })).toHaveAttribute(
    "href",
    "/confidentialite",
  );
});

it("renders the submit button", () => {
  render(<ContactForm />);
  expect(screen.getByRole("button", { name: /envoyer ma demande/i })).toBeInTheDocument();
});
