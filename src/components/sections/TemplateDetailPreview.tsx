import Image from "next/image";
import type { TemplateDetail } from "@/data/templates";

type Props = {
  detail: TemplateDetail;
};

export function TemplateDetailPreview({ detail }: Props) {
  return (
    <section aria-label="Aperçu" className="bg-sky section-dots border-b-[2.5px] border-ink">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <span className="section-label">Aperçu</span>
          <h2 className="mt-4">
            {detail.previewTitle}
            <br />
            <em>tout relié</em>.
          </h2>
          <p className="mt-4 max-w-[56ch] mx-auto opacity-80">{detail.previewSubtitle}</p>
        </div>
        <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {detail.views.map(({ sticker, title, description }) => (
            <div key={title} className="card card-cream text-center">
              <Image
                src={sticker}
                alt=""
                aria-hidden
                width={200}
                height={200}
                className="mx-auto mb-4"
                style={{
                  width: "100%",
                  maxWidth: "200px",
                  height: "auto",
                  filter: "drop-shadow(4px 4px 0 var(--color-ink))",
                }}
              />
              <h3 className="mt-8">{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
