export function Process() {
  return (
    <section aria-label="Processus" className="bg-peach border-b-[2.5px] border-ink py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="section-label">Le processus</span>
          <h2>
            Quatre étapes.
            <br />
            <em>Zéro surprise.</em>
          </h2>
          <p className="mt-5 max-w-[58ch] mx-auto text-[1.1rem] opacity-80">
            Un cadre simple, éprouvé sur une trentaine de projets. Tu sais où on en est à chaque
            instant. Tu valides à chaque étape clé.
          </p>
        </div>

        <div className="steps">
          <div className="step">
            <div className="step-num">01</div>
            <h3>Brief</h3>
            <p>
              Un appel de 30 min pour comprendre ton contexte, tes contraintes et tes priorités. Je
              pose des questions, tu réponds, on repart avec un cadrage clair.
            </p>
          </div>
          <div className="step">
            <div className="step-num">02</div>
            <h3>Devis</h3>
            <p>
              Sous 48&nbsp;h, un devis détaillé&nbsp;: livrables, délai, prix fixe. Pas de forfait
              qui gonfle, pas de surprise en fin de mois.
            </p>
          </div>
          <div className="step">
            <div className="step-num">03</div>
            <h3>Développement</h3>
            <p>
              Je code, je pousse des previews, tu valides par jalons. Point hebdo de 15 min pour
              garder la main sur le projet.
            </p>
          </div>
          <div className="step">
            <div className="step-num">04</div>
            <h3>Livraison</h3>
            <p>
              Mise en ligne, formation éditoriale si besoin, documentation technique. Support inclus
              les deux premières semaines post-mise en ligne.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
