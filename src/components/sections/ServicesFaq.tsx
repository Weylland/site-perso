const items = [
  {
    q: "Quels délais pour un site vitrine ?",
    a: "Entre 2 et 4 semaines à partir de la signature du devis et de la réception des contenus. Si tu es pressé, demande un slot express.",
  },
  {
    q: "WordPress ou Next.js ?",
    a: "Ça dépend de ton besoin. WordPress pour l'éditorial en autonomie et un écosystème de plugins large. Next.js pour la perf extrême, un SEO technique poussé ou des fonctionnalités sur-mesure.",
  },
  {
    q: "Tu reprends un site existant ?",
    a: "Oui, via la formule TMA. Audit rapide, priorisation, puis on avance par lots. Du code propre comme du legacy embrouillé.",
  },
  {
    q: "Comment se passe le paiement ?",
    a: "30 % à la signature, 70 % à la livraison. Virement SEPA ou carte Stripe. Auto-entrepreneur, TVA non applicable (art. 293 B du CGI).",
  },
  {
    q: "Missions longues ou CDI ?",
    a: "Oui, ouvert aux missions longues en TJM (350–500 €/j selon contexte) et au CDI si l'équipe et le projet sont intéressants.",
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
