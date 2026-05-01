import Image from "next/image";
import Link from "next/link";

export function TemplateFeatured() {
  return (
    <section aria-label="Template phare" className="bg-cream border-b-[2.5px] border-ink py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="split">
          <div>
            <Image
              src="/stickers/notion-mockup.svg"
              alt="Aperçu du template Freelance Dev Hub"
              width={420}
              height={420}
              className="w-full max-w-[420px] h-auto [transform:rotate(-3deg)] [filter:drop-shadow(8px_8px_0_var(--color-ink))]"
            />
          </div>

          <div>
            <span className="section-label">Template Notion</span>
            <h2 className="mt-4">
              <span className="highlight-peach">Freelance</span>
              <br />
              <em>Dev Hub</em>
            </h2>
            <p className="mt-4 text-[1.15rem] max-w-[48ch] opacity-90">
              Le système Notion que j&apos;utilise au quotidien pour gérer mon activité de dev
              freelance. Clients, projets, devis, factures, CRM léger, bugs tracker, idées templates
              — tout est relié, tout est prêt à l&apos;emploi.
            </p>
            <ul className="card-list mt-6">
              <li>8 databases interconnectées (clients, projets, tâches, devis, factures…)</li>
              <li>Dashboard de pilotage CA mensuel, pipe commerciale, charge</li>
              <li>Templates de pages (brief client, post-mortem projet, TJM calculator)</li>
              <li>En français, sans traduction approximative</li>
              <li>Mises à jour à vie incluses</li>
            </ul>
            <div className="flex items-center gap-6 mt-8 mb-6 flex-wrap">
              <span className="price-big">12&nbsp;€</span>
              <span className="tag">Paiement Stripe ou Gumroad</span>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="/templates/freelance-dev-hub"
                className="group inline-flex items-center gap-2 font-display font-semibold border-[2.5px] border-ink shadow-brutal bg-sunshine text-ink transition-[transform,box-shadow] duration-[220ms] ease-out hover:[transform:translate(4px,4px)] hover:[box-shadow:0_0_0_var(--color-ink)] px-6 py-[0.9rem] text-base"
              >
                Voir le template{" "}
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-[180ms] ease-out group-hover:[transform:translateX(4px)_rotate(-12deg)]"
                >
                  →
                </span>
              </Link>
              <Link
                href="/templates"
                className="inline-flex items-center gap-2 font-display font-semibold border-[2.5px] border-ink shadow-brutal bg-cream text-ink transition-[transform,box-shadow] duration-[220ms] ease-out hover:[transform:translate(4px,4px)] hover:[box-shadow:0_0_0_var(--color-ink)] px-6 py-[0.9rem] text-base"
              >
                Autres templates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
