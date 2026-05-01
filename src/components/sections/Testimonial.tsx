export function Testimonial() {
  return (
    <section aria-label="Témoignage" className="bg-mint border-b-[2.5px] border-ink">
      <div className="max-w-[900px] mx-auto px-8 py-24">
        <div className="mb-[2.5rem] text-center">
          <span className="section-label">Ils m&apos;ont fait confiance</span>
          <h2 className="mt-4">
            Une référence concrète,
            <br />
            <em>pas de vitrine</em> fabriquée.
          </h2>
        </div>

        <div className="quote">
          <span className="quote-mark" aria-hidden="true">
            &ldquo;
          </span>
          <p className="quote-text">
            Site refondu en quelques semaines, back-office propre pour qu&apos;on puisse éditer en
            autonomie, et Nicolas est toujours là quand on a une question. Exactement ce qu&apos;il
            nous fallait pour faire grandir le club en ligne.
          </p>
          <div className="quote-author">
            <div className="quote-avatar">CG</div>
            <div>
              <strong>CGR — Association sportive</strong>
              <span>Site WordPress sur mesure · refonte + TMA</span>
            </div>
          </div>
        </div>

        <p className="text-center mt-12">
          <a
            href="https://cgr5962.asso.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="link-cta"
          >
            cgr5962.asso.fr
          </a>
        </p>
      </div>
    </section>
  );
}
