"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { templates, type Template, type TemplateCategory } from "@/data/templates";

type FilterKey = "Tous" | TemplateCategory;

const FILTERS: { label: FilterKey; count: number }[] = [
  { label: "Tous", count: templates.length },
  {
    label: "Templates Notion",
    count: templates.filter((t) => t.category === "Templates Notion").length,
  },
  { label: "Guides PDF", count: templates.filter((t) => t.category === "Guides PDF").length },
  {
    label: "Kits & Snippets",
    count: templates.filter((t) => t.category === "Kits & Snippets").length,
  },
  { label: "Gratuits", count: templates.filter((t) => t.status === "free").length },
];

function StarRow({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <span className="star-row text-[0.95rem]" aria-label={`${rating} sur ${max}`}>
      {Array.from({ length: max }, (_, i) => (
        <span key={i} style={{ opacity: i < Math.round(rating) ? 1 : 0.25 }}>
          ★
        </span>
      ))}
    </span>
  );
}

const cardColorMap: Record<Template["cardColor"], string> = {
  sunshine: "card-sunshine",
  cream: "",
  sky: "card-sky",
  peach: "card-peach",
  mint: "card-mint",
};

function ShopCard({ t }: { t: Template }) {
  const isSoon = t.status === "soon";
  const isFree = t.status === "free";

  const inner = (
    <>
      {t.badge && (
        <span
          className="card-tag"
          style={{
            background: t.badgeBg ?? "var(--color-cream)",
            color: t.badgeColor ?? "var(--color-ink)",
          }}
        >
          {t.badge}
        </span>
      )}
      <div className="shop-card-img">
        <Image
          src={t.sticker}
          alt=""
          aria-hidden
          width={130}
          height={130}
          style={{ opacity: isSoon ? 0.55 : 1 }}
        />
      </div>
      <span className="shop-card-cat">
        {t.category} {t.version ? `· ${t.version}` : ""}
      </span>
      <h3 className="text-[1.25rem] font-display font-semibold mb-2">{t.name}</h3>
      <p className="text-[0.92rem] leading-[1.5] mb-4 grow">{t.tagline}</p>

      {isSoon ? (
        <div className="shop-card-meta">
          <span className="opacity-70 text-[0.82rem]">⏳ {t.salesCount} personnes en attente</span>
        </div>
      ) : (
        <div className="shop-card-meta">
          <StarRow rating={t.rating} />
          <span className="opacity-75 text-[0.82rem]">
            {t.rating} ({t.ratingCount}) · {t.salesCount} {t.salesLabel ?? "ventes"}
          </span>
        </div>
      )}

      <div className="shop-card-foot">
        {isSoon ? (
          <>
            <span className="card-price" style={{ opacity: 0.6 }}>
              ~ {t.price} €
            </span>
            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 bg-cream border-[2.5px] border-ink shadow-brutal-sm font-sans font-semibold text-sm transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out] hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-pointer"
              onClick={(e) => e.preventDefault()}
            >
              Me prévenir ✉
            </button>
          </>
        ) : (
          <>
            <span className="card-price">
              {t.originalPrice && (
                <s className="opacity-50 text-[0.85rem] mr-1">{t.originalPrice} €</s>
              )}
              {t.price === 0 ? "0 €" : `${t.price} €`}
            </span>
            {isFree ? (
              <button
                type="button"
                className="inline-flex items-center gap-2 px-4 py-2 bg-sunshine border-[2.5px] border-ink shadow-brutal-sm font-sans font-semibold text-sm whitespace-nowrap transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out] hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-pointer"
                onClick={(e) => e.stopPropagation()}
              >
                Récupérer ✉
              </button>
            ) : (
              <button
                type="button"
                className="inline-flex items-center gap-2 px-4 py-2 bg-sunshine border-[2.5px] border-ink shadow-brutal-sm font-sans font-semibold text-sm whitespace-nowrap transition-[transform_150ms_ease-out,box-shadow_150ms_ease-out] hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                Ajouter au panier
              </button>
            )}
          </>
        )}
      </div>
    </>
  );

  const classes = `card shop-card ${cardColorMap[t.cardColor]} flex flex-col relative ${
    isSoon
      ? "shop-card-soon border-dashed! opacity-85 hover:![transform:none] hover:![box-shadow:var(--shadow-brutal)]"
      : ""
  }`;

  if (isSoon || isFree) {
    return <div className={classes}>{inner}</div>;
  }

  return (
    <Link href={`/templates/${t.slug}`} className={classes}>
      {inner}
    </Link>
  );
}

export function TemplatesShop() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("Tous");

  const filtered =
    activeFilter === "Tous"
      ? templates
      : activeFilter === "Gratuits"
        ? templates.filter((t) => t.status === "free")
        : templates.filter((t) => t.category === activeFilter);

  return (
    <section aria-label="Boutique" id="boutique" className="bg-mint border-b-[2.5px] border-ink">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <span className="section-label">La boutique</span>
          <h2 className="mt-4">
            Des outils <em>qui font le job</em>.
          </h2>
          <p className="mt-4 opacity-80">
            {templates.filter((t) => t.status === "active" || t.status === "free").length} produits
            dispos · {templates.filter((t) => t.status === "soon").length} templates en préparation
            · 1 ressource gratuite. Tout en français.
          </p>
        </div>

        <div className="shop-toolbar">
          <div className="shop-filters">
            {FILTERS.map(({ label, count }) => (
              <button
                key={label}
                type="button"
                className={`shop-chip${activeFilter === label ? " shop-chip-active" : ""}`}
                onClick={() => setActiveFilter(label)}
              >
                {label} <span>{count}</span>
              </button>
            ))}
          </div>
          <div className="flex gap-3 items-center flex-wrap">
            <div className="shop-search">
              <span aria-hidden>⌕</span>
              <input type="search" placeholder="Rechercher un produit…" />
            </div>
            <select className="shop-sort">
              <option>Trier : Plus récents</option>
              <option>Plus vendus</option>
              <option>Prix croissant</option>
              <option>Prix décroissant</option>
            </select>
          </div>
        </div>

        <p className="shop-results">
          {filtered.length} produit{filtered.length > 1 ? "s" : ""} · affichage grille
        </p>

        <div className="card-grid">
          {filtered.map((t) => (
            <ShopCard key={t.slug} t={t} />
          ))}
        </div>

        <div className="shop-pager">
          <span>
            {filtered.length} produit{filtered.length > 1 ? "s" : ""} affiché
            {filtered.length > 1 ? "s" : ""} sur {filtered.length}
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              disabled
              className="inline-flex items-center gap-2 px-4 py-2 bg-cream border-[2.5px] border-ink shadow-brutal-sm font-sans font-semibold text-sm opacity-40 cursor-not-allowed"
            >
              ← Précédent
            </button>
            <button
              type="button"
              disabled
              className="inline-flex items-center gap-2 px-4 py-2 bg-cream border-[2.5px] border-ink shadow-brutal-sm font-sans font-semibold text-sm opacity-40 cursor-not-allowed"
            >
              Suivant →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
