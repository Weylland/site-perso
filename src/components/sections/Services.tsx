import Image from "next/image";
import Link from "next/link";

export function Services() {
  return (
    <section aria-label="Services" className="section-dots border-b-[2.5px] border-ink py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16 bg-cream border-[2.5px] border-ink shadow-brutal max-w-[760px] mx-auto p-8">
          <span className="section-label">Ce que je fais</span>
          <h2>
            Trois angles,
            <br />
            <em>une exécution</em> propre.
          </h2>
          <p className="mt-5 max-w-[58ch] mx-auto text-[1.1rem] opacity-80">
            Sites vitrine, applications web sur mesure, automatisations n8n. Chaque projet suit le
            même cadre&nbsp;: brief carré, chiffrage clair, livraison propre.
          </p>
        </div>

        <div className="card-grid">
          <Link href="/services#site-vitrine" className="card card-numbered card-sunshine">
            <span className="card-number">01</span>
            <span className="card-tag">Dès 1&nbsp;200&nbsp;€</span>
            <Image
              src="/stickers/globe.svg"
              alt=""
              width={72}
              height={72}
              className="sticker-card"
              aria-hidden="true"
            />
            <h3>
              Sites vitrine
              <br />& landing pages
            </h3>
            <p>
              3 à 5 pages responsive, hébergement configuré, SEO technique propre, formulaire de
              contact anti-spam. Next.js ou WordPress selon le contexte éditorial.
            </p>
            <span className="link-cta mt-6">Voir les formules</span>
          </Link>

          <Link href="/services#application-web" className="card card-numbered card-mint">
            <span className="card-number">02</span>
            <span className="card-tag">Dès 4&nbsp;500&nbsp;€</span>
            <Image
              src="/stickers/bolt.svg"
              alt=""
              width={72}
              height={72}
              className="sticker-card"
              aria-hidden="true"
            />
            <h3>
              Applications
              <br />
              web sur mesure
            </h3>
            <p>
              MVP, outils internes, SaaS simples. Cycle complet&nbsp;: cadrage, design UX, dev
              fullstack TypeScript, déploiement Vercel ou AWS. Délai 4 à 8 semaines.
            </p>
            <span className="link-cta mt-6">Voir les formules</span>
          </Link>

          <Link href="/services#automatisation-n8n" className="card card-numbered card-sky">
            <span className="card-number">03</span>
            <span className="card-tag">Dès 400&nbsp;€</span>
            <Image
              src="/stickers/gears.svg"
              alt=""
              width={72}
              height={72}
              className="sticker-card"
              aria-hidden="true"
            />
            <h3>
              Automatisations
              <br />
              n8n sur-mesure
            </h3>
            <p>
              Connecter Stripe, Notion, Gmail, HubSpot, Airtable. Workflows de facturation,
              onboarding client, notifications équipe. Doc complète livrée.
            </p>
            <span className="link-cta mt-6">Voir les formules</span>
          </Link>
        </div>

        <p className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-display font-semibold border-[2.5px] border-ink shadow-brutal bg-cream text-ink transition-[transform,box-shadow] duration-150 ease-out hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none px-6 py-[0.9rem] text-base"
          >
            Toutes les formules{" "}
            <span
              aria-hidden="true"
              className="transition-transform duration-150 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </p>
      </div>
    </section>
  );
}
