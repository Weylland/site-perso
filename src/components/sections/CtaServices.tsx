import Link from "next/link";

export function CtaServices() {
  return (
    <section aria-label="Contact" className="bg-ink text-center pt-[7rem] pb-16">
      <div className="max-w-7xl mx-auto px-8">
        <span
          className="section-label"
          style={{ background: "var(--color-sunshine)", color: "var(--color-ink)" }}
        >
          Go
        </span>
        <h2 className="mt-8" style={{ color: "var(--color-cream)" }}>
          Un besoin,
          <br />
          une <em>deadline</em>&nbsp;?
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
          Écris-moi, on défriche ensemble avant tout chiffrage.
        </p>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 font-semibold border-[2.5px] border-ink bg-sunshine text-ink shadow-brutal transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out] hover:translate-x-1 hover:translate-y-1 hover:shadow-none px-8 py-[1.15rem] text-[1.05rem]"
        >
          Discuter d&apos;un projet
          <span
            aria-hidden
            className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-rotate-12"
          >
            →
          </span>
        </Link>
        <p className="note-small" style={{ color: "var(--color-cream)", opacity: 0.65 }}>
          Devis sous 48&nbsp;h · Aucun engagement
        </p>
      </div>
    </section>
  );
}
