"use server";
import { redirect } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

export async function sendContactForm(_prev: unknown, formData: FormData) {
  const honeypot = formData.get("website") as string;
  if (honeypot) redirect("/contact/merci");

  const nom = formData.get("nom") as string;
  const email = formData.get("email") as string;
  const structure = formData.get("structure") as string;
  const type = formData.get("type") as string;
  const budget = formData.get("budget") as string;
  const delai = formData.get("delai") as string;
  const message = formData.get("message") as string;

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
        replyTo: { email, name: nom },
        subject: `Nouveau message de ${nom}`,
        textContent: [
          `Nom : ${nom}`,
          `Email : ${email}`,
          structure && `Structure : ${structure}`,
          `Type de projet : ${type}`,
          budget && `Budget estimé : ${budget}`,
          delai && `Délai : ${delai}`,
          "",
          message,
        ]
          .filter(Boolean)
          .join("\n"),
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
