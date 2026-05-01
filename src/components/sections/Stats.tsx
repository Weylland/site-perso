import { StatNumber } from "./StatNumber";

export function Stats() {
  return (
    <section aria-label="Statistiques" className="bg-cream border-b-[2.5px] border-ink">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="stats">
          <div className="stat">
            <StatNumber target={37} />
            <span className="stat-label">Projets livrés</span>
          </div>
          <div className="stat">
            <StatNumber target={12} prefix="+" />
            <span className="stat-label">Clients actifs</span>
          </div>
          <div className="stat">
            <StatNumber target={3} suffix="ans" />
            <span className="stat-label">Expérience fullstack</span>
          </div>
          <div className="stat">
            <StatNumber target={100} suffix="%" />
            <span className="stat-label">Remote France</span>
          </div>
        </div>
      </div>
    </section>
  );
}
