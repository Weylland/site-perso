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
          Je suis développeur web fullstack. Je conçois et développe des sites, des applications web
          sur mesure, des automatisations et des intégrations IA, pour des entrepreneurs, des TPE,
          des associations et d&apos;autres freelances qui veulent déléguer leur tech.
        </p>
        <p style={{ fontSize: "1.15rem" }}>
          Côté technique, je travaille principalement avec Next.js et React pour les frontends
          performants, Node.js et PHP côté serveur, WordPress / WooCommerce pour l&apos;éditorial,
          et je m&apos;appuie sur AWS (API Gateway, Lambda, S3, DynamoDB) pour
          l&apos;infrastructure. Pour l&apos;automatisation et l&apos;IA, j&apos;assemble des
          pipelines avec n8n, les API Claude et Mistral, du RAG et des serveurs MCP. C&apos;est
          exactement ce qui fait tourner mon média de veille watch·ia.
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
          À côté du code, je joue de la guitare acoustique, j&apos;écoute beaucoup de musique, et
          j&apos;accumule des heures sur des jeux vidéo que je ne finirai probablement jamais.
        </p>
      </div>
    </section>
  );
}
