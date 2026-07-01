const entries = [
  {
    date: "2026 — aujourd'hui",
    title: "Freelance fullstack & IA",
    body: "Sites, applications web, automatisations et intégrations IA, sur place ou à distance. Conception et développement de bout en bout — du cadrage à la mise en ligne. C'est aussi la période où je construis mes projets perso : watch·ia et RivalRush.",
  },
  {
    date: "2024 — 2026",
    title: "4Spel · Co-fondateur & développeur web",
    body: "Création de l'entreprise en tant qu'associé. Développement de l'application avec Node.js, Next.js et AWS. Projet actuellement en pause.",
  },
  {
    date: "2022 — 2024",
    title: "Apresta · Développeur web",
    body: "Débuté en stage puis intégré à l'équipe. Sites et applications en PHP, JavaScript et WordPress / WooCommerce. Intégration AWS : API Gateway, Lambda, DynamoDB, S3.",
  },
  {
    date: "2018",
    title: "ADAV · Stage développeur web (Lille)",
    body: "Carte interactive pour cyclistes en JavaScript avec la librairie Leaflet.",
  },
];

export function AboutParcours() {
  return (
    <section aria-label="Parcours" className="bg-peach border-b-[2.5px] border-ink py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="section-label">Parcours</span>
          <h2 className="mt-4">
            D&apos;un stage
            <br />à <em>aujourd&apos;hui</em>.
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
