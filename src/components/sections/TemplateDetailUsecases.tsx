import Image from "next/image";
import type { TemplateDetail } from "@/data/templates";

type Props = {
  detail: TemplateDetail;
};

export function TemplateDetailUsecases({ detail }: Props) {
  return (
    <section aria-label="Cas d'usage" className="bg-mint border-b-[2.5px] border-ink">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <span className="section-label">Comment on s&apos;en sert</span>
          <h2 className="mt-4">
            Trois scénarios,
            <br />
            <em>un seul outil</em>.
          </h2>
        </div>
        <div className="grid-3">
          {detail.usecases.map(({ sticker, title, description }) => (
            <div key={title} className="card card-cream">
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
