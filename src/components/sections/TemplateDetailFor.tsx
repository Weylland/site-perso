import Image from "next/image";
import type { TemplateDetail } from "@/data/templates";

type Props = {
  detail: TemplateDetail;
};

const colorMap: Record<string, string> = {
  sunshine: "card-sunshine",
  peach: "card-peach",
  sky: "card-sky",
  mint: "card-mint",
};

export function TemplateDetailFor({ detail }: Props) {
  return (
    <section aria-label="Pour qui" className="bg-cream section-grid border-b-[2.5px] border-ink">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <span className="section-label">Pour qui</span>
          <h2 className="mt-4">
            {detail.forTitle}
            <br />
            <em>les freelances tech</em>.
          </h2>
        </div>
        <div className="grid-3">
          {detail.forItems.map(({ sticker, title, description, color }) => (
            <div key={title} className={`card ${colorMap[color]}`}>
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
