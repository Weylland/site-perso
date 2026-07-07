import { it, expect } from "vitest";
import { buildContactEmailHtml, buildContactEmailText } from "./contact-email";

const baseSubmission = {
  nom: "Jean Dupont",
  email: "jean@example.com",
  type: "Site vitrine",
  message: "Ligne 1\nLigne 2",
};

it("includes required fields and preserves line breaks in the HTML message", () => {
  const html = buildContactEmailHtml(baseSubmission);
  expect(html).toContain("Jean Dupont");
  expect(html).toContain("jean@example.com");
  expect(html).toContain("Ligne 1<br>Ligne 2");
});

it("omits optional fields when absent", () => {
  const html = buildContactEmailHtml(baseSubmission);
  expect(html).not.toContain("Structure");
  expect(html).not.toContain("Budget estimé");
  expect(html).not.toContain("Délai idéal");
});

it("maps budget and delai values to their display labels", () => {
  const html = buildContactEmailHtml({
    ...baseSubmission,
    structure: "Dupont SARL",
    budget: "1500-5000",
    delai: "1mois",
  });
  expect(html).toContain("Dupont SARL");
  expect(html).toContain("1 500 – 5 000 €");
  expect(html).toContain("Sous 1 mois");
});

it("escapes HTML special characters in user input", () => {
  const html = buildContactEmailHtml({
    ...baseSubmission,
    nom: "<script>alert(1)</script>",
  });
  expect(html).not.toContain("<script>alert(1)</script>");
  expect(html).toContain("&lt;script&gt;");
});

it("builds a plain-text fallback with the same information", () => {
  const text = buildContactEmailText({
    ...baseSubmission,
    budget: "gt15000",
  });
  expect(text).toContain("Nom : Jean Dupont");
  expect(text).toContain("Budget estimé : > 15 000 €");
  expect(text).toContain("Ligne 1\nLigne 2");
});
