"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

const accentColors = ["sunshine", "peach", "mint", "sky"] as const;

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/cgv", label: "CGV" },
  { href: "/confidentialite", label: "Confidentialité" },
];

const socialLinkClasses =
  "inline-flex items-center px-[0.7rem] py-[0.35rem] bg-transparent text-cream border-[2px] border-cream font-display font-medium text-[0.8rem] transition-transform duration-150 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5";

const emptySubscribe = () => () => {};

function useIsClient() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const isClient = useIsClient();

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="min-[820px]:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label="Ouvrir le menu"
        onClick={() => setOpen(true)}
        className="group inline-flex flex-col items-center justify-center gap-[4px] w-11 h-11 bg-cream border-[2.5px] border-ink shadow-brutal-sm cursor-pointer transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out,background-color_200ms_ease-out] hover:translate-x-1 hover:translate-y-1 hover:shadow-none hover:bg-sunshine"
      >
        <span aria-hidden className="block w-5 h-[2.5px] bg-ink" />
        <span aria-hidden className="block w-5 h-[2.5px] bg-ink" />
        <span aria-hidden className="block w-5 h-[2.5px] bg-ink" />
      </button>

      {isClient &&
        createPortal(
          <nav
            id="mobile-nav"
            aria-label="Navigation mobile"
            inert={!open}
            className={`fixed inset-0 z-[100] overflow-hidden bg-ink border-l-[4px] border-cream flex flex-col transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
          >
            <span
              aria-hidden
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-display font-bold whitespace-nowrap pointer-events-none text-transparent text-[clamp(3.5rem,18vw,7rem)] tracking-[-0.04em]"
              style={{ WebkitTextStroke: "1.5px rgba(254, 250, 243, 0.12)" }}
            >
              NICOLAS SAMIER
            </span>

            <button
              type="button"
              aria-label="Fermer le menu"
              onClick={() => setOpen(false)}
              className="absolute z-10 top-4 right-8 inline-flex items-center justify-center w-11 h-11 bg-ink border-[2.5px] border-cream cursor-pointer transition-transform duration-150 ease-out hover:rotate-90"
            >
              <span aria-hidden className="relative block w-5 h-5">
                <span className="absolute top-1/2 left-0 w-5 h-[2.5px] bg-cream rotate-45" />
                <span className="absolute top-1/2 left-0 w-5 h-[2.5px] bg-cream -rotate-45" />
              </span>
            </button>

            <ul className="relative flex-1 flex flex-col items-center justify-center gap-3">
              {links.map(({ href, label }, i) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    style={{
                      boxShadow: `4px 4px 0 var(--color-${accentColors[i % accentColors.length]})`,
                    }}
                    className="flex items-center justify-center w-[250px] px-6 py-2.5 bg-ink border-[2.5px] border-cream font-display font-semibold text-cream text-[1.35rem] tracking-[-0.02em] transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="relative flex flex-col items-center gap-4 px-8 pb-8">
              <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-sans text-[0.8rem] text-cream/70">
                {legalLinks.map(({ href, label }, i) => (
                  <li key={href} className="flex items-center gap-3">
                    <Link href={href} onClick={() => setOpen(false)} className="hover:text-cream">
                      {label}
                    </Link>
                    {i < legalLinks.length - 1 && <span aria-hidden>·</span>}
                  </li>
                ))}
              </ul>

              <div className="flex gap-2">
                <a
                  href="https://www.linkedin.com/in/samier-nicolas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${socialLinkClasses} shadow-[2px_2px_0_var(--color-peach)] hover:shadow-[3px_3px_0_var(--color-peach)]`}
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Weylland"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${socialLinkClasses} shadow-[2px_2px_0_var(--color-sunshine)] hover:shadow-[3px_3px_0_var(--color-sunshine)]`}
                >
                  GitHub
                </a>
                <a
                  href="/cv-nicolas-samier.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className={`${socialLinkClasses} shadow-[2px_2px_0_var(--color-mint)] hover:shadow-[3px_3px_0_var(--color-mint)]`}
                >
                  CV PDF
                </a>
              </div>
            </div>
          </nav>,
          document.body,
        )}
    </div>
  );
}
