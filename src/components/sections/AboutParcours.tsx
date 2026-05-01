const entries = [
  {
    date: "2025 — aujourd'hui",
    title: "Freelance fullstack",
    body: "Sites, applications web et automatisations pour startups, petites boîtes et autres freelances. Une trentaine de projets livrés à date, dont la refonte complète du site de l'association CGR et plusieurs MVPs SaaS en TypeScript.",
  },
  {
    date: "2024 — 2025",
    title: "4Spel · Fondateur & dev lead",
    body: "Entreprise propre (auto-entreprise puis SASU). Sites sur mesure en PHP natif et JavaScript vanilla pour clients BtoB locaux, intégration WordPress sur thèmes custom, première exploration sérieuse de n8n pour automatiser les process clients.",
  },
  {
    date: "2021 — 2024",
    title: "Apresta · Développeur fullstack",
    body: "Premier vrai poste. Sites WordPress, applications web sur mesure pour divers clients (e-commerce, édition, associatif). Montée en compétence progressive sur React, Node.js et les bonnes pratiques DevOps.",
  },
];

export function AboutParcours() {
  return (
    <section aria-label="Parcours" className="bg-peach border-b-[2.5px] border-ink py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="section-label">Parcours</span>
          <h2 className="mt-4">
            Trois ans
            <br />
            <em>dans les mains</em>.
          </h2>
        </div>

        <div className="timeline">
          {entries.map(({ date, title, body }) => (
            <div key={title} className="timeline-entry">
              <span className="timeline-date">{date}</span>
              <h3>{title}</h3>
              <p style={{ margin: 0, fontSize: "0.95rem" }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
