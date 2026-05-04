import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales — Nicolas Samier",
  description:
    "Mentions légales du site de Nicolas Samier : éditeur, hébergeur, propriété intellectuelle, responsabilité.",
};

export default function MentionsLegalesPage() {
  return (
    <main>
      <section aria-label="Mentions légales" className="bg-cream border-b-[2.5px] border-ink">
        <div className="max-w-7xl mx-auto px-8 py-24 text-center">
          <span className="eyebrow">Informations légales · LCEN 2004-575</span>
          <h1 className="mt-6">
            Mentions <span className="highlight-sunshine">légales</span>.
          </h1>
          <p className="mt-6 text-[1.15rem] opacity-80 max-w-[52ch] mx-auto leading-relaxed">
            Tout ce qu&apos;il faut savoir sur l&apos;éditeur du site, l&apos;hébergement, les
            responsabilités et la propriété intellectuelle.
          </p>
        </div>
      </section>

      <section
        aria-label="Contenu des mentions légales"
        className="bg-cream border-b-[2.5px] border-ink"
      >
        <div className="max-w-[760px] mx-auto px-8 py-24">
          <h2>Éditeur du site</h2>
          <p className="mt-4 leading-relaxed">
            Site édité par <strong>Nicolas Samier</strong>, entrepreneur individuel (EI).
            <br />
            Adresse du siège : <em>Pas-de-Calais, France</em>.<br />
            SIRET : 000 000 000 00000.
            <br />
            Numéro de TVA intracommunautaire : FR00 000000000 (franchise en base, TVA non
            applicable, article 293 B du CGI).
            <br />
            Activité : services informatiques, développement web, vente de produits numériques.
          </p>

          <h2 className="mt-12">Directeur de la publication</h2>
          <p className="mt-4 leading-relaxed">
            Nicolas Samier, joignable par courriel à l&apos;adresse{" "}
            <a
              href="mailto:samiernicolas62@gmail.com"
              className="underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              samiernicolas62@gmail.com
            </a>
            .
          </p>

          <h2 className="mt-12">Hébergement</h2>
          <p className="mt-4 leading-relaxed">
            Le site est hébergé par <strong>Vercel Inc.</strong>, 440 N Barranca Ave #4133, Covina,
            CA 91723, États-Unis. Site web :{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              vercel.com
            </a>
            . Les données techniques transitent par les serveurs européens de l&apos;hébergeur
            lorsque la configuration le permet.
          </p>

          <h2 className="mt-12">Propriété intellectuelle</h2>
          <p className="mt-4 leading-relaxed">
            L&apos;ensemble des éléments du site (textes, illustrations, logo, code source, design)
            est la propriété exclusive de Nicolas Samier, sauf mentions contraires. Toute
            reproduction, représentation, modification ou exploitation, même partielle, est
            interdite sans autorisation écrite préalable.
          </p>
          <p className="mt-4 leading-relaxed">
            Les stickers SVG et illustrations custom sont des créations originales. Les marques
            citées (Next.js, Node.js, WordPress, n8n, Notion, Stripe, Resend, Vercel, etc.) restent
            la propriété de leurs détenteurs respectifs.
          </p>

          <h2 className="mt-12">Responsabilité</h2>
          <p className="mt-4 leading-relaxed">
            Les informations présentes sur le site sont fournies à titre indicatif. Elles peuvent
            évoluer sans préavis. L&apos;éditeur ne peut être tenu responsable des erreurs,
            omissions ou indisponibilités temporaires du service, ni des dommages indirects
            découlant de l&apos;utilisation du site.
          </p>

          <h2 className="mt-12">Liens externes</h2>
          <p className="mt-4 leading-relaxed">
            Le site peut renvoyer vers des sites tiers. L&apos;éditeur n&apos;exerce aucun contrôle
            sur leur contenu et décline toute responsabilité quant à leur utilisation.
          </p>

          <h2 className="mt-12">Données personnelles</h2>
          <p className="mt-4 leading-relaxed">
            Le traitement des données personnelles est détaillé dans la{" "}
            <Link
              href="/confidentialite"
              className="underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              politique de confidentialité
            </Link>
            . Conformément au RGPD, toute personne dispose d&apos;un droit d&apos;accès, de
            rectification, d&apos;effacement et d&apos;opposition.
          </p>

          <h2 className="mt-12">Contact</h2>
          <p className="mt-4 leading-relaxed">
            Pour toute question relative au site, à son contenu ou à l&apos;exercice d&apos;un
            droit, écrire à{" "}
            <a
              href="mailto:samiernicolas62@gmail.com"
              className="underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              samiernicolas62@gmail.com
            </a>
            . Réponse sous 48 h ouvrées.
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
            <Link href="/cgv" className="card flex flex-col gap-3">
              <h3>Conditions générales de vente</h3>
              <p className="text-[0.92rem] leading-relaxed grow">
                Règles encadrant les prestations de services et la vente de templates numériques.
              </p>
              <span className="link-cta w-full">Lire les CGV</span>
            </Link>
            <Link href="/confidentialite" className="card flex flex-col gap-3">
              <h3>Politique de confidentialité</h3>
              <p className="text-[0.92rem] leading-relaxed grow">
                Données collectées, durée de conservation, droits RGPD. Pas de newsletter, pas de
                tracking.
              </p>
              <span className="link-cta w-full">Lire la politique</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
