import Link from "next/link";

const linkClasses =
  "text-cream text-[0.95rem] opacity-80 hover:opacity-100 hover:underline underline-offset-4 transition-opacity duration-150";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream pt-16 px-8 pb-8">
      <span
        className="absolute -bottom-12 left-1/2 -translate-x-1/2 font-display font-bold whitespace-nowrap pointer-events-none text-transparent text-[clamp(6rem,15vw,14rem)] tracking-[-0.04em]"
        style={{ WebkitTextStroke: "1.5px rgba(254, 250, 243, 0.12)" }}
      >
        NICOLAS SAMIER
      </span>

      <div className="relative max-w-7xl mx-auto grid grid-cols-2 min-[900px]:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-3 group hover:underline underline-offset-4"
          >
            <span className="relative inline-flex items-center justify-center w-11 h-11 bg-peach border-[2.5px] border-ink shadow-brutal font-display font-bold text-[1.15rem] overflow-hidden transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out,background-color_200ms_ease-out] group-hover:translate-x-1 group-hover:translate-y-1 group-hover:rotate-[-4deg] group-hover:shadow-none group-hover:bg-sunshine">
              NS
              <span
                aria-hidden
                className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4)_0%,transparent_50%)]"
              ></span>
            </span>
            <span className="font-display font-semibold text-[1.05rem] tracking-[-0.01em]">
              Nicolas Samier
            </span>
          </Link>
          <p className="mt-5 text-[0.95rem] opacity-80 max-w-[32ch]">
            Développeur fullstack freelance, basé dans le Pas-de-Calais, en remote partout en
            France.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-[0.85rem] py-[0.4rem] bg-transparent text-cream border-[2.5px] border-cream font-display font-medium text-[0.9rem] transition-transform duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 shadow-[2px_2px_0_var(--color-peach)] hover:shadow-[4px_4px_0_var(--color-peach)]"
            >
              LinkedIn
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-[0.85rem] py-[0.4rem] bg-transparent text-cream border-[2.5px] border-cream font-display font-medium text-[0.9rem] transition-transform duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 shadow-[2px_2px_0_var(--color-sunshine)] hover:shadow-[4px_4px_0_var(--color-sunshine)]"
            >
              GitHub
            </a>
            <a
              href="#"
              className="inline-flex items-center px-[0.85rem] py-[0.4rem] bg-transparent text-cream border-[2.5px] border-cream font-display font-medium text-[0.9rem] transition-transform duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 shadow-[2px_2px_0_var(--color-mint)] hover:shadow-[4px_4px_0_var(--color-mint)]"
            >
              CV PDF
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-cream text-[0.85rem] mb-4">Navigation</h4>
          <ul className="space-y-[0.6rem]">
            <li>
              <Link href="/services" className={linkClasses}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/a-propos" className={linkClasses}>
                À propos
              </Link>
            </li>
            <li>
              <Link href="/templates" className={linkClasses}>
                Templates
              </Link>
            </li>
            <li>
              <Link href="/contact" className={linkClasses}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-cream text-[0.85rem] mb-4">Légal</h4>
          <ul className="space-y-[0.6rem]">
            <li>
              <Link href="/mentions-legales" className={linkClasses}>
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/cgv" className={linkClasses}>
                CGV
              </Link>
            </li>
            <li>
              <Link href="/confidentialite" className={linkClasses}>
                Confidentialité
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-cream text-[0.85rem] mb-4">Contact</h4>
          <ul className="space-y-[0.6rem]">
            <li>
              <a href="mailto:contact@nicolassamier.fr" className={linkClasses}>
                contact@nicolassamier.fr
              </a>
            </li>
            <li className="text-[0.95rem] opacity-70">Pas-de-Calais · France</li>
            <li className="text-[0.95rem] opacity-70">Remote 100 %</li>
          </ul>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto mt-12 pt-6 border-t border-cream/25 flex flex-wrap justify-between items-center gap-4 text-[0.85rem] opacity-75">
        <span> © 2026 Nicolas Samier · Tous droits réservés </span>
        <span> Fait main avec Next.js — déployé sur Vercel </span>
      </div>
    </footer>
  );
}
