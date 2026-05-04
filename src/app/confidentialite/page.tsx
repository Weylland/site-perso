import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Nicolas Samier",
  description:
    "Politique de confidentialité et gestion des données personnelles du site de Nicolas Samier. RGPD, durées de conservation, droits.",
};

export default function ConfidentialitePage() {
  return (
    <main>
      <section
        aria-label="Politique de confidentialité"
        className="bg-cream border-b-[2.5px] border-ink"
      >
        <div className="max-w-7xl mx-auto px-8 py-24 text-center">
          <span className="eyebrow">RGPD · Données personnelles</span>
          <h1 className="mt-6">
            Politique de <span className="highlight-sunshine">confidentialité</span>.
          </h1>
          <p className="mt-6 text-[1.15rem] opacity-80 max-w-[52ch] mx-auto leading-relaxed">
            Pas de newsletter, pas de tracking, pas de revente de données. On explique ce qui est
            collecté, pourquoi, et combien de temps. C&apos;est tout.
          </p>
        </div>
      </section>

      <section aria-label="Résumé en trois points" className="bg-mint border-b-[2.5px] border-ink">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <div className="text-center mb-16">
            <span className="section-label">Vite lu · 30 secondes</span>
            <h2 className="mt-4">
              L&apos;essentiel
              <br />
              <em>en trois points</em>.
            </h2>
          </div>
          <div className="grid-3" style={{ maxWidth: "820px", margin: "0 auto" }}>
            <div className="card text-center">
              <Image
                src="/stickers/envelope.svg"
                alt=""
                width={72}
                height={72}
                aria-hidden
                className="sticker-card block mx-auto"
              />
              <h3>Formulaire uniquement</h3>
              <p style={{ fontSize: "0.95rem", marginBottom: 0 }}>
                Seules les données nécessaires à te répondre sont collectées : nom, email, message.
                Rien d&apos;autre.
              </p>
            </div>
            <div className="card text-center">
              <Image
                src="/stickers/bug.svg"
                alt=""
                width={72}
                height={72}
                aria-hidden
                className="sticker-card block mx-auto"
              />
              <h3>Zéro tracking</h3>
              <p style={{ fontSize: "0.95rem", marginBottom: 0 }}>
                Pas de Google Analytics, pas de pixel Meta, pas de cookies publicitaires. Le site
                fonctionne sans bannière de consentement.
              </p>
            </div>
            <div className="card text-center">
              <Image
                src="/stickers/document.svg"
                alt=""
                width={72}
                height={72}
                aria-hidden
                className="sticker-card block mx-auto"
              />
              <h3>Droits respectés</h3>
              <p style={{ fontSize: "0.95rem", marginBottom: 0 }}>
                Accès, rectification, effacement, portabilité. Un email à{" "}
                <a
                  href="mailto:samiernicolas62@gmail.com"
                  className="underline underline-offset-4 hover:opacity-70 transition-opacity"
                >
                  samiernicolas62@gmail.com
                </a>{" "}
                et c&apos;est traité sous 30 jours max.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label="Politique de confidentialité détaillée"
        className="bg-cream border-b-[2.5px] border-ink"
      >
        <div className="max-w-[760px] mx-auto px-8 py-24">
          <h2>Responsable du traitement</h2>
          <p className="mt-4 leading-relaxed">
            <strong>Nicolas Samier</strong>, entrepreneur individuel, est responsable des
            traitements de données effectués sur le site. Contact :{" "}
            <a
              href="mailto:samiernicolas62@gmail.com"
              className="underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              samiernicolas62@gmail.com
            </a>
            .
          </p>

          <h2 className="mt-12">Données collectées</h2>
          <p className="mt-4 leading-relaxed">
            <strong>Formulaire de contact</strong> — nom, adresse courriel, structure (facultatif),
            type de demande, budget estimé (facultatif), délai souhaité (facultatif), contenu du
            message. <em>Finalité :</em> répondre à la demande et préparer un éventuel devis.{" "}
            <em>Base légale :</em> exécution de mesures précontractuelles à la demande de la
            personne concernée (RGPD art. 6.1.b).
          </p>
          <p className="mt-4 leading-relaxed">
            <strong>Achat d&apos;un template</strong> — nom, adresse courriel, informations de
            paiement (traitées directement par Stripe ou Gumroad,{" "}
            <strong>jamais stockées sur le site</strong>). <em>Finalité :</em> traiter la commande,
            livrer le produit, respecter les obligations comptables. <em>Base légale :</em>{" "}
            exécution du contrat (RGPD art. 6.1.b) et obligations légales (RGPD art. 6.1.c).
          </p>
          <p className="mt-4 leading-relaxed">
            <strong>Logs techniques</strong> — adresse IP, pages consultées, type de navigateur,
            horodatage. <em>Finalité :</em> sécurité, détection d&apos;anomalies, diagnostic
            technique. <em>Base légale :</em> intérêt légitime (RGPD art. 6.1.f).
          </p>

          <h2 className="mt-12">Durée de conservation</h2>
          <ul className="card-list mt-4">
            <li>
              <strong>Messages du formulaire</strong> — 12 mois après la dernière interaction, puis
              suppression automatique.
            </li>
            <li>
              <strong>Factures et justificatifs</strong> — 10 ans (obligation comptable, article
              L123-22 du Code de commerce).
            </li>
            <li>
              <strong>Logs techniques</strong> — 13 mois maximum, puis purge automatique.
            </li>
            <li>
              <strong>Données d&apos;achat template</strong> — durée légale comptable, avec
              pseudonymisation au-delà de 3 ans.
            </li>
          </ul>

          <h2 className="mt-12">Cookies</h2>
          <p className="mt-4 leading-relaxed">
            Le site{" "}
            <strong>
              n&apos;utilise pas de cookies de mesure d&apos;audience ni de cookies publicitaires
            </strong>
            . Seuls des cookies strictement nécessaires au bon fonctionnement peuvent être posés
            (préférences de navigation, session). Aucun consentement n&apos;est requis pour ces
            cookies (article 82 de la loi Informatique et Libertés).
          </p>

          <h2 className="mt-12">Destinataires</h2>
          <p className="mt-4 leading-relaxed">
            Les données collectées ne sont transmises qu&apos;aux{" "}
            <strong>prestataires techniques strictement nécessaires</strong> :
          </p>
          <ul className="card-list">
            <li>
              <strong>Resend</strong> — envoi des courriels transactionnels (confirmations,
              réponses).
            </li>
            <li>
              <strong>Stripe</strong> et <strong>Gumroad</strong> — traitement des paiements.
            </li>
            <li>
              <strong>Vercel</strong> — hébergement du site et des API routes.
            </li>
          </ul>
          <p className="mt-4 leading-relaxed">
            Aucun transfert commercial à des tiers. Aucune donnée n&apos;est revendue, mutualisée ou
            partagée hors de ce périmètre technique.
          </p>

          <h2 className="mt-12">Transferts hors UE</h2>
          <p className="mt-4 leading-relaxed">
            Certains prestataires sont situés aux États-Unis (Resend, Stripe, Vercel, Gumroad). Les
            transferts sont encadrés par les <strong>clauses contractuelles types</strong> de la
            Commission européenne et par les engagements de conformité au{" "}
            <strong>Data Privacy Framework</strong> (EU-US DPF) lorsque les prestataires y sont
            certifiés.
          </p>

          <h2 className="mt-12">Sécurité</h2>
          <p className="mt-4 leading-relaxed">
            Les données sont hébergées sur des serveurs sécurisés (chiffrement TLS en transit,
            chiffrement au repos). Les accès administrateurs sont protégés par authentification
            forte. Les sauvegardes sont chiffrées et leur durée de rétention suit les durées de
            conservation principales.
          </p>

          <h2 className="mt-12">Droits</h2>
          <p className="mt-4 leading-relaxed">
            Conformément au RGPD, toute personne dispose des droits suivants :
          </p>
          <ul className="card-list">
            <li>
              <strong>Accès</strong> — savoir quelles données sont détenues.
            </li>
            <li>
              <strong>Rectification</strong> — corriger une information inexacte.
            </li>
            <li>
              <strong>Effacement</strong> — demander la suppression des données.
            </li>
            <li>
              <strong>Limitation</strong> — geler le traitement dans certains cas.
            </li>
            <li>
              <strong>Opposition</strong> — s&apos;opposer à un traitement fondé sur l&apos;intérêt
              légitime.
            </li>
            <li>
              <strong>Portabilité</strong> — recevoir ses données dans un format lisible.
            </li>
          </ul>
          <p className="mt-4 leading-relaxed">
            Pour exercer un droit :{" "}
            <a
              href="mailto:samiernicolas62@gmail.com"
              className="underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              samiernicolas62@gmail.com
            </a>
            . Réponse sous 30 jours maximum (délai légal).
          </p>
          <p className="mt-4 leading-relaxed">
            En cas de désaccord sur la gestion d&apos;une demande, une réclamation peut être
            introduite auprès de la <strong>CNIL</strong> (
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              cnil.fr
            </a>
            ).
          </p>

          <p className="note-small mt-12">Dernière mise à jour : 4 mai 2026.</p>
        </div>
      </section>

      <section aria-label="Autres pages légales" className="bg-peach border-b-[2.5px] border-ink">
        <div className="max-w-[760px] mx-auto px-8 py-24">
          <div className="mb-16 text-center">
            <span className="section-label">Autres pages légales</span>
            <h2 className="mt-4">Par ici.</h2>
          </div>
          <div className="grid grid-cols-1 min-[560px]:grid-cols-2 gap-6">
            <Link href="/mentions-legales" className="card flex flex-col gap-3">
              <h3>Mentions légales</h3>
              <p className="text-[0.92rem] leading-relaxed grow">
                Éditeur, hébergeur, propriété intellectuelle, responsabilité.
              </p>
              <span className="link-cta self-start">Lire les mentions</span>
            </Link>
            <Link href="/cgv" className="card flex flex-col gap-3">
              <h3>Conditions générales de vente</h3>
              <p className="text-[0.92rem] leading-relaxed grow">
                Règles encadrant les prestations de services et la vente de templates numériques.
              </p>
              <span className="link-cta self-start">Lire les CGV</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
