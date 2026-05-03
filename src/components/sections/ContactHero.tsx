import Image from "next/image";

export function ContactHero() {
  return (
    <section
      aria-label="Hero contact"
      className="relative overflow-hidden bg-cream border-b-[2.5px] border-ink pt-28 pb-24"
    >
      <div
        aria-hidden
        className="absolute inset-0 hero-dot-pattern opacity-[0.08] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-8 grid grid-cols-1 min-[900px]:grid-cols-[1.2fr_1fr] gap-16 items-center">
        <div>
          <span className="eyebrow mb-6 animate-[fade-in-up_0.8s_ease-out_0.05s_backwards]">
            Disponible · réponse sous 48 h ouvrées
          </span>

          <h1 className="mt-2 mb-7 animate-[fade-in-up_0.8s_ease-out_0.15s_backwards]">
            Parlons de <span className="highlight-sunshine">ton projet</span>.
          </h1>

          <p className="text-[1.2rem] max-w-[52ch] mb-9 leading-[1.55] animate-[fade-in-up_0.8s_ease-out_0.3s_backwards]">
            Site, application web, automatisation n8n, template sur mesure ou mission longue —
            dis-moi ce dont tu as besoin. Je lis, je reformule, je te réponds.
          </p>

          <div className="flex flex-wrap gap-8 items-center mt-10 pt-8 border-t-[1.5px] border-dashed border-ink font-display text-[0.9rem] animate-[fade-in-up_0.8s_ease-out_0.55s_backwards]">
            <div className="flex items-center gap-2">
              <strong aria-hidden>📧</strong>
              <a
                href="mailto:samiernicolas62@gmail.com"
                className="underline underline-offset-2 hover:opacity-70 transition-opacity opacity-70"
              >
                samiernicolas62@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <strong aria-hidden>📍</strong>
              <span className="opacity-70">Pas-de-Calais · remote France</span>
            </div>
            <div className="flex items-center gap-2">
              <strong aria-hidden>⏱️</strong>
              <span className="opacity-70">48 h ouvrées max</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center min-h-[420px] animate-[fade-in_1s_ease-out_0.3s_backwards]">
          <Image
            src="/stickers/envelope.svg"
            alt=""
            width={200}
            height={200}
            aria-hidden
            className="w-full max-w-[360px] h-auto animate-[float-rotate_5s_ease-in-out_infinite]"
            style={{ filter: "drop-shadow(6px 6px 0 var(--color-ink))" }}
          />
        </div>
      </div>
    </section>
  );
}
