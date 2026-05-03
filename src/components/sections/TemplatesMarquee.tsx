const items = [
  "Fait par un dev",
  "En français",
  "Support direct",
  "Mises à jour à vie",
  "Remboursement 14 j",
  "Livraison instantanée",
  "Stripe sécurisé",
];

export function TemplatesMarquee() {
  return (
    <section
      aria-label="Arguments boutique"
      className="marquee-sunshine bg-sunshine border-b-[2.5px] border-ink overflow-hidden py-4"
    >
      <div className="flex gap-12 w-max marquee animate-[marquee_35s_linear_infinite]">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
