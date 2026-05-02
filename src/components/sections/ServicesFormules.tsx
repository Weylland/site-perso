import Image from "next/image";

export function ServicesFormules() {
  return (
    <section
      id="formules"
      aria-label="Les formules"
      className="section-dots border-b-[2.5px] border-ink py-24"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16 bg-cream border-[2.5px] border-ink shadow-brutal max-w-[760px] mx-auto p-8">
          <span className="section-label">Les formules</span>
          <h2 className="mt-4">
            Cinq façons <em>de bosser</em> ensemble.
          </h2>
          <p className="mt-5 max-w-[58ch] mx-auto text-[1.1rem] opacity-80">
            Tarifs de départ transparents. Devis final selon scope précis du projet après appel de
            cadrage.
          </p>
        </div>

        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-[1.75rem]">
          <div id="site-vitrine" className="card card-numbered card-sunshine">
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
              Site vitrine
              <br />
              &amp; landing page
            </h3>
            <p>
              Pour présenter ton activité, capter des prospects, asseoir ta crédibilité en ligne. 3
              à 5 pages responsive, SEO technique propre, hébergement configuré, formulaire de
              contact anti-spam.
            </p>
            <ul className="card-list">
              <li>Design UI sur mesure</li>
              <li>Responsive mobile &amp; tablette</li>
              <li>SEO technique + metadata</li>
              <li>Hébergement Vercel configuré</li>
              <li>Formulaire contact + RGPD</li>
              <li>Délai : 2 à 4 semaines</li>
            </ul>
            <p className="mt-8">
              <a href="/contact?formule=site-vitrine" className="link-cta">
                Demander un devis
              </a>
            </p>
          </div>

          <div id="site-vitrine-cms" className="card card-numbered card-peach">
            <span className="card-number">02</span>
            <span className="card-tag">Dès 2&nbsp;500&nbsp;€</span>
            <Image
              src="/stickers/cms.svg"
              alt=""
              width={72}
              height={72}
              className="sticker-card"
              aria-hidden="true"
            />
            <h3>
              Vitrine + CMS
              <br />
              éditable
            </h3>
            <p>
              Tout le pack vitrine, plus un back-office pour éditer tes contenus en autonomie.
              WordPress ou headless selon ton profil éditorial et le volume prévu.
            </p>
            <ul className="card-list">
              <li>Pack vitrine complet</li>
              <li>CMS WordPress ou Sanity/Contentful</li>
              <li>Formation édition 1&nbsp;h en visio</li>
              <li>Support inclus 1 mois</li>
              <li>Guide PDF de prise en main</li>
              <li>Délai : 3 à 5 semaines</li>
            </ul>
            <p className="mt-8">
              <a href="/contact?formule=site-cms" className="link-cta">
                Demander un devis
              </a>
            </p>
          </div>

          <div id="application-web" className="card card-numbered card-mint">
            <span className="card-number">03</span>
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
              Application web
              <br />
              sur mesure
            </h3>
            <p>
              MVP, outil interne, SaaS. Cycle complet&nbsp;: cadrage, design UX, développement
              fullstack TypeScript, déploiement et monitoring. Tech stack adaptée au besoin.
            </p>
            <ul className="card-list">
              <li>Cadrage fonctionnel + spécifications</li>
              <li>Design UI/UX</li>
              <li>Dev Next.js + Node.js + base Postgres</li>
              <li>Auth, paiements, intégrations tierces</li>
              <li>Déploiement Vercel ou AWS</li>
              <li>Délai : 4 à 8 semaines</li>
            </ul>
            <p className="mt-8">
              <a href="/contact?formule=application-web" className="link-cta">
                Demander un devis
              </a>
            </p>
          </div>

          <div id="automatisation-n8n" className="card card-numbered card-sky">
            <span className="card-number">04</span>
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
              Automatisation
              <br />
              n8n sur-mesure
            </h3>
            <p>
              Éliminer les tâches répétitives. Connecter Stripe, Notion, Gmail, HubSpot, Airtable,
              Slack. Workflows de facturation, onboarding, CRM, notifications.
            </p>
            <ul className="card-list">
              <li>Audit process existant</li>
              <li>Conception workflow visuel</li>
              <li>Intégration API (OAuth, webhooks)</li>
              <li>Tests end-to-end</li>
              <li>Documentation utilisateur</li>
              <li>Délai : 1 à 3 semaines</li>
            </ul>
            <p className="mt-8">
              <a href="/contact?formule=n8n" className="link-cta">
                Demander un devis
              </a>
            </p>
          </div>
        </div>

        <div
          id="tma"
          className="card card-numbered mt-8 max-w-[760px] mx-auto"
          style={{ background: "var(--color-ink)", color: "var(--color-cream)" }}
        >
          <span className="card-number" style={{ color: "var(--color-cream)" }}>
            05
          </span>
          <span
            className="card-tag"
            style={{ background: "var(--color-sunshine)", color: "var(--color-ink)" }}
          >
            60&nbsp;€/h
          </span>
          <Image
            src="/stickers/wrench.svg"
            alt=""
            width={72}
            height={72}
            className="sticker-card"
            aria-hidden="true"
          />
          <h3>TMA · Dépannage &amp; maintenance</h3>
          <p className="opacity-[0.85]">
            Corrections urgentes, ajouts de features, optimisations perf/SEO sur site existant
            (WordPress, Next.js, PHP natif). À l&apos;heure ou en forfait.
          </p>
          <ul className="card-list opacity-[0.9]">
            <li>60&nbsp;€/h à l&apos;unité</li>
            <li>Forfait 3&nbsp;h : 180&nbsp;€</li>
            <li>Forfait 10&nbsp;h : 540&nbsp;€ (–10&nbsp;%)</li>
            <li>Intervention sous 48&nbsp;h ouvrées</li>
          </ul>
          <p className="mt-8">
            <a
              href="/contact?formule=tma"
              className="link-cta"
              style={{ color: "var(--color-cream)", borderColor: "var(--color-cream)" }}
            >
              Demander un devis
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
