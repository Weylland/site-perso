const items = [
  {
    q: "Quels délais pour un site ?",
    a: "Ça dépend du périmètre et du moment où tu me fournis tes contenus. On fixe une date réaliste ensemble dans le devis. Si c'est urgent, dis-le : je peux parfois prévoir un créneau prioritaire.",
  },
  {
    q: "Comment tu choisis la techno pour mon projet ?",
    a: "Ça dépend de la formule. WordPress pour un site vitrine si tu veux éditer le contenu toi-même, Next.js/React pour une application sur mesure ou quand la vitesse compte, n8n pour l'automatisation. Je te propose l'option la plus simple à maintenir pour toi, pas celle qui m'arrange.",
  },
  {
    q: "Concrètement, comment se passe une reprise de site ?",
    a: "Formule maintenance & dépannage : je commence par un audit rapide du code et de l'hébergement, on classe les urgences ensemble, puis on avance par petites étapes chiffrées. Pas besoin de tout refaire d'un coup.",
  },
  {
    q: "Le prix du devis est-il vraiment fixe ?",
    a: "Oui, pour les formules forfaitaires (vitrine, CMS, automatisation) : le prix ne bouge pas sauf si tu ajoutes du périmètre en cours de route, et dans ce cas on chiffre l'avenant avant de continuer. Pour la maintenance, c'est à la tâche ou à l'heure selon ce qu'on a convenu.",
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
