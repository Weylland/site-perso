const items = [
  {
    q: "Je n'ai pas de cahier des charges, je peux quand même écrire ?",
    a: "Oui, c'est même le cas le plus fréquent. Décris le problème avec tes mots, dis ce qui te bloque aujourd'hui et à quoi ressemblerait une solution qui te conviendrait. Je te pose les bonnes questions ensuite.",
  },
  {
    q: "Tu peux signer un accord de confidentialité ?",
    a: "Oui, sans souci. Dis-le dans ton message : je t'envoie un modèle simple ou je signe le tien. Rien n'est partagé avant accord.",
  },
  {
    q: "Quels projets tu acceptes moins ?",
    a: "Les projets montés uniquement avec des outils sans code (comme Webflow ou Softr), sans vrai développement derrière. Et les secteurs très réglementés que je ne maîtrise pas (santé, crypto, jeux d'argent).",
  },
];

export function ContactFaq() {
  return (
    <section
      aria-label="Questions fréquentes avant de contacter"
      className="bg-sky border-b-[2.5px] border-ink"
    >
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <span className="section-label">Avant d&apos;écrire</span>
          <h2 className="mt-4">
            Trois questions
            <br />
            qui reviennent <em>souvent</em>.
          </h2>
        </div>
        <div className="faq">
          {items.map(({ q, a }) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
