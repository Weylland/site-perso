import Image from "next/image";

export function TemplatesHero() {
  return (
    <section
      aria-label="Hero templates"
      className="relative overflow-hidden bg-cream border-b-[2.5px] border-ink pt-28 pb-24"
    >
      <div
        aria-hidden
        className="absolute inset-0 hero-dot-pattern opacity-[0.08] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-8 grid grid-cols-1 min-[900px]:grid-cols-[1.2fr_1fr] gap-16 items-center">
        <div>
          <span className="eyebrow mb-6 animate-[fade-in-up_0.8s_ease-out_0.05s_backwards]">
            Boutique · Templates Notion
          </span>

          <h1 className="mt-2 mb-7 animate-[fade-in-up_0.8s_ease-out_0.15s_backwards]">
            <span className="highlight-mint">Templates</span>
            <br />
            <em>Notion</em> pour
            <br />
            freelances tech.
          </h1>

          <p className="text-[1.2rem] max-w-[50ch] mb-9 leading-[1.55] animate-[fade-in-up_0.8s_ease-out_0.3s_backwards]">
            Les systèmes que j&apos;utilise moi-même pour gérer mon activité de dev freelance. Prêts
            à l&apos;emploi, en français, pensés pour les workflows techniques.
          </p>

          <div className="flex gap-4 flex-wrap animate-[fade-in-up_0.8s_ease-out_0.42s_backwards]">
            <a
              href="#boutique"
              className="group inline-flex items-center gap-2 px-6 py-[0.9rem] bg-sunshine border-[2.5px] border-ink shadow-brutal font-sans font-semibold text-base transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out] hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-pointer animate-[subtle-pulse_2.8s_ease-in-out_infinite] hover:animate-none"
            >
              Voir la boutique
              <span
                aria-hidden
                className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-rotate-12"
              >
                ↓
              </span>
            </a>
            <a
              href="#pourquoi"
              className="inline-flex items-center gap-2 px-6 py-[0.9rem] bg-cream border-[2.5px] border-ink shadow-brutal font-sans font-semibold text-base transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out] hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-cream-2 cursor-pointer"
            >
              Pourquoi acheter ici
            </a>
          </div>
        </div>

        <div className="relative min-h-[400px] animate-[fade-in_1s_ease-out_0.3s_backwards]">
          <Image
            src="/stickers/notion-mockup.svg"
            alt=""
            aria-hidden
            width={300}
            height={300}
            className="absolute z-[3] animate-[float_6s_ease-in-out_infinite]"
            style={{
              width: "60%",
              left: "18%",
              top: "10%",
              height: "auto",
              filter: "drop-shadow(6px 6px 0 var(--color-ink))",
            }}
          />
          <Image
            src="/stickers/folder.svg"
            alt=""
            aria-hidden
            width={200}
            height={200}
            className="absolute z-[4] animate-[float_5s_ease-in-out_1s_infinite]"
            style={{
              width: "30%",
              top: 0,
              left: "-5%",
              height: "auto",
              filter: "drop-shadow(6px 6px 0 var(--color-ink))",
            }}
          />
          <Image
            src="/stickers/chart.svg"
            alt=""
            aria-hidden
            width={200}
            height={200}
            className="absolute z-[4] animate-[float_6.5s_ease-in-out_1.5s_infinite]"
            style={{
              width: "32%",
              right: "-2%",
              bottom: 0,
              height: "auto",
              filter: "drop-shadow(6px 6px 0 var(--color-ink))",
            }}
          />
        </div>
      </div>
    </section>
  );
}
