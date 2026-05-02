const items = [
  "Site vitrine dès 1 200 €",
  "Vitrine + CMS dès 2 500 €",
  "Application web dès 4 500 €",
  "Automatisation n8n dès 400 €",
  "TMA 60 €/h",
  "Remote France · 100 %",
];

export function ServicesMarquee() {
  return (
    <section
      aria-label="Tarifs"
      className="marquee-peach bg-peach border-b-[2.5px] border-ink overflow-hidden py-4"
    >
      <div className="flex gap-12 w-max marquee animate-[marquee_35s_linear_infinite]">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
