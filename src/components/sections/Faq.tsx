const items = [
  {
    q: "Tu fais quoi, concrètement ?",
    a: "Des sites vitrine, des applications web sur mesure, de l'automatisation et de l'intelligence artificielle. Je prends le projet du début (comprendre ton besoin) jusqu'à la mise en ligne.",
  },
  {
    q: "Tu fais vraiment de l'IA, ou c'est juste un mot à la mode ?",
    a: "Du concret. Par exemple : un assistant qui répond à partir de tes propres documents, de la rédaction automatique, ou un outil qui récupère et trie de l'information à ta place. C'est exactement ce qui fait tourner mon média de veille, watch·ia.",
  },
  {
    q: "Tu travailles avec quelles technologies ?",
    a: "Celle qui colle le mieux à ton besoin. Je ne t'enferme pas dans un outil : WordPress si tu veux gérer ton contenu toi-même, du développement sur mesure si tu as besoin de rapidité ou de fonctions particulières. On choisit ensemble, selon ton projet et ton budget, pas selon mes habitudes.",
  },
  {
    q: "Tu peux reprendre un site existant ?",
    a: "Oui, c'est la formule maintenance & dépannage. On regarde l'existant ensemble, on classe les priorités, puis on avance par petites étapes. Que le site soit bien fait ou un peu bricolé, je m'adapte.",
  },
  {
    q: "Comment on travaille à distance ?",
    a: "Un premier appel en visio pour se caler. Ensuite on échange par messages quand ça nous arrange, je te montre des versions de test en ligne au fur et à mesure, et un point court chaque semaine. Le téléphone reste possible en cas d'urgence.",
  },
  {
    q: "Tu cherches un CDI ou du freelance ?",
    a: "Les deux. Je suis disponible en freelance, pour des missions courtes comme longues, et aussi pour un poste en CDI si l'équipe et le projet me parlent. On en discute sans engagement.",
  },
  {
    q: "Est-ce que tu fais aussi le design ?",
    a: "Sur les sites et les applications, oui : je conçois et je code le design. Pour les gros projets, je travaille volontiers avec un graphiste déjà en place. Si tu as déjà une maquette, parfait.",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "30 % à la commande, le reste à la livraison. Virement ou carte. Pour les missions longues, une facture par mois. En auto-entrepreneur, la TVA n'est pas applicable.",
  },
];

export function Faq() {
  return (
    <section aria-label="FAQ" className="bg-sky border-b-[2.5px] border-ink">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <span className="section-label">FAQ</span>
          <h2 className="mt-4">
            Les questions
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
