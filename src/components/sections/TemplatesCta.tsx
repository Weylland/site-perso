import Link from "next/link";

export function TemplatesCta() {
  return (
    <section aria-label="Sur mesure" className="bg-ink text-center pt-[7rem] pb-16">
      <div className="max-w-7xl mx-auto px-8">
        <span
          className="section-label"
          style={{ background: "var(--color-sunshine)", color: "var(--color-ink)" }}
        >
          Sur mesure
        </span>
        <h2 className="mt-8" style={{ color: "var(--color-cream)" }}>
          Tu veux un système
          <br />
          Notion <em>taillé</em> pour toi&nbsp;?
        </h2>
        <p
          style={{
            margin: "1.5rem auto 2.5rem",
            maxWidth: "55ch",
            opacity: 0.85,
            fontSize: "1.15rem",
            color: "var(--color-cream)",
          }}
        >
          Je conçois des systèmes Notion sur mesure pour ton activité. À partir de 600&nbsp;€.
        </p>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 font-semibold border-[2.5px] border-ink bg-sunshine text-ink shadow-brutal transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out] hover:translate-x-1 hover:translate-y-1 hover:shadow-none px-8 py-[1.15rem] text-[1.05rem]"
        >
          Discuter du besoin
          <span
            aria-hidden
            className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-rotate-12"
          >
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
