import Image from "next/image";

export function AboutCv() {
  return (
    <section
      aria-label="Télécharger le CV"
      id="cv"
      className="bg-cream border-b-[2.5px] border-ink py-24 text-center"
    >
      <div className="max-w-7xl mx-auto px-8">
        <Image
          src="/stickers/document.svg"
          alt=""
          width={120}
          height={120}
          aria-hidden
          className="block mx-auto mb-6"
          style={{ filter: "drop-shadow(6px 6px 0 var(--color-ink))" }}
        />
        <h2>
          Besoin du CV <em>complet</em>&nbsp;?
        </h2>
        <p style={{ margin: "1rem auto 2rem", maxWidth: "50ch", fontSize: "1.1rem" }}>
          Format PDF, à jour, prêt pour un recruteur ou un DSI. Inclut références vérifiables,
          projets détaillés, et grille TJM.
        </p>
        <a
          href="#"
          className="group inline-flex items-center gap-2 font-semibold border-[2.5px] border-ink bg-sunshine text-ink shadow-brutal transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out] hover:translate-x-1 hover:translate-y-1 hover:shadow-none px-8 py-[1.15rem] text-[1.05rem]"
        >
          Télécharger mon CV (PDF)
          <span
            aria-hidden
            className="inline-block transition-transform duration-200 ease-out group-hover:translate-y-1"
          >
            ↓
          </span>
        </a>
        <p className="note-small">Mis à jour en avril 2026 · 3 pages · 280 ko</p>
      </div>
    </section>
  );
}
