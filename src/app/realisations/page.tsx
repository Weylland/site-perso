import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { CtaFinal } from "@/components/sections/CtaFinal";

export const metadata: Metadata = {
  title: "Réalisations — Nicolas Samier, développeur fullstack",
  description:
    "Projets et sites réalisés par Nicolas Samier : watch·ia (média de veille IA), RivalRush (multijoueur temps réel), le site du CGR, et plus. Stack Next.js, Node, IA.",
};

export default function RealisationsPage() {
  return (
    <main>
      <section
        aria-label="Réalisations"
        className="relative overflow-hidden bg-cream border-b-[2.5px] border-ink"
      >
        <div className="max-w-7xl mx-auto px-8 py-24 text-center">
          <Image
            src="/stickers/folder.svg"
            alt=""
            aria-hidden
            width={110}
            height={110}
            className="block mx-auto mb-6 animate-[float_5s_ease-in-out_infinite]"
            style={{ filter: "drop-shadow(6px 6px 0 var(--color-ink))" }}
          />
          <span className="eyebrow">Projets &amp; sites livrés</span>
          <h1 className="mt-6">
            Ce que j&apos;ai <span className="highlight-sunshine">construit</span>.
          </h1>
          <p className="mt-6 text-[1.15rem] opacity-80 max-w-[56ch] mx-auto leading-relaxed">
            Des projets perso que je fais tourner en prod et des sites clients. À chaque fois&nbsp;:
            conception, code et choix techniques de bout en bout.
          </p>
        </div>
      </section>

      <section
        aria-label="Liste des réalisations"
        className="section-dots border-b-[2.5px] border-ink py-24"
      >
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-[1.75rem]">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} detailed />
            ))}
          </div>

          <div className="mt-12 bg-cream border-[2.5px] border-ink shadow-brutal max-w-[760px] mx-auto p-8 text-center">
            <h2 className="text-[1.5rem]">Un projet en tête&nbsp;?</h2>
            <p className="mt-4 max-w-[52ch] mx-auto opacity-80">
              Que ce soit un site, une app, une automatisation ou un pipeline IA — décris-moi
              l&apos;idée, je te dis franchement si et comment je peux la concrétiser.
            </p>
            <p className="mt-6">
              <a href="/contact" className="link-cta">
                Me parler du projet
              </a>
            </p>
          </div>
        </div>
      </section>

      <CtaFinal />
    </main>
  );
}
