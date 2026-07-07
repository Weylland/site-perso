"use server";
import { redirect } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { buildContactEmailHtml, buildContactEmailText } from "@/lib/contact-email";

export async function sendContactForm(_prev: unknown, formData: FormData) {
  const honeypot = formData.get("website") as string;
  if (honeypot) redirect("/contact/merci");

  const submission = {
    nom: formData.get("nom") as string,
    email: formData.get("email") as string,
    structure: (formData.get("structure") as string) || undefined,
    type: formData.get("type") as string,
    budget: (formData.get("budget") as string) || undefined,
    delai: (formData.get("delai") as string) || undefined,
    message: formData.get("message") as string,
  };

  const errorMessage = `Un problème est survenu lors de l'envoi. Réessaie, ou écris-moi directement à ${siteConfig.email}.`;

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": process.env.BREVO_API_KEY as string,
      },
      body: JSON.stringify({
        sender: {
          name: "Site nicolas-samier.fr",
          email: `contact@${new URL(siteConfig.url).hostname}`,
        },
        to: [{ email: siteConfig.email, name: siteConfig.name }],
        replyTo: { email: submission.email, name: submission.nom },
        subject: `Nouveau message de ${submission.nom}`,
        htmlContent: buildContactEmailHtml(submission),
        textContent: buildContactEmailText(submission),
      }),
    });

    if (!response.ok) {
      return { error: errorMessage };
    }
  } catch {
    return { error: errorMessage };
  }

  redirect("/contact/merci");
}
