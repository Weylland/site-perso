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
            Sites vitrine, applications web sur mesure, automatisation et IA. Chaque projet suit le
            même cadre&nbsp;: brief carré, chiffrage clair, livraison propre.
          </p>
        </div>

        <div className="card-grid">
          <Link href="/services#site-vitrine" className="card card-numbered card-sunshine">
            <span className="card-number">01</span>
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
              3 à 5 pages adaptées à tous les écrans, hébergement configuré, bien référencé sur
              Google, formulaire de contact anti-spam. La technologie est choisie selon ton besoin.
            </p>
            <span className="link-cta mt-6">Voir les formules</span>
          </Link>

          <Link href="/services#application-web" className="card card-numbered card-mint">
            <span className="card-number">02</span>
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
              fullstack TypeScript, déploiement et mise en ligne.
            </p>
            <span className="link-cta mt-6">Voir les formules</span>
          </Link>

          <Link href="/services#automatisation-n8n" className="card card-numbered card-sky">
            <span className="card-number">03</span>
            <Image
              src="/stickers/gears.svg"
              alt=""
              width={72}
              height={72}
              className="sticker-card"
              aria-hidden="true"
            />
            <h3>
              Automatisation
              <br />& IA sur mesure
            </h3>
            <p>
              Automatiser tes tâches répétitives (facturation, relances, notifications) et brancher
              de l&apos;IA utile&nbsp;: un assistant connecté à tes documents, de la rédaction
              automatique. Mode d&apos;emploi fourni.
            </p>
            <span className="link-cta mt-6">Voir les formules</span>
          </Link>
        </div>

        <p className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center font-display font-semibold border-[2.5px] border-ink shadow-brutal bg-cream text-ink transition-[transform,box-shadow] duration-[220ms] ease-out hover:[transform:translate(4px,4px)] hover:[box-shadow:0_0_0_var(--color-ink)] px-6 py-[0.9rem] text-base"
          >
            Toutes les formules
          </Link>
        </p>
      </div>
    </section>
  );
}
