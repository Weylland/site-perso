const items = [
  {
    q: "Quels délais pour un site vitrine ?",
    a: "Entre 2 et 4 semaines selon la complexité du périmètre, à compter de la signature du devis et de la réception des contenus. Pour un projet urgent, j'ouvre parfois des slots express — demande-moi.",
  },
  {
    q: "WordPress ou Next.js, qu'est-ce que tu choisis ?",
    a: "Ça dépend du besoin. WordPress si l'équipe éditera beaucoup de contenu en autonomie et que l'écosystème de plugins couvre le besoin. Next.js si la perf, le SEO technique, ou les fonctionnalités sur-mesure sont prioritaires. Je te conseille honnêtement en fonction de ta situation, pas de ma préférence.",
  },
  {
    q: "Tu peux reprendre un site existant ?",
    a: "Oui, via la formule TMA. On fait un audit rapide ensemble, on liste les priorités et les risques techniques, puis on avance par lots. Je travaille aussi bien sur du code propre que sur du legacy un peu embrouillé.",
  },
  {
    q: "Comment on travaille à distance concrètement ?",
    a: "Kickoff en visio pour se caler. Ensuite échanges async sur un canal dédié (Slack, Discord ou email), previews déployées sur Vercel ou un staging, point hebdo de 15 min pour valider. Tu peux joindre par téléphone en cas d'urgence.",
  },
  {
    q: "C'est quoi n8n exactement ?",
    a: "Un outil d'automatisation visuel (comme Zapier ou Make, en open source et beaucoup plus flexible) qui permet de connecter tes applications entre elles. Exemple concret : quand un paiement Stripe arrive, n8n crée la facture dans ton outil de compta, envoie le reçu au client, met à jour la base clients dans Notion, et notifie ton canal Slack.",
  },
  {
    q: "Tu prends aussi des missions longues ou du CDI ?",
    a: "Oui. Je suis ouvert à des missions longues en TJM (350-500 €/j selon contexte) et à un CDI si l'équipe et le projet sont intéressants. On peut en discuter sans engagement.",
  },
  {
    q: "Est-ce que tu fais aussi le design ?",
    a: "Sur les sites vitrine et les applications, oui — je conçois l'UI et je la code. Pour les gros projets, je bosse volontiers avec un designer en place. Si tu as déjà une maquette Figma, tout va bien.",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "30 % à la signature du devis, 70 % à la livraison. Virement ou carte (Stripe). Pour les missions longues, facturation mensuelle. Auto-entrepreneur, TVA non applicable.",
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
