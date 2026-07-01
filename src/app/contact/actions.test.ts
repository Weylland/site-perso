import { vi, beforeEach, it, expect } from "vitest";

vi.mock("next/navigation", () => ({
  redirect: vi.fn((path: string) => {
    throw Object.assign(new Error("NEXT_REDIRECT"), { digest: `NEXT_REDIRECT;push;${path};` });
  }),
}));

import { redirect } from "next/navigation";
import { sendContactForm } from "./actions";

beforeEach(() => {
  vi.mocked(redirect).mockClear();
});

it("redirects to the confirmation page for a real submission", async () => {
  const formData = new FormData();
  formData.set("website", "");
  await expect(sendContactForm(null, formData)).rejects.toThrow();
  expect(redirect).toHaveBeenCalledWith("/contact/merci");
  expect(redirect).toHaveBeenCalledTimes(1);
});

it("redirects once, without falling through to the send logic, when the honeypot is filled", async () => {
  const formData = new FormData();
  formData.set("website", "http://spambot.example");
  await expect(sendContactForm(null, formData)).rejects.toThrow();
  expect(redirect).toHaveBeenCalledWith("/contact/merci");
  expect(redirect).toHaveBeenCalledTimes(1);
});
