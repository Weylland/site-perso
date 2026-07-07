import { vi, beforeEach, it, expect } from "vitest";

vi.mock("next/navigation", () => ({
  redirect: vi.fn((path: string) => {
    throw Object.assign(new Error("NEXT_REDIRECT"), { digest: `NEXT_REDIRECT;push;${path};` });
  }),
}));

import { redirect } from "next/navigation";
import { sendContactForm } from "./actions";

const fetchMock = vi.fn().mockResolvedValue({ ok: true });
vi.stubGlobal("fetch", fetchMock);

beforeEach(() => {
  vi.mocked(redirect).mockClear();
  fetchMock.mockClear();
});

it("sends the message via Brevo and redirects to the confirmation page", async () => {
  const formData = new FormData();
  formData.set("website", "");
  formData.set("nom", "Jean Dupont");
  formData.set("email", "jean@example.com");
  formData.set("type", "Site vitrine");
  formData.set("message", "Bonjour, je cherche un devis.");
  await expect(sendContactForm(null, formData)).rejects.toThrow();

  expect(fetchMock).toHaveBeenCalledTimes(1);
  const [url, options] = fetchMock.mock.calls[0];
  expect(url).toBe("https://api.brevo.com/v3/smtp/email");
  const body = JSON.parse(options.body);
  expect(body.replyTo).toEqual({ email: "jean@example.com", name: "Jean Dupont" });
  expect(body.textContent).toContain("Bonjour, je cherche un devis.");

  expect(redirect).toHaveBeenCalledWith("/contact/merci");
  expect(redirect).toHaveBeenCalledTimes(1);
});

it("redirects once, without calling Brevo, when the honeypot is filled", async () => {
  const formData = new FormData();
  formData.set("website", "http://spambot.example");
  await expect(sendContactForm(null, formData)).rejects.toThrow();
  expect(fetchMock).not.toHaveBeenCalled();
  expect(redirect).toHaveBeenCalledWith("/contact/merci");
  expect(redirect).toHaveBeenCalledTimes(1);
});

it("returns an error and does not redirect when Brevo responds with a failure status", async () => {
  fetchMock.mockResolvedValueOnce({ ok: false });
  const formData = new FormData();
  formData.set("website", "");
  formData.set("nom", "Jean Dupont");
  formData.set("email", "jean@example.com");
  formData.set("type", "Site vitrine");
  formData.set("message", "Bonjour, je cherche un devis.");

  const result = await sendContactForm(null, formData);

  expect(result).toEqual({ error: expect.stringContaining("Un problème est survenu") });
  expect(redirect).not.toHaveBeenCalled();
});

it("returns an error and does not redirect when the Brevo request throws", async () => {
  fetchMock.mockRejectedValueOnce(new Error("network down"));
  const formData = new FormData();
  formData.set("website", "");
  formData.set("nom", "Jean Dupont");
  formData.set("email", "jean@example.com");
  formData.set("type", "Site vitrine");
  formData.set("message", "Bonjour, je cherche un devis.");

  const result = await sendContactForm(null, formData);

  expect(result).toEqual({ error: expect.stringContaining("Un problème est survenu") });
  expect(redirect).not.toHaveBeenCalled();
});
