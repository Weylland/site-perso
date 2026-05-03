"use server";
import { redirect } from "next/navigation";

export async function sendContactForm(_prev: unknown, formData: FormData) {
  const honeypot = formData.get("website") as string;
  if (honeypot) redirect("/contact/merci");

  // TODO: brancher Resend quand le domaine sera disponible
  // const { Resend } = await import("resend");
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "contact@nicolassamier.fr",
  //   to: "samiernicolas62@gmail.com",
  //   subject: `Nouveau message de ${formData.get("nom")}`,
  //   text: `...`,
  // });

  redirect("/contact/merci");
}
