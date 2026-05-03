import type { Template } from "@/data/templates";

type Props = {
  template: Template;
};

export function TemplateDetailCta({ template }: Props) {
  return (
    <section aria-label="Passer à l'achat" className="bg-ink text-center pt-[7rem] pb-16">
      <div className="max-w-7xl mx-auto px-8">
        <span
          className="section-label"
          style={{ background: "var(--color-sunshine)", color: "var(--color-ink)" }}
        >
          Passer à l&apos;achat
        </span>
        <h2 className="mt-8" style={{ color: "var(--color-cream)" }}>
          Prêt·e à <em>t&apos;organiser</em>&nbsp;?
        </h2>
        <p
          style={{
            margin: "1.5rem auto 2rem",
            maxWidth: "55ch",
            opacity: 0.85,
            fontSize: "1.15rem",
            color: "var(--color-cream)",
          }}
        >
          {template.price}&nbsp;€ une fois, mises à jour à vie, remboursement 14 jours sans
          justification. Zéro risque.
        </p>
        <span
          className="price-big"
          style={{ margin: "0 auto 2rem", color: "var(--color-sunshine)" }}
        >
          {template.price}&nbsp;€
        </span>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#"
            className="group inline-flex items-center gap-2 font-semibold border-[2.5px] border-ink bg-sunshine text-ink shadow-brutal transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out] hover:translate-x-1 hover:translate-y-1 hover:shadow-none px-8 py-[1.15rem] text-[1.05rem]"
          >
            Ajouter au panier · {template.price}&nbsp;€
            <span
              aria-hidden
              className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-rotate-12"
            >
              →
            </span>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 font-semibold border-[2.5px] text-[1.05rem] px-8 py-[1.15rem] transition-[transform,box-shadow] duration-150 ease-out hover:[transform:translate(4px,4px)] hover:shadow-none"
            style={{
              background: "transparent",
              color: "var(--color-cream)",
              borderColor: "var(--color-cream)",
              boxShadow: "4px 4px 0 var(--color-peach)",
            }}
          >
            Acheter maintenant
          </a>
        </div>
        <p className="note-small" style={{ color: "var(--color-cream)", opacity: 0.65 }}>
          Livraison immédiate par email · Garantie 14 jours
        </p>
      </div>
    </section>
  );
}
