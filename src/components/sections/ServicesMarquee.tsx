const items = [
  "Sites vitrine & landing",
  "Vitrine + CMS éditable",
  "Applications web sur mesure",
  "Automatisation n8n",
  "IA & pipelines LLM",
  "Maintenance & dépannage",
  "Sur place ou à distance",
];

export function ServicesMarquee() {
  return (
    <section
      aria-label="Services proposés"
      className="marquee-peach bg-peach border-b-[2.5px] border-ink overflow-hidden py-4"
    >
      <div className="flex w-max marquee animate-[marquee_35s_linear_infinite]">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
