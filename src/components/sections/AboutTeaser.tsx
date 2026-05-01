import Image from "next/image";

export function AboutTeaser() {
  return (
    <section aria-label="À propos" className="bg-cream section-grid border-b-[2.5px] border-ink">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="split split-reverse">
          <div>
            <Image
              src="/stickers/ns-big.svg"
              alt=""
              width={380}
              height={380}
              aria-hidden="true"
              className="block w-full h-auto max-w-[380px]"
              style={{
                filter: "drop-shadow(8px 8px 0 var(--color-ink))",
                transform: "rotate(4deg)",
              }}
            />
          </div>
          <div>
            <span className="section-label">Qui je suis</span>
            <h2 className="mt-8">
              Dev indé,
              <br />
              <em>3 ans</em> dans les mains.
            </h2>
            <p className="mt-8" style={{ fontSize: "1.1rem" }}>
              J&apos;ai démarré chez Apresta sur des sites WordPress et des apps web sur mesure.
              Puis j&apos;ai monté 4Spel, ma boîte, pour prendre la main sur des projets plus
              complets — PHP natif, intégrations WP, apps métier.
            </p>
            <p className="mt-[1em]">
              Aujourd&apos;hui je bosse en freelance depuis le Pas-de-Calais, en remote partout en
              France. Disponible aussi pour des missions longues ou un CDI si l&apos;équipe et le
              projet collent.
            </p>
            <p className="mt-[1em]">
              Quand je ne code pas, je joue de la guitare, j&apos;écoute trop de musique, et
              j&apos;accumule des heures sur des jeux vidéo que je ne finirai jamais.
            </p>
            <a href="/a-propos" className="link-cta mt-8 inline-flex">
              Parcours complet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
