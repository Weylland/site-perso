"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/contact", label: "Contact" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

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
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOpen((prev) => !prev)}
        className="relative z-[110] inline-flex flex-col items-center justify-center gap-[5px] w-11 h-11 bg-cream border-[2.5px] border-ink shadow-brutal-sm cursor-pointer"
      >
        <span
          aria-hidden
          className={`block w-5 h-[2.5px] bg-ink transition-transform duration-200 ease-out ${open ? "translate-y-[3.75px] rotate-45" : ""}`}
        />
        <span
          aria-hidden
          className={`block w-5 h-[2.5px] bg-ink transition-transform duration-200 ease-out ${open ? "-translate-y-[3.75px] -rotate-45" : ""}`}
        />
      </button>

      {open &&
        createPortal(
          <nav
            id="mobile-nav"
            aria-label="Navigation mobile"
            className="fixed inset-0 z-[100] bg-ink flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col items-center gap-2">
              {links.map(({ href, label }) => (
                <li key={href}>
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
