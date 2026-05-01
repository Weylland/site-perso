import Image from "next/image";
import Link from "next/link";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-cream border-b-[2.5px] border-ink pt-28 pb-24">
      <div
        aria-hidden
        className="absolute inset-0 hero-dot-pattern opacity-[0.08] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-8 grid grid-cols-1 min-[900px]:grid-cols-[1.2fr_1fr] gap-16 items-center">
        <div>
          <span className="eyebrow mb-6 animate-[fade-in-up_0.8s_ease-out_0.05s_backwards]">
            À propos · parcours &amp; stack
          </span>

          <h1 className="mt-2 mb-7 animate-[fade-in-up_0.8s_ease-out_0.15s_backwards]">
            Nicolas Samier,
            <br />
            <em>dev fullstack</em>
            <br />
            <span className="highlight-peach">indépendant</span>.
          </h1>

          <p className="text-[1.2rem] max-w-[50ch] mb-9 leading-[1.55] animate-[fade-in-up_0.8s_ease-out_0.3s_backwards]">
            Trois ans d&apos;XP, une trentaine de projets livrés, un goût net pour le code propre et
            les livrables qui font le job sans bruit. Basé dans le Pas-de-Calais, en remote partout
            en France.
          </p>

          <div className="flex gap-4 flex-wrap animate-[fade-in-up_0.8s_ease-out_0.42s_backwards]">
            <Link
              href="#cv"
              className="group inline-flex items-center gap-2 px-6 py-[0.9rem] bg-sunshine border-[2.5px] border-ink shadow-brutal font-sans font-semibold text-base transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out,background-color_200ms_ease-out] hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-sunshine-2 cursor-pointer animate-[subtle-pulse_2.8s_ease-in-out_infinite] hover:animate-none"
            >
              Télécharger mon CV
              <span
                aria-hidden
                className="inline-block transition-transform duration-200 ease-out group-hover:translate-y-1"
              >
                ↓
              </span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-[0.9rem] bg-cream border-[2.5px] border-ink shadow-brutal font-sans font-semibold text-base transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out,background-color_200ms_ease-out] hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-cream-2 cursor-pointer"
            >
              Me contacter
            </Link>
          </div>
        </div>

        <div className="relative min-h-[420px] animate-[fade-in_1s_ease-out_0.3s_backwards]">
          <Image
            src="/stickers/ns-big.svg"
            alt=""
            width={220}
            height={220}
            aria-hidden
            className="absolute top-[8%] left-[22%] w-[55%] h-auto z-[3] animate-[float_6s_ease-in-out_infinite]"
            style={{ filter: "drop-shadow(6px 6px 0 var(--color-ink))" }}
          />
          <Image
            src="/stickers/guitar.svg"
            alt=""
            width={120}
            height={120}
            aria-hidden
            className="absolute top-[2%] -left-[2%] w-[28%] h-auto z-[4] rotate-[-8deg] animate-[float_5s_ease-in-out_0.8s_infinite]"
            style={{ filter: "drop-shadow(6px 6px 0 var(--color-ink))" }}
          />
          <Image
            src="/stickers/headphones.svg"
            alt=""
            width={120}
            height={120}
            aria-hidden
            className="absolute bottom-[4%] right-[2%] w-[28%] h-auto z-[4] rotate-[6deg] animate-[float_6.5s_ease-in-out_1.2s_infinite]"
            style={{ filter: "drop-shadow(6px 6px 0 var(--color-ink))" }}
          />
          <Image
            src="/stickers/star.svg"
            alt=""
            width={80}
            height={80}
            aria-hidden
            className="absolute top-[50%] right-[5%] w-[18%] h-auto z-[5] animate-[spin-slow_12s_linear_infinite]"
            style={{ filter: "drop-shadow(6px 6px 0 var(--color-ink))" }}
          />
        </div>
      </div>
    </section>
  );
}
