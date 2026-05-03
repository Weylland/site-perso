import Image from "next/image";
import Link from "next/link";

export function MerciTeaser() {
  return (
    <section aria-label="Template Freelance Dev Hub" className="bg-peach">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="split">
          <div className="flex justify-center items-center">
            <Image
              src="/stickers/notion-mockup.svg"
              alt="Aperçu du template Freelance Dev Hub"
              width={400}
              height={400}
              className="w-full max-w-[400px] h-auto"
              style={{
                filter: "drop-shadow(8px 8px 0 var(--color-ink))",
                transform: "rotate(-3deg)",
              }}
            />
          </div>

          <div>
            <span className="section-label">En attendant</span>
            <h2 className="mt-6">
              Occupe tes <em>20 minutes</em>.
            </h2>
            <p className="mt-6 text-[1.1rem] max-w-[48ch] leading-[1.55]">
              Jette un œil au template <strong>Freelance Dev Hub</strong>. C&apos;est l&apos;espace
              Notion que j&apos;utilise moi-même pour gérer clients, projets, devis et factures. 12
              €, livraison immédiate, mises à jour à vie.
            </p>
            <div className="flex gap-4 flex-wrap mt-8">
              <Link
                href="#"
                className="group inline-flex items-center gap-2 px-6 py-[0.9rem] bg-ink text-cream border-[2.5px] border-ink shadow-brutal font-semibold text-base transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                Voir le template
                <span
                  aria-hidden
                  className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-rotate-12"
                >
                  →
                </span>
              </Link>
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 px-6 py-[0.9rem] bg-cream border-[2.5px] border-ink shadow-brutal font-semibold text-base transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                Ou lire le parcours
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
