"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/contact", label: "Contact" },
];

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
        className="inline-flex flex-col items-center justify-center gap-[5px] w-11 h-11 bg-cream border-[2.5px] border-ink shadow-brutal-sm cursor-pointer"
      >
        <span aria-hidden className="block w-5 h-[2.5px] bg-ink" />
        <span aria-hidden className="block w-5 h-[2.5px] bg-ink" />
      </button>

      {isClient &&
        createPortal(
          <nav
            id="mobile-nav"
            aria-label="Navigation mobile"
            inert={!open}
            className={`fixed inset-0 z-[100] bg-ink border-l-[4px] border-cream flex flex-col items-center justify-center transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
          >
            <button
              type="button"
              aria-label="Fermer le menu"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-8 inline-flex items-center justify-center w-11 h-11 bg-ink border-[2.5px] border-cream cursor-pointer"
            >
              <span aria-hidden className="relative block w-5 h-5">
                <span className="absolute top-1/2 left-0 w-5 h-[2.5px] bg-cream rotate-45" />
                <span className="absolute top-1/2 left-0 w-5 h-[2.5px] bg-cream -rotate-45" />
              </span>
            </button>

            <ul className="flex flex-col items-center">
              {links.map(({ href, label }) => (
                <li
                  key={href}
                  className="border-b-[1.5px] border-dashed border-cream/40 last:border-none"
                >
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 font-display font-semibold text-cream text-[2rem] tracking-[-0.02em] transition-opacity hover:opacity-70"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>,
          document.body,
        )}
    </div>
  );
}
