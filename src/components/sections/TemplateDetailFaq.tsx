import type { TemplateDetail } from "@/data/templates";

type Props = {
  detail: TemplateDetail;
};

export function TemplateDetailFaq({ detail }: Props) {
  return (
    <section aria-label="FAQ produit" className="bg-peach border-b-[2.5px] border-ink">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <span className="section-label">FAQ</span>
          <h2 className="mt-4">
            Avant <em>d&apos;acheter</em>.
          </h2>
        </div>
        <div className="faq">
          {detail.faq.map(({ q, a }, i) => (
            <details key={q} open={i === 0}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
