const items = [
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "PHP",
  "WordPress",
  "AWS",
  "n8n",
  "Supabase",
  "Mistral API",
  "Claude",
  "Tailwind",
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
