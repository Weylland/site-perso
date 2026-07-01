const items = [
  {
    q: "Quels délais pour un site ?",
    a: "Ça dépend du périmètre et du moment où tu me fournis tes contenus. On fixe une date réaliste ensemble dans le devis. Si c'est urgent, dis-le : je peux parfois prévoir un créneau prioritaire.",
  },
  {
    q: "Tu travailles avec quelles technologies ?",
    a: "Celle qui colle le mieux à ton besoin — je ne t'enferme pas dans un outil. WordPress si tu veux gérer ton contenu toi-même, du développement sur mesure si tu as besoin de rapidité ou de fonctions particulières. On choisit ensemble, selon ton projet et ton budget.",
  },
  {
    q: "Tu reprends un site existant ?",
    a: "Oui, c'est la formule maintenance & dépannage. On regarde l'existant ensemble, on classe les priorités, puis on avance par petites étapes. Que ce soit propre ou un peu bricolé, je m'adapte.",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "30 % à la commande, le reste à la livraison. Virement ou carte. En auto-entrepreneur, la TVA n'est pas applicable.",
  },
  {
    q: "Missions longues ou CDI ?",
    a: "Oui, je suis ouvert aux missions longues comme à un poste en CDI, si l'équipe et le projet me parlent.",
  },
];

export function ServicesFaq() {
  return (
    <section aria-label="FAQ" className="bg-cream border-b-[2.5px] border-ink">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <span className="section-label">FAQ</span>
          <h2 className="mt-4">
            Les questions
            <br />
            <em>qui reviennent</em>.
          </h2>
        </div>
        <div className="faq">
          {items.map(({ q, a }, i) => (
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
