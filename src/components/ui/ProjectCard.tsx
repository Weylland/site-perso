import Image from "next/image";
import type { Project } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";

const accentClass: Record<Project["accent"], string> = {
  sunshine: "card-sunshine",
  peach: "card-peach",
  mint: "card-mint",
  sky: "card-sky",
};

type Props = {
  project: Project;
  detailed?: boolean;
  index?: number;
};

export function ProjectCard({ project, detailed = false, index = 0 }: Props) {
  const { name, tagline, description, category, year, url, tech, sticker, image, accent } = project;

  return (
    <Reveal delay={index * 80}>
      <article className={`card ${accentClass[accent]}`}>
        <span className="card-tag">{category}</span>
        {image ? (
          <div className="mb-5 border-[2.5px] border-ink overflow-hidden">
            <Image
              src={image}
              alt={`Aperçu de ${name}`}
              width={640}
              height={400}
              className="block w-full h-auto"
            />
          </div>
        ) : (
          <div className="mb-5 flex aspect-[16/10] flex-col items-center justify-center gap-2 border-[2.5px] border-ink bg-cream">
            <Image src={sticker} alt="" aria-hidden width={56} height={56} />
            <span className="font-display text-[0.7rem] uppercase tracking-[0.12em] opacity-55">
              Aperçu à venir
            </span>
          </div>
        )}
        <h3>{name}</h3>
        <p className="mt-3 text-[0.98rem] leading-relaxed">{detailed ? description : tagline}</p>

        {tech.length > 0 && (
          <div className="pill-row mt-5">
            {tech.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        )}

        <p className="mt-6 flex items-center gap-4 text-[0.85rem]">
          {url ? (
            <a href={url} target="_blank" rel="noopener noreferrer" className="link-cta">
              Voir le site
            </a>
          ) : (
            <span className="font-display font-semibold opacity-70">{year}</span>
          )}
        </p>
      </article>
    </Reveal>
  );
}
