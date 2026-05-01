export function AboutBio() {
  return (
    <section aria-label="Biographie" className="bg-sky border-b-[2.5px] border-ink py-24">
      <div className="max-w-7xl mx-auto px-8" style={{ maxWidth: "820px" }}>
        <div className="mb-12" style={{ textAlign: "left" }}>
          <span className="section-label">Bio</span>
          <h2 className="mt-4">
            Ce que je fais,
            <br />
            <em>pour de vrai</em>.
          </h2>
        </div>

        <p style={{ fontSize: "1.2rem" }}>
          Je suis développeur fullstack indépendant, avec trois ans d&apos;expérience. Je conçois et
          développe des sites web, des applications sur mesure et des automatisations pour des
          startups en phase d&apos;amorçage, des petites boîtes bien établies, et d&apos;autres
          freelances qui veulent déléguer leur tech.
        </p>
        <p style={{ fontSize: "1.15rem" }}>
          Côté technique, je travaille principalement avec Next.js pour les frontends performants,
          Node.js et PHP côté serveur, WordPress pour l&apos;éditorial en autonomie, et je
          m&apos;appuie sur AWS (API Gateway, Lambda, S3, DynamoDB) pour l&apos;infrastructure. Pour
          tout ce qui est automatisation, j&apos;utilise n8n&nbsp;: un outil open source qui
          remplace Zapier avec une flexibilité bien supérieure.
        </p>
        <p style={{ fontSize: "1.15rem" }}>
          Ma façon de bosser tient en trois points&nbsp;: comprendre le problème avant d&apos;écrire
          du code, livrer par jalons courts avec des previews régulières, et documenter ce que je
          construis pour que le client ne dépende pas de moi pour le faire vivre après la livraison.
        </p>

        <div className="pull-quote mt-12">
          Je préfère un site simple qui convertit à un site spectaculaire que personne ne comprend.
        </div>

        <p className="mt-12" style={{ fontSize: "1.15rem" }}>
          À côté du code, je joue de la guitare depuis l&apos;adolescence, j&apos;écoute beaucoup
          trop de musique (prog rock, hip-hop français, soundtracks de jeux), et j&apos;accumule des
          heures sur des jeux vidéo que je ne finirai probablement jamais.
        </p>
      </div>
    </section>
  );
}
