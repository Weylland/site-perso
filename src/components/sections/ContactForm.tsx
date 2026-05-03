"use client";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContactForm } from "@/app/contact/actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group w-full inline-flex items-center justify-center gap-2 px-8 py-[1.1rem] bg-sunshine border-[2.5px] border-ink shadow-brutal font-semibold text-base transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out] hover:translate-x-1 hover:translate-y-1 hover:shadow-none disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? (
        "Envoi en cours…"
      ) : (
        <>
          Envoyer ma demande
          <span
            aria-hidden
            className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-rotate-12"
          >
            →
          </span>
        </>
      )}
    </button>
  );
}

export function ContactForm() {
  const [, formAction] = useActionState(sendContactForm, null);

  return (
    <section aria-label="Formulaire de contact" className="bg-peach border-b-[2.5px] border-ink">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <div className="text-center mb-16">
            <span className="section-label">Le formulaire</span>
            <h2 className="mt-4">
              Un brief <em>honnête</em>,
              <br />
              un retour carré.
            </h2>
            <p className="mt-5 text-[1.1rem] max-w-[58ch] mx-auto opacity-[0.82]">
              Pas besoin d&apos;un cahier des charges blindé. Trois lignes suffisent pour démarrer
              l&apos;échange.
            </p>
          </div>

          <form action={formAction} className="form-contact">
            {/* Honeypot anti-spam */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-9999px",
                width: "1px",
                height: "1px",
                overflow: "hidden",
              }}
            >
              <label htmlFor="website">Site web (laisser vide)</label>
              <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="form-field">
              <label htmlFor="nom">Nom *</label>
              <input
                type="text"
                id="nom"
                name="nom"
                required
                autoComplete="name"
                placeholder="Prénom Nom"
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                placeholder="toi@entreprise.fr"
              />
            </div>

            <div className="form-field">
              <label htmlFor="structure">Structure (optionnel)</label>
              <input
                type="text"
                id="structure"
                name="structure"
                autoComplete="organization"
                placeholder="Boîte, asso, collectif — ou rien"
              />
            </div>

            <div className="form-field">
              <label htmlFor="type">Type de demande *</label>
              <select id="type" name="type" required defaultValue="">
                <option value="" disabled>
                  — Choisir —
                </option>
                <option>Site vitrine</option>
                <option>Vitrine + CMS</option>
                <option>Application web</option>
                <option>Automatisation n8n</option>
                <option>Template Notion sur mesure</option>
                <option>TMA / dépannage sur existant</option>
                <option>CDI / mission longue</option>
                <option>Autre</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="budget">Budget estimé (optionnel)</label>
              <select id="budget" name="budget" defaultValue="">
                <option value="">— Choisir —</option>
                <option value="lt1500">&lt; 1 500 €</option>
                <option value="1500-5000">1 500 – 5 000 €</option>
                <option value="5000-15000">5 000 – 15 000 €</option>
                <option value="gt15000">&gt; 15 000 €</option>
                <option value="unknown">Je ne sais pas encore</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="delai">Délai idéal (optionnel)</label>
              <select id="delai" name="delai" defaultValue="">
                <option value="">— Choisir —</option>
                <option value="urgent">Urgent (sous 2 semaines)</option>
                <option value="1mois">Sous 1 mois</option>
                <option value="3mois">Sous 3 mois</option>
                <option value="libre">Pas de contrainte forte</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                required
                minLength={20}
                placeholder="Dis-moi ce que tu veux faire, dans quel contexte, et tout ce qui pourrait m'aider à bien comprendre le besoin."
              />
            </div>

            <div className="form-field form-checkbox">
              <input type="checkbox" id="rgpd" name="rgpd" required />
              <label htmlFor="rgpd">
                J&apos;accepte que mes données soient utilisées pour traiter cette demande.
                Conservation 12 mois max, pas de newsletter, pas de transfert tiers.{" "}
                <a href="/confidentialite" className="underline">
                  En savoir plus
                </a>
                .
              </label>
            </div>

            <SubmitButton />

            <p className="note-small text-center" style={{ marginTop: "1rem" }}>
              Réponse sous 48 h ouvrées · Du lundi au vendredi
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
