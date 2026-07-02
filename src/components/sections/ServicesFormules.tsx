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
            Six façons <em>de bosser</em> ensemble.
          </h2>
          <p className="mt-5 max-w-[58ch] mx-auto text-[1.1rem] opacity-80">
            Chaque projet est chiffré sur devis, selon le scope précis défini ensemble après un
            appel de cadrage.
          </p>
        </div>

        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-[1.75rem]">
          <div id="site-vitrine" className="card card-numbered card-sunshine">
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
              Site vitrine
              <br />
              &amp; landing page
            </h3>
            <p>
              Pour présenter ton activité, attirer des prospects, asseoir ta crédibilité en ligne. 3
              à 5 pages adaptées à tous les écrans, bien référencées sur Google, hébergement
              configuré, formulaire de contact anti-spam.
            </p>
            <ul className="card-list">
              <li>Design sur mesure</li>
              <li>Affichage mobile &amp; tablette</li>
              <li>Référencement Google (SEO)</li>
              <li>Hébergement configuré</li>
              <li>Formulaire contact + RGPD</li>
            </ul>
            <p className="mt-8">
              <a href="/contact?formule=site-vitrine" className="link-cta">
                Demander un devis
              </a>
            </p>
          </div>

          <div id="site-vitrine-cms" className="card card-numbered card-peach">
            <span className="card-number">02</span>
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
              Tout le pack vitrine, plus une interface d&apos;administration pour modifier tes
              contenus toi-même. WordPress, selon ton profil et le volume prévu.
            </p>
            <ul className="card-list">
              <li>Pack vitrine complet</li>
              <li>CMS WordPress éditable</li>
              <li>Formation édition 1&nbsp;h en visio</li>
              <li>Support inclus 1 mois</li>
              <li>Guide PDF de prise en main</li>
            </ul>
            <p className="mt-8">
              <a href="/contact?formule=site-cms" className="link-cta">
                Demander un devis
              </a>
            </p>
          </div>

          <div id="application-web" className="card card-numbered card-mint">
            <span className="card-number">03</span>
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
              Première version d&apos;un produit, outil interne, logiciel en ligne. Tout le cycle :
              cadrage, design, développement, mise en ligne et suivi. Les technologies sont choisies
              selon ton besoin.
            </p>
            <ul className="card-list">
              <li>Cadrage et spécifications</li>
              <li>Design des écrans</li>
              <li>Développement complet (front + back)</li>
              <li>Comptes, paiements, connexions à tes outils</li>
              <li>Mise en ligne</li>
            </ul>
            <p className="mt-8">
              <a href="/contact?formule=application-web" className="link-cta">
                Demander un devis
              </a>
            </p>
          </div>

          <div id="automatisation-n8n" className="card card-numbered card-sky">
            <span className="card-number">04</span>
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
              sur mesure
            </h3>
            <p>
              Éliminer les tâches répétitives. Relier tes outils (Stripe, Notion, Gmail, Slack…)
              pour automatiser la facturation, le suivi client, les relances et les notifications.
            </p>
            <ul className="card-list">
              <li>Analyse de tes tâches actuelles</li>
              <li>Conception du scénario</li>
              <li>Connexion entre tes outils</li>
              <li>Tests de bout en bout</li>
              <li>Mode d&apos;emploi fourni</li>
            </ul>
            <p className="mt-8">
              <a href="/contact?formule=n8n" className="link-cta">
                Demander un devis
              </a>
            </p>
          </div>

          <div id="ia" className="card card-numbered card-peach">
            <span className="card-number">05</span>
            <Image
              src="/stickers/chart.svg"
              alt=""
              width={72}
              height={72}
              className="sticker-card"
              aria-hidden="true"
            />
            <h3>
              IA
              <br />
              sur mesure
            </h3>
            <p>
              Mettre l&apos;IA là où elle fait gagner du temps&nbsp;: un assistant qui répond à
              partir de tes propres documents, de la rédaction automatique, la récupération et le
              tri d&apos;informations. C&apos;est ce qui fait tourner mon média de veille watch·ia.
            </p>
            <ul className="card-list">
              <li>Assistant connecté à tes documents</li>
              <li>Rédaction &amp; résumés automatiques</li>
              <li>Récupération et tri d&apos;informations</li>
              <li>Automatisation reliée à l&apos;IA</li>
              <li>Données hébergées en Europe (RGPD)</li>
              <li>Sur devis</li>
            </ul>
            <p className="mt-8">
              <a href="/contact?formule=ia" className="link-cta">
                Demander un devis
              </a>
            </p>
          </div>

          <div
            id="tma"
            className="card card-numbered"
            style={{ background: "var(--color-ink)", color: "var(--color-cream)" }}
          >
            <span className="card-number" style={{ color: "var(--color-cream)" }}>
              06
            </span>
            <Image
              src="/stickers/wrench.png"
              alt=""
              width={72}
              height={72}
              className="sticker-card"
              aria-hidden="true"
            />
            <h3>Maintenance &amp; dépannage</h3>
            <p className="opacity-[0.85]">
              Corrections urgentes, ajouts de features, optimisations perf/SEO sur site existant
              (WordPress, Next.js, PHP natif). À l&apos;heure ou au forfait, sur devis.
            </p>
            <ul className="card-list opacity-[0.9]">
              <li>Audit rapide de l&apos;existant</li>
              <li>Corrections &amp; ajouts de features</li>
              <li>Optimisations perf / SEO</li>
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
      </div>
    </section>
  );
}
