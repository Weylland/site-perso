const formations = [
  {
    date: "2021 — 2022",
    title: "Titre Pro · Développeur Web & Mobile",
    school: "AFCI — Liévin",
    note: "Niveau BAC+2",
  },
  {
    date: "2018",
    title: "Titre Pro · Développeur Logiciel",
    school: "POP School — Lens",
    note: "Formation intensive au développement",
  },
];

export function AboutFormations() {
  return (
    <section aria-label="Formations" className="bg-mint border-b-[2.5px] border-ink py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="section-label">Formations</span>
          <h2 className="mt-4">
            Les <em>diplômes</em>,
            <br />
            vite fait.
          </h2>
        </div>

        <div className="grid grid-cols-1 min-[700px]:grid-cols-2 gap-[1.75rem] max-w-[820px] mx-auto">
          {formations.map(({ date, title, school, note }) => (
            <div key={title} className="card">
              <span className="mb-5 inline-block border-[2px] border-ink px-2.5 py-1 font-display text-[0.8rem] font-semibold">
                {date}
              </span>
              <h3 className="text-[1.15rem] leading-snug">{title}</h3>
              <p className="mt-3 font-display font-semibold">{school}</p>
              <p className="mt-1 text-[0.9rem] opacity-65">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
