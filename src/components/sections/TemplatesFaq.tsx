import { shopFaqItems } from "@/data/templates";

export function TemplatesFaq() {
  return (
    <section aria-label="FAQ boutique" className="bg-cream border-b-[2.5px] border-ink">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <span className="section-label">FAQ boutique</span>
          <h2 className="mt-4">
            Avant <em>d&apos;acheter</em>.
          </h2>
        </div>
        <div className="faq">
          {shopFaqItems.map(({ q, a }, i) => (
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
