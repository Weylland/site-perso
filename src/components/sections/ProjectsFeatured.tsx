import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function ProjectsFeatured() {
  return (
    <section
      aria-label="Projets et réalisations"
      className="bg-cream border-b-[2.5px] border-ink py-24"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16 bg-cream border-[2.5px] border-ink shadow-brutal max-w-[760px] mx-auto p-8">
          <span className="section-label">Réalisations</span>
          <h2>
            Du concret,
            <br />
            <em>en ligne</em>.
          </h2>
          <p className="mt-5 max-w-[58ch] mx-auto text-[1.1rem] opacity-80">
            Des projets que je conçois et fais tourner moi-même — pipelines IA, temps réel
            multijoueur, sites clients. Le code et les choix techniques sont à moi.
          </p>
        </div>

        <div className="card-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <p className="text-center mt-12">
          <Link
            href="/realisations"
            className="inline-flex items-center font-display font-semibold border-[2.5px] border-ink shadow-brutal bg-cream text-ink transition-[transform,box-shadow] duration-[220ms] ease-out hover:[transform:translate(4px,4px)] hover:[box-shadow:0_0_0_var(--color-ink)] px-6 py-[0.9rem] text-base"
          >
            Toutes les réalisations
          </Link>
        </p>
      </div>
    </section>
  );
}
