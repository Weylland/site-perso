import { StatNumber } from "./StatNumber";

export function Stats() {
  return (
    <section aria-label="Statistiques" className="bg-cream border-b-[2.5px] border-ink">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="stats">
          <div className="stat">
            <StatNumber target={2018} />
            <span className="stat-label">Développeur depuis</span>
          </div>
          <div className="stat">
            <StatNumber target={15} prefix="+" />
            <span className="stat-label">Technos maîtrisées</span>
          </div>
          <div className="stat">
            <StatNumber target={4} suffix="+" />
            <span className="stat-label">Projets en ligne</span>
          </div>
          <div className="stat">
            <StatNumber target={48} suffix="h" />
            <span className="stat-label">Réponse sous</span>
          </div>
        </div>
      </div>
    </section>
  );
}
