export function CtaAbout() {
  return (
    <section aria-label="Contact" className="bg-ink text-center pt-[7rem] pb-16">
      <div className="max-w-7xl mx-auto px-8">
        <span
          className="section-label"
          style={{ background: "var(--color-sunshine)", color: "var(--color-ink)" }}
        >
          On bosse ensemble ?
        </span>
        <h2 className="mt-8" style={{ color: "var(--color-cream)" }}>
          Freelance, mission longue,
          <br />
          <em>ou CDI</em>.
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
          Disponible sur tous les formats. Parlons-en avant de mettre un prix.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
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
          </a>
          <a
            href="/services"
            className="inline-flex items-center gap-2 font-semibold border-[2.5px] text-[1.05rem] px-8 py-[1.15rem] transition-[transform,box-shadow] duration-150 ease-out hover:[transform:translate(4px,4px)] hover:shadow-none"
            style={{
              background: "transparent",
              color: "var(--color-cream)",
              borderColor: "var(--color-cream)",
              boxShadow: "4px 4px 0 var(--color-peach)",
            }}
          >
            Voir les services
          </a>
        </div>
      </div>
    </section>
  );
}
