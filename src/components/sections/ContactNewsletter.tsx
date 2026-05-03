"use client";
import { useState } from "react";

export function ContactNewsletter() {
  const [success, setSuccess] = useState(false);

  return (
    <section aria-label="Newsletter" className="bg-mint border-b-[2.5px] border-ink">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div className="text-center mb-10">
            <span className="section-label">Newsletter dev</span>
            <h2 className="mt-4">
              Une lettre <em>par mois</em>, pas plus.
            </h2>
            <p className="mt-4 text-[1.05rem]">
              Nouveaux templates, mises à jour, retours d&apos;XP de freelance dev. 28 personnes
              inscrites. Désinscription en un clic.
            </p>
          </div>

          <div className="newsletter-form">
            {success ? (
              <div className="newsletter-success">
                <p
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "1.4rem",
                    margin: "0 0 0.5rem",
                    fontWeight: 700,
                  }}
                >
                  ✓ Inscription confirmée
                </p>
                <p>
                  Vérifie ta boîte mail (et le dossier spam) pour confirmer ton adresse et recevoir
                  la checklist.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSuccess(true);
                }}
              >
                <div className="newsletter-row">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="ton@email.fr"
                    autoComplete="email"
                    aria-label="Adresse email"
                  />
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 px-6 py-[0.8rem] bg-sunshine border-[2.5px] border-ink shadow-brutal font-semibold text-base transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                  >
                    S&apos;inscrire
                    <span
                      aria-hidden
                      className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-rotate-12"
                    >
                      →
                    </span>
                  </button>
                </div>
                <div className="form-checkbox mt-3">
                  <input type="checkbox" id="nl-rgpd" name="nl-rgpd" required />
                  <label htmlFor="nl-rgpd">
                    J&apos;accepte de recevoir la newsletter et la politique de confidentialité.
                  </label>
                </div>
                <p className="newsletter-bonus">
                  🎁 Bonus inscription : la checklist <strong>Bug-free Deploy</strong> (PDF) reçue
                  immédiatement.
                </p>
              </form>
            )}
          </div>

          <p
            style={{
              textAlign: "center",
              fontSize: "0.82rem",
              opacity: 0.65,
              marginTop: "1rem",
            }}
          >
            Hébergé par <strong>Buttondown</strong>. Aucun tracking, pas de revente.{" "}
            <a href="/confidentialite" style={{ color: "inherit" }} className="underline">
              Politique de confidentialité
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
