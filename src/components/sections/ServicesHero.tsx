import Image from "next/image";
import Link from "next/link";
import { Highlight } from "@/components/ui/Highlight";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-cream border-b-[2.5px] border-ink pt-28 pb-24">
      <div
        aria-hidden
        className="absolute inset-0 hero-dot-pattern opacity-[0.08] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-8 grid grid-cols-1 min-[900px]:grid-cols-[1.3fr_1fr] gap-16 items-center">
        <div>
          <span className="eyebrow mb-6 animate-[fade-in-up_0.8s_ease-out_0.05s_backwards]">
            Services · Freelance fullstack
          </span>

          <h1 className="mt-2 mb-7 animate-[fade-in-up_0.8s_ease-out_0.15s_backwards]">
            <Highlight color="mint">Sites</Highlight>, <em>apps</em>
            <br />& <Highlight color="peach">automatisations</Highlight>.
          </h1>

          <p className="text-[1.2rem] max-w-[50ch] mb-9 leading-[1.55] animate-[fade-in-up_0.8s_ease-out_0.3s_backwards]">
            Cinq formules, des tarifs publics, un process carré. Devis précis sous 48&nbsp;h après
            un échange pour cadrer ton besoin.
          </p>

          <div className="flex gap-4 flex-wrap animate-[fade-in-up_0.8s_ease-out_0.42s_backwards]">
            <a
              href="#formules"
              className="group inline-flex items-center gap-2 px-6 py-[0.9rem] bg-sunshine border-[2.5px] border-ink shadow-brutal font-sans font-semibold text-base transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out] hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-pointer animate-[subtle-pulse_2.8s_ease-in-out_infinite] hover:animate-none"
            >
              Voir les tarifs
              <span
                aria-hidden
                className="inline-block transition-transform duration-200 ease-out group-hover:translate-y-1"
              >
                ↓
              </span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-[0.9rem] bg-cream border-[2.5px] border-ink shadow-brutal font-sans font-semibold text-base transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out] hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-cream-2 cursor-pointer"
            >
              Discuter d&apos;un projet
            </Link>
          </div>
        </div>

        <div className="relative min-h-[360px] animate-[fade-in_1s_ease-out_0.3s_backwards]">
          <Image
            src="/stickers/bolt.svg"
            alt=""
            width={200}
            height={200}
            className="absolute z-[3] animate-[float_6s_ease-in-out_infinite]"
            style={{
              top: "5%",
              left: "10%",
              width: "50%",
              height: "auto",
              filter: "drop-shadow(6px 6px 0 var(--color-ink))",
            }}
          />
          <Image
            src="/stickers/gears.svg"
            alt=""
            width={200}
            height={200}
            className="absolute z-[4] rotate-[12deg] animate-[float_5s_ease-in-out_1s_infinite]"
            style={{
              top: "5%",
              right: "-4%",
              width: "38%",
              height: "auto",
              filter: "drop-shadow(6px 6px 0 var(--color-ink))",
            }}
          />
          <Image
            src="/stickers/wrench.svg"
            alt=""
            width={200}
            height={200}
            className="absolute z-[2] -rotate-[6deg] animate-[float-alt_8s_ease-in-out_0.5s_infinite]"
            style={{
              bottom: "5%",
              right: "4%",
              width: "30%",
              height: "auto",
              filter: "drop-shadow(6px 6px 0 var(--color-ink))",
            }}
          />
        </div>
      </div>
    </section>
  );
}
