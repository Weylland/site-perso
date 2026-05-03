const steps = [
  {
    num: "01",
    title: "Lecture attentive",
    desc: "Je lis ta demande, je prends des notes, je creuse le contexte si nécessaire (site, LinkedIn, secteur).",
  },
  {
    num: "02",
    title: "Première réponse",
    desc: "Sous 48 h ouvrées, un retour par courriel : questions, reformulation, disponibilités, ou orientation vers une autre ressource si je ne suis pas le bon profil.",
  },
  {
    num: "03",
    title: "Appel de cadrage",
    desc: "Si on avance, une visio de 20 à 30 minutes pour préciser le besoin, le délai, le budget, et poser les vraies questions.",
  },
  {
    num: "04",
    title: "Devis ou refus carré",
    desc: "Proposition détaillée si c'est faisable (livrables, délai, prix fixe), ou refus clair et argumenté sinon.",
  },
];

export function MerciSteps() {
  return (
    <section
      aria-label="Ce qui se passe après l'envoi"
      className="section-dots border-b-[2.5px] border-ink"
    >
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="bg-cream border-[2.5px] border-ink shadow-brutal max-w-[760px] mx-auto p-8 mb-16 text-center">
          <span className="section-label">Et maintenant ?</span>
          <h2 className="mt-4">
            Ce qui se passe
            <br />
            <em>après l&apos;envoi</em>.
          </h2>
          <p className="mt-4 text-[1.05rem]">
            Pas de file d&apos;attente anonyme ni de bot qui renvoie un mail générique. Quatre
            étapes, concrètes.
          </p>
        </div>

        <div className="steps">
          {steps.map(({ num, title, desc }) => (
            <div key={num} className="step">
              <div className="step-num">{num}</div>
              <h3>{title}</h3>
              <p className="mt-2 text-[0.95rem]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
