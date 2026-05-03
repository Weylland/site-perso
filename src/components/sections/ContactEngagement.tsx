export function ContactEngagement() {
  return (
    <section aria-label="Engagement de réponse" className="bg-sunshine text-center">
      <div className="max-w-7xl mx-auto px-8 py-24" style={{ maxWidth: "720px" }}>
        <span
          className="section-label"
          style={{ background: "var(--color-ink)", color: "var(--color-sunshine)" }}
        >
          Engagement
        </span>
        <h2 className="mt-8">
          Réponse <em>sous 48 h</em> ouvrées.
        </h2>
        <p className="mt-6 text-[1.1rem] max-w-[55ch] mx-auto">
          Du lundi au vendredi. Si c&apos;est un non, je le dis clairement et j&apos;oriente vers
          une autre ressource si j&apos;en connais une.
        </p>
      </div>
    </section>
  );
}
