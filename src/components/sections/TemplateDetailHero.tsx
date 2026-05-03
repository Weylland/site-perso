import Image from "next/image";
import type { Template } from "@/data/templates";

type Props = {
  template: Template;
};

export function TemplateDetailHero({ template }: Props) {
  return (
    <section
      aria-label={`Hero ${template.name}`}
      className="relative overflow-hidden bg-cream border-b-[2.5px] border-ink pt-28 pb-24"
    >
      <div
        aria-hidden
        className="absolute inset-0 hero-dot-pattern opacity-[0.08] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-8 grid grid-cols-1 min-[900px]:grid-cols-[1.2fr_1fr] gap-16 items-center">
        <div>
          <span className="eyebrow mb-6 animate-[fade-in-up_0.8s_ease-out_0.05s_backwards]">
            {template.detail?.eyebrow ?? `${template.category} · ${template.version}`}
          </span>

          <h1 className="mt-2 mb-7 animate-[fade-in-up_0.8s_ease-out_0.15s_backwards]">
            {template.name.split(" ").slice(0, -1).join(" ")}
            <br />
            <span className="highlight">{template.name.split(" ").slice(-2, -1)[0]}</span>{" "}
            <em>{template.name.split(" ").slice(-1)[0]}</em>.
          </h1>

          <p className="text-[1.2rem] max-w-[50ch] mb-9 leading-[1.55] animate-[fade-in-up_0.8s_ease-out_0.3s_backwards]">
            {template.detail?.subtitle}
          </p>

          <div className="flex items-center gap-6 mb-9 flex-wrap animate-[fade-in-up_0.8s_ease-out_0.36s_backwards]">
            <span className="price-big" style={{ margin: 0 }}>
              {template.price === 0 ? "Gratuit" : `${template.price} €`}
            </span>
            <span className="tag">Stripe sécurisé</span>
            <span className="tag">Livraison 60 s</span>
          </div>

          <div className="flex gap-4 flex-wrap animate-[fade-in-up_0.8s_ease-out_0.42s_backwards]">
            <a
              href="#"
              className="group inline-flex items-center gap-2 px-6 py-[0.9rem] bg-sunshine border-[2.5px] border-ink shadow-brutal font-sans font-semibold text-base transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out] hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-pointer animate-[subtle-pulse_2.8s_ease-in-out_infinite] hover:animate-none"
            >
              Ajouter au panier · {template.price} €
              <span
                aria-hidden
                className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-rotate-12"
              >
                →
              </span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-[0.9rem] bg-cream border-[2.5px] border-ink shadow-brutal font-sans font-semibold text-base transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out] hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-cream-2 cursor-pointer"
            >
              Acheter maintenant
            </a>
          </div>

          <p className="note-small animate-[fade-in-up_0.8s_ease-out_0.55s_backwards]">
            Livraison immédiate par email · Garantie remboursement 14 jours · Mises à jour à vie
          </p>
        </div>

        <div className="relative min-h-[440px] animate-[fade-in_1s_ease-out_0.3s_backwards]">
          <Image
            src="/stickers/notion-mockup.svg"
            alt=""
            aria-hidden
            width={300}
            height={300}
            className="absolute z-[3] animate-[float_6s_ease-in-out_infinite]"
            style={{
              width: "70%",
              left: "15%",
              top: "5%",
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
              width: "28%",
              top: "-3%",
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
              width: "30%",
              right: "-2%",
              bottom: "-3%",
              height: "auto",
              filter: "drop-shadow(6px 6px 0 var(--color-ink))",
            }}
          />
          <Image
            src="/stickers/money.svg"
            alt=""
            aria-hidden
            width={200}
            height={200}
            className="absolute z-[5] animate-[float_4.5s_ease-in-out_0.5s_infinite]"
            style={{
              width: "22%",
              top: "10%",
              right: "5%",
              height: "auto",
              filter: "drop-shadow(6px 6px 0 var(--color-ink))",
            }}
          />
        </div>
      </div>
    </section>
  );
}
