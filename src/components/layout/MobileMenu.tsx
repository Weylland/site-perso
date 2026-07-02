"use client";

import { useState } from "react";
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

  return (
    <div className="min-[820px]:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOpen((prev) => !prev)}
        className="relative inline-flex flex-col items-center justify-center gap-[5px] w-11 h-11 bg-cream border-[2.5px] border-ink shadow-brutal-sm cursor-pointer"
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

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Navigation mobile"
          className="absolute top-full left-0 w-full bg-cream border-b-[2.5px] border-ink shadow-brutal-lg"
        >
          <ul className="max-w-7xl mx-auto flex flex-col px-8 py-4">
            {links.map(({ href, label }) => (
              <li key={href} className="border-b border-ink/10 last:border-none">
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display font-medium text-[1.05rem]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
