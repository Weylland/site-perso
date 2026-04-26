import Image from "next/image";
import Link from "next/link";
import { Highlight } from "@/components/ui/Highlight";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream border-b-[2.5px] border-ink pt-28 pb-24">
      <div
        aria-hidden
        className="absolute inset-0 hero-dot-pattern opacity-[0.08] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-8 grid grid-cols-1 min-[900px]:grid-cols-[1.2fr_1fr] gap-16 items-center">
        <div>
          <span className="eyebrow mb-6 animate-[fade-in-up_0.8s_ease-out_0.05s_backwards]">
            Disponible · freelance &amp; CDI
          </span>

          <h1 className="mt-2 mb-7 animate-[fade-in-up_0.8s_ease-out_0.15s_backwards]">
            Je suis Nicolas,
            <br />
            <em>développeur</em> <Highlight>fullstack</Highlight>.
          </h1>

          <p className="text-[1.2rem] max-w-[50ch] mb-9 leading-[1.55] animate-[fade-in-up_0.8s_ease-out_0.3s_backwards]">
            Sites, applications web et automatisations pour startups, petites boîtes et freelances.
            Du brief à la mise en ligne — sans friction.
          </p>

          <div className="flex gap-4 flex-wrap animate-[fade-in-up_0.8s_ease-out_0.42s_backwards]">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-[0.9rem] bg-sunshine border-[2.5px] border-ink shadow-brutal font-sans font-semibold text-base transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out,background-color_200ms_ease-out] hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-sunshine-2 cursor-pointer animate-[subtle-pulse_2.8s_ease-in-out_infinite] hover:animate-none"
            >
              Discuter d&apos;un projet
              <span
                aria-hidden
                className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-rotate-12"
              >
                →
              </span>
            </Link>

            <Link
              href="/templates"
              className="inline-flex items-center gap-2 px-6 py-[0.9rem] bg-cream border-[2.5px] border-ink shadow-brutal font-sans font-semibold text-base transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out,background-color_200ms_ease-out] hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-cream-2 cursor-pointer"
            >
              Voir les templates
            </Link>
          </div>

          <div className="mt-10 pt-8 border-t-[1.5px] border-dashed border-ink flex flex-wrap gap-x-8 gap-y-3 font-display text-[0.9rem] animate-[fade-in-up_0.8s_ease-out_0.55s_backwards]">
            <div className="flex items-center gap-1.5">
              <strong className="font-semibold">📍 Pas-de-Calais</strong>
              <span className="opacity-70">· remote France</span>
            </div>
            <div className="flex items-center gap-1.5">
              <strong className="font-semibold">3 ans</strong>
              <span className="opacity-70">d&apos;XP fullstack</span>
            </div>
            <div className="flex items-center gap-1.5">
              <strong className="font-semibold">Stack :</strong>
              <span className="opacity-70">Next · Node · WP · AWS</span>
            </div>
          </div>
        </div>

        <div className="relative min-h-[460px] animate-[fade-in_1s_ease-out_0.3s_backwards]">
          <Image
            src="/stickers/laptop.svg"
            alt=""
            width={200}
            height={200}
            className="absolute top-[10%] left-[15%] w-[62%] h-auto z-[3] animate-[float_6s_ease-in-out_infinite]"
            style={{ filter: "drop-shadow(6px 6px 0 var(--color-ink))" }}
          />
          <Image
            src="/stickers/bolt.svg"
            alt=""
            width={200}
            height={200}
            className="absolute top-[5%] -right-[4%] w-[28%] h-auto z-[4] rotate-[12deg] animate-[float_5s_ease-in-out_1s_infinite]"
            style={{ filter: "drop-shadow(6px 6px 0 var(--color-ink))" }}
          />
          <Image
            src="/stickers/gears.svg"
            alt=""
            width={200}
            height={200}
            className="absolute -bottom-[2%] left-[5%] w-[30%] h-auto z-[4] rotate-[9deg] animate-[float_6.5s_ease-in-out_1.5s_infinite]"
            style={{ filter: "drop-shadow(6px 6px 0 var(--color-ink))" }}
          />
          <Image
            src="/stickers/star.svg"
            alt=""
            width={200}
            height={200}
            className="absolute top-[40%] right-[10%] w-[18%] h-auto z-[5] animate-[spin-slow_12s_linear_infinite]"
            style={{ filter: "drop-shadow(6px 6px 0 var(--color-ink))" }}
          />
        </div>
      </div>
    </section>
  );
}
