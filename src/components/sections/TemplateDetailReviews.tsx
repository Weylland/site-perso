import Link from "next/link";
import type { TemplateDetail } from "@/data/templates";

type Props = {
  detail: TemplateDetail;
};

function StarRow({
  rating,
  max = 5,
  size = "1rem",
}: {
  rating: number;
  max?: number;
  size?: string;
}) {
  return (
    <span className="star-row" style={{ fontSize: size }} aria-label={`${rating} sur ${max}`}>
      {Array.from({ length: max }, (_, i) => (
        <span key={i} style={{ opacity: i < Math.round(rating) ? 1 : 0.25 }}>
          ★
        </span>
      ))}
    </span>
  );
}

export function TemplateDetailReviews({ detail }: Props) {
  const { reviews, reviewCount, reviewAvg, reviewBars } = detail;
  const maxBarCount = Math.max(...reviewBars.map((b) => b.count));

  return (
    <section aria-label="Avis clients" id="avis" className="bg-cream border-b-[2.5px] border-ink">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <span className="section-label">Avis vérifiés</span>
          <h2 className="mt-4">
            Ce qu&apos;en disent
            <br />
            <em>celles et ceux</em> qui l&apos;utilisent.
          </h2>
          <p className="mt-4 opacity-80">
            {reviewCount} avis vérifiés (achat confirmé) · note moyenne{" "}
            <strong>{reviewAvg} / 5</strong>. Modérés à la main, sans triche.
          </p>
        </div>

        <div className="reviews-summary">
          <div className="text-center">
            <span className="reviews-score-num">{reviewAvg}</span>
            <StarRow rating={reviewAvg} size="1.4rem" />
            <span className="block text-[0.88rem] opacity-75 mt-2">sur {reviewCount} avis</span>
          </div>

          <div className="flex flex-col gap-2">
            {reviewBars.map(({ stars, count }) => (
              <div key={stars} className="reviews-bar-row">
                <strong>{stars} ★</strong>
                <div className="rating-bar">
                  <div
                    className="rating-bar-fill"
                    style={{ width: maxBarCount > 0 ? `${(count / maxBarCount) * 100}%` : "0%" }}
                  />
                </div>
                <span className="text-right">{count}</span>
              </div>
            ))}
          </div>

          <div className="reviews-summary-cta">
            <p>Tu as acheté le template ?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-cream border-[2.5px] border-ink shadow-brutal-sm font-sans font-semibold text-sm transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              Laisser un avis →
            </Link>
            <p className="note-small" style={{ marginTop: "0.5rem", opacity: 0.7 }}>
              Contacte-moi par email avec ta commande.
            </p>
          </div>
        </div>

        <div className="reviews-toolbar">
          <div className="flex gap-2 flex-wrap">
            <button type="button" className="shop-chip shop-chip-active">
              Tous ({reviewCount})
            </button>
            {reviewBars
              .filter((b) => b.count > 0 && b.stars >= 4)
              .map((b) => (
                <button key={b.stars} type="button" className="shop-chip">
                  {b.stars} ★ ({b.count})
                </button>
              ))}
          </div>
          <select className="shop-sort">
            <option>Plus récents</option>
            <option>Plus utiles</option>
            <option>Note ↓</option>
            <option>Note ↑</option>
          </select>
        </div>

        <div className="reviews-grid">
          {reviews.map((r) => (
            <article key={r.name + r.date} className="review-card">
              <header className="review-card-head">
                <div
                  className="account-avatar"
                  style={r.avatarColor ? { background: r.avatarColor } : undefined}
                >
                  {r.initials}
                </div>
                <div>
                  <strong className="font-display text-[0.95rem]">{r.name}</strong>
                  <span className="block text-[0.78rem] opacity-70 mt-0.5">
                    Achat vérifié · {r.date}
                  </span>
                </div>
                <StarRow rating={r.rating} />
              </header>

              <h3 className="review-card-title">{r.title}</h3>
              <p className="text-[0.94rem] leading-[1.55]">{r.body}</p>

              {r.reply && (
                <div className="review-card-reply">
                  <strong>Réponse de Nicolas :</strong> {r.reply}
                </div>
              )}

              <footer className="review-card-foot">
                <button
                  type="button"
                  className="bg-transparent border-0 font-[inherit] cursor-pointer p-0 hover:opacity-70"
                >
                  👍 Utile · {r.helpful}
                </button>
                <button
                  type="button"
                  className="bg-transparent border-0 font-[inherit] cursor-pointer p-0 opacity-60 hover:opacity-100"
                >
                  Signaler
                </button>
              </footer>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 px-6 py-[0.9rem] bg-cream border-[2.5px] border-ink shadow-brutal font-sans font-semibold text-base transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out] hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-pointer"
          >
            Voir les {reviewCount - reviews.length} autres avis ↓
          </button>
        </div>
      </div>
    </section>
  );
}
