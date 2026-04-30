const items = [
  "Next.js 16",
  "TypeScript",
  "Node.js",
  "PHP",
  "WordPress",
  "AWS Lambda",
  "n8n",
  "Tailwind",
  "Stripe",
  "Vercel",
  "React",
];

export function Marquee() {
  return (
    <section
      aria-label="Stack technique"
      className="bg-ink text-cream border-b-[2.5px] border-ink overflow-hidden py-4"
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
