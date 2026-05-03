import Image from "next/image";
import { whyItems } from "@/data/templates";

const cardColors: Record<string, string> = {
  sunshine: "card-sunshine",
  peach: "card-peach",
  sky: "card-sky",
  mint: "card-mint",
};

export function TemplatesWhy() {
  return (
    <section
      aria-label="Pourquoi acheter ici"
      id="pourquoi"
      className="section-dots border-b-[2.5px] border-ink"
    >
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-16 bg-cream border-[2.5px] border-ink shadow-brutal max-w-[760px] mx-auto p-8">
          <span className="section-label">Pourquoi acheter ici</span>
          <h2 className="mt-4">
            Pas un template
            <br />
            <em>générique</em> de plus.
          </h2>
        </div>
        <div className="grid-3">
          {whyItems.map(({ sticker, color, title, description }) => (
            <div key={title} className={`card ${cardColors[color]}`}>
              <Image
                src={sticker}
                alt=""
                aria-hidden
                width={72}
                height={72}
                className="sticker-card"
              />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
