import type { TemplateDetail } from "@/data/templates";

type Props = {
  detail: TemplateDetail;
};

const groupColors = ["card-sunshine", "card-mint", "card-peach", "card-sky"];

export function TemplateDetailContent({ detail }: Props) {
  return (
    <section aria-label="Contenu détaillé" className="bg-cream border-b-[2.5px] border-ink">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <span className="section-label">Ce qu&apos;il contient</span>
          <h2 className="mt-4">
            {detail.contentTitle}
            <br />
            <em>zéro bricolage</em>.
          </h2>
          <p className="mt-4 max-w-[56ch] mx-auto opacity-80">{detail.contentSubtitle}</p>
        </div>
        <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {detail.featureGroups.map(({ emoji, title, items }, i) => (
            <div key={title} className={`card ${groupColors[i % groupColors.length]}`}>
              <h3>
                {emoji} {title}
              </h3>
              <ul className="card-list">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
