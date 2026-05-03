export type TemplateCategory = "Templates Notion" | "Guides PDF" | "Kits & Snippets" | "Gratuits";
export type TemplateStatus = "active" | "soon" | "free";

export type TemplateView = {
  sticker: string;
  title: string;
  description: string;
};

export type TemplateFeatureGroup = {
  emoji: string;
  title: string;
  items: string[];
};

export type TemplateUsecase = {
  sticker: string;
  title: string;
  description: string;
};

export type TemplateFor = {
  sticker: string;
  title: string;
  description: string;
  color: "sunshine" | "peach" | "sky" | "mint";
};

export type TemplateFaqItem = {
  q: string;
  a: string;
};

export type ReviewItem = {
  initials: string;
  name: string;
  date: string;
  rating: number;
  title: string;
  body: string;
  reply?: string;
  helpful: number;
  avatarColor?: string;
};

export type TemplateDetail = {
  eyebrow: string;
  subtitle: string;
  previewTitle: string;
  previewSubtitle: string;
  views: TemplateView[];
  contentTitle: string;
  contentSubtitle: string;
  featureGroups: TemplateFeatureGroup[];
  usecases: TemplateUsecase[];
  forTitle: string;
  forItems: TemplateFor[];
  faq: TemplateFaqItem[];
  reviews: ReviewItem[];
  reviewCount: number;
  reviewAvg: number;
  reviewBars: { stars: number; count: number }[];
};

export type Template = {
  slug: string;
  name: string;
  tagline: string;
  category: TemplateCategory;
  status: TemplateStatus;
  badge?: string;
  badgeBg?: string;
  badgeColor?: string;
  sticker: string;
  cardColor: "sunshine" | "cream" | "sky" | "peach" | "mint";
  version?: string;
  price: number;
  originalPrice?: number;
  rating: number;
  ratingCount: number;
  salesCount: number;
  salesLabel?: string;
  detail?: TemplateDetail;
};

export const templates: Template[] = [
  {
    slug: "freelance-dev-hub",
    name: "Freelance Dev Hub",
    tagline:
      "Espace Notion complet : clients, projets, devis, factures, CRM, bugs tracker, pipeline. 8 databases connectées.",
    category: "Templates Notion",
    status: "active",
    badge: "BEST-SELLER",
    sticker: "/stickers/notion-mockup.svg",
    cardColor: "sunshine",
    version: "v2.1",
    price: 12,
    rating: 4.9,
    ratingCount: 38,
    salesCount: 104,
    detail: {
      eyebrow: "Template Notion · Best-seller",
      subtitle:
        "Un espace Notion complet pour piloter ton activité de freelance tech. Clients, projets, devis, factures, bugs tracker, pipeline commercial — tout relié, tout en français, prêt à l'emploi.",
      previewTitle: "Quatre vues,",
      previewSubtitle:
        "Chaque entité est connectée aux autres : un client contient ses projets, qui contiennent leurs tâches, qui remontent dans le dashboard mensuel.",
      views: [
        {
          sticker: "/stickers/user.svg",
          title: "Vue Clients",
          description:
            "Fiche client complète avec historique, contacts, projets liés, CA cumulé. Filtres par statut (prospect, actif, dormant, perdu).",
        },
        {
          sticker: "/stickers/folder.svg",
          title: "Vue Projets",
          description:
            "Timeline, jalons, livrables, budget consommé, marge. Vue kanban ou calendrier selon ta préférence du moment.",
        },
        {
          sticker: "/stickers/money.svg",
          title: "Vue Devis & Factures",
          description:
            "Du devis envoyé au paiement reçu. Statuts automatiques, relances planifiées, export comptable simplifié.",
        },
        {
          sticker: "/stickers/bug.svg",
          title: "Vue Tâches / Bugs",
          description:
            "Backlog organisé par projet et priorité. Sprints hebdo, bugs tracker dédié, checklist de livraison.",
        },
      ],
      contentTitle: "Huit databases,",
      contentSubtitle:
        "Tout ce qu'il te faut pour gérer une activité de freelance tech, sans devoir assembler cinq templates différents.",
      featureGroups: [
        {
          emoji: "🗂️",
          title: "Databases",
          items: [
            "Clients — fiche complète avec relations croisées",
            "Projets — timeline, budget, jalons",
            "Tâches — backlog structuré par projet",
            "Devis — numérotation auto, statuts, totaux",
            "Factures — suivi paiement, export compta",
            "Bugs — tracker dédié, priorités, reproduction",
            "Idées — backlog personnel, templates futurs",
            "Contacts — carnet d'adresses pro",
          ],
        },
        {
          emoji: "👁️",
          title: "Vues prêtes",
          items: [
            "Dashboard semaine — charge, deadlines, alertes",
            "Planning mensuel — projets en cours, jalons à venir",
            "Pipeline commercial — du prospect au client actif",
            "Suivi facturation — impayés, relances, CA mensuel",
            "Vue CA annuel — graphique mois par mois",
            "TJM calculator — prix plancher et prix cible",
          ],
        },
        {
          emoji: "📄",
          title: "Templates internes",
          items: [
            "Template projet type (brief, livrables, rétro)",
            "Template devis (clauses, conditions, signature)",
            "Template brief client (questions à poser en kickoff)",
            "Template post-mortem (ce qui a marché, raté)",
            "Template proposition commerciale",
          ],
        },
        {
          emoji: "⚙️",
          title: "Automatisations Notion",
          items: [
            "Statuts auto (devis envoyé → en attente → signé)",
            "Formules de totaux (HT, TVA, TTC, marge)",
            "Relations croisées (tâche ↔ projet ↔ client)",
            "Rollups de CA (par client, par mois, par année)",
            "Rappels de relance facture à J+15 et J+30",
          ],
        },
      ],
      usecases: [
        {
          sticker: "/stickers/rocket.svg",
          title: "Nouveau client",
          description:
            "De la prise de brief au devis signé sans changer d'outil. Fiche client créée, projet rattaché, devis généré depuis un template.",
        },
        {
          sticker: "/stickers/chart.svg",
          title: "Gestion de projet",
          description:
            "Tâches, deadlines, bugs — tout relié à la fiche client. Point hebdo piloté depuis le dashboard. Rétro livrée avec les bons chiffres.",
        },
        {
          sticker: "/stickers/money.svg",
          title: "Facturation",
          description:
            "Devis validé → facture générée → paiement suivi, sans ressaisie. Vue mensuelle des impayés, relances automatiques, export compta.",
        },
      ],
      forTitle: "Pensé pour",
      forItems: [
        {
          sticker: "/stickers/laptop.svg",
          title: "Devs freelance solos",
          description:
            "Celles et ceux qui jonglent avec 3 à 10 clients en parallèle et qui en ont marre de coller des post-it dans Notion sans méthode.",
          color: "sunshine",
        },
        {
          sticker: "/stickers/wrench.svg",
          title: "Freelances tech généralistes",
          description:
            "Designers, PM, ops, data freelances qui veulent un système prêt à l'emploi pensé pour un workflow projet carré.",
          color: "peach",
        },
        {
          sticker: "/stickers/star.svg",
          title: "Début d'activité",
          description:
            "Si tu démarres ton activité freelance, ça te donne une base pro sans partir de zéro. Six mois de bricolage gagnés d'un coup.",
          color: "sky",
        },
      ],
      faq: [
        {
          q: "Notion gratuit suffit ?",
          a: "Oui, pas besoin de plan payant. Tout fonctionne sur la version gratuite de Notion, y compris les automatisations et les formules.",
        },
        {
          q: "Comment je le reçois ?",
          a: "Par email, dans les 60 secondes qui suivent le paiement, sous forme de lien de duplication Notion.",
        },
        {
          q: "Mises à jour incluses ?",
          a: "Oui, à vie. Chaque version majeure est envoyée par email avec un lien mis à jour. Gratuit, automatique.",
        },
        {
          q: "Remboursement possible ?",
          a: "Oui, 14 jours sans aucune justification (conformité UE). Tu demandes par email, je rembourse sous 48 h.",
        },
        {
          q: "Support ?",
          a: "Email direct. Réponse sous 48 h ouvrées. Je gère moi-même, pas d'intermédiaire, pas de chatbot.",
        },
        {
          q: "Je peux personnaliser ?",
          a: "Oui, complètement. Une fois dupliqué dans ton espace, tout t'appartient — tu ajoutes, supprimes, renommes ce que tu veux.",
        },
        {
          q: "TVA / facturation ?",
          a: "Je suis en franchise de TVA (auto-entrepreneur), donc prix affiché = prix payé. Tu reçois une facture nominative.",
        },
      ],
      reviews: [
        {
          initials: "AM",
          name: "Alex Martin",
          date: "24 avril 2026",
          rating: 5,
          title: "Le template que j'attendais depuis 3 ans",
          body: "Tout est connecté, plus besoin de jongler entre 4 outils. Les bonus PDF + Sheets sont la cerise sur le gâteau. Si t'es freelance dev, tu fonces.",
          reply: "Merci Alex ! Je note l'idée du statut «à relancer» pour la v2.2.",
          helpful: 12,
        },
        {
          initials: "TB",
          name: "Thomas Bernard",
          date: "23 avril 2026",
          rating: 5,
          title: "Soigné, et bien documenté",
          body: "Je m'attendais à un Notion classique, c'est beaucoup plus complet que ça. Le guide PDF aide à démarrer en 15 minutes.",
          helpful: 7,
          avatarColor: "var(--color-sky)",
        },
        {
          initials: "CL",
          name: "Camille Lefèvre",
          date: "19 avril 2026",
          rating: 5,
          title: "Pile ce qu'il faut, ni trop ni pas assez",
          body: "J'avais peur d'un template « usine à gaz » — au contraire, c'est carré, lisible, et la TJM calculator est un cadeau en plus.",
          helpful: 9,
          avatarColor: "var(--color-peach)",
        },
        {
          initials: "RJ",
          name: "Romain Jacquet",
          date: "12 avril 2026",
          rating: 4,
          title: "Très bon, petit manque sur la partie facturation récurrente",
          body: "L'ensemble est propre. J'aurais aimé un module « abonnements » pour mes clients en TMA mensuel. Sinon rien à dire, je recommande.",
          reply: "Bien noté Romain — module « récurrents » prévu en v2.3.",
          helpful: 5,
          avatarColor: "var(--color-mint)",
        },
        {
          initials: "PG",
          name: "Pierre Gauthier",
          date: "8 avril 2026",
          rating: 5,
          title: "Adopté en 20 minutes",
          body: "Honnêtement c'est ce que je cherchais depuis 2 ans. Je l'ai installé, customisé en 20 min, et déjà 4 prospects rentrés dedans.",
          helpful: 3,
          avatarColor: "var(--color-sunshine)",
        },
        {
          initials: "NS",
          name: "Nora Saidi",
          date: "2 avril 2026",
          rating: 5,
          title: "Support au top en plus du template",
          body: "J'avais une question sur les rollups — réponse en 4h, claire. Le produit est bien, le suivi humain qui va avec, encore mieux.",
          helpful: 6,
        },
      ],
      reviewCount: 38,
      reviewAvg: 4.9,
      reviewBars: [
        { stars: 5, count: 35 },
        { stars: 4, count: 3 },
        { stars: 3, count: 0 },
        { stars: 2, count: 0 },
        { stars: 1, count: 0 },
      ],
    },
  },
  {
    slug: "guide-tjm",
    name: "Guide TJM Freelance Dev",
    tagline:
      "Comment fixer, défendre et augmenter ton TJM en 2026. Méthode chiffrée, exemples réels, simulateur Excel.",
    category: "Guides PDF",
    status: "active",
    badge: "PDF",
    badgeBg: "var(--color-mint)",
    sticker: "/stickers/document.svg",
    cardColor: "cream",
    version: "42 pages",
    price: 9,
    rating: 4.8,
    ratingCount: 24,
    salesCount: 62,
  },
  {
    slug: "snippets-nextjs",
    name: "Snippets Next.js Pro",
    tagline:
      "54 snippets pour démarrer un projet Next 15 en 2 minutes : routes, layouts, server actions, middleware, tests.",
    category: "Kits & Snippets",
    status: "active",
    badge: "PACK CODE",
    badgeBg: "var(--color-peach)",
    sticker: "/stickers/wrench.svg",
    cardColor: "sky",
    version: "TypeScript",
    price: 15,
    rating: 4.7,
    ratingCount: 12,
    salesCount: 31,
  },
  {
    slug: "kit-onboarding",
    name: "Kit Onboarding Client",
    tagline:
      "6 templates d'emails (devis, kick-off, livraison, relance, fin de mission) + checklist d'onboarding 12 étapes.",
    category: "Kits & Snippets",
    status: "active",
    badge: "−30 %",
    badgeBg: "var(--color-ink)",
    badgeColor: "var(--color-cream)",
    sticker: "/stickers/envelope.svg",
    cardColor: "peach",
    version: "Kit emails + checklist",
    price: 7,
    originalPrice: 10,
    rating: 5.0,
    ratingCount: 8,
    salesCount: 18,
  },
  {
    slug: "bug-free-deploy",
    name: "Bug-free Deploy",
    tagline:
      "23 points à vérifier avant chaque déploiement prod. Reçu par email contre inscription newsletter.",
    category: "Gratuits",
    status: "free",
    badge: "GRATUIT",
    badgeBg: "var(--color-mint)",
    sticker: "/stickers/rocket.svg",
    cardColor: "mint",
    version: "Checklist PDF · 1 page",
    price: 0,
    rating: 4.9,
    ratingCount: 16,
    salesCount: 412,
    salesLabel: "téléch.",
  },
  {
    slug: "finance-tracker",
    name: "Finance Tracker Indé",
    tagline:
      "Compta simplifiée pour auto-entrepreneurs : factures, charges, TVA, bilan mensuel, simulateur de TJM optimal.",
    category: "Templates Notion",
    status: "soon",
    badge: "BIENTÔT",
    badgeBg: "var(--color-sunshine)",
    sticker: "/stickers/money.svg",
    cardColor: "peach",
    version: "été 2026",
    price: 14,
    rating: 0,
    ratingCount: 0,
    salesCount: 142,
    salesLabel: "en attente",
  },
  {
    slug: "launch-kit-mvp",
    name: "Launch Kit MVP",
    tagline:
      "Checklist complète de lancement SaaS : landing, beta, pricing, onboarding, tracking. Pour ne rien oublier.",
    category: "Templates Notion",
    status: "soon",
    badge: "BIENTÔT",
    badgeBg: "var(--color-sunshine)",
    sticker: "/stickers/folder.svg",
    cardColor: "sky",
    version: "automne 2026",
    price: 18,
    rating: 0,
    ratingCount: 0,
    salesCount: 86,
    salesLabel: "en attente",
  },
];

export const whyItems = [
  {
    sticker: "/stickers/wrench.svg",
    color: "sunshine" as const,
    title: "Fait par un dev",
    description:
      "Pensé pour les workflows techniques : bug tracking propre, briefs clients détaillés, gestion des devis avec jalons de dev, calculator de TJM. Pas de fioritures marketing.",
  },
  {
    sticker: "/stickers/document.svg",
    color: "peach" as const,
    title: "En français, vraiment",
    description:
      "Pas de traduction automatique approximative. Tout est rédigé en français : les titres, les formules, les statuts, les exemples. Adapté aux particularités fiscales françaises.",
  },
  {
    sticker: "/stickers/envelope.svg",
    color: "sky" as const,
    title: "Support direct",
    description:
      "Une question ? Un bug ? Je réponds moi-même par email sous 48 h ouvrées. Pas de chatbot, pas de ticket system impersonnel. Tu parles au créateur du template.",
  },
];

export const howItWorksSteps = [
  {
    num: "01",
    title: "Achat",
    description:
      "Paiement sécurisé via Stripe. Carte, Apple Pay, Google Pay. Transaction en 30 secondes, reçu envoyé par email automatiquement.",
  },
  {
    num: "02",
    title: "Livraison",
    description:
      "Tu reçois un lien Notion « Duplicate » dans les 60 secondes. Un clic et le template atterrit dans ton espace Notion, prêt à être customisé.",
  },
  {
    num: "03",
    title: "Prise en main",
    description:
      "Un guide PDF de 8 pages t'explique chaque database, chaque vue, chaque formule. 20 minutes et tu maîtrises le système.",
  },
  {
    num: "04",
    title: "Mises à jour",
    description:
      "Chaque update majeure t'est notifiée par email avec un lien pour mettre à jour ta copie. Gratuit, à vie, sans démarche de ta part.",
  },
];

export const shopFaqItems = [
  {
    q: "Remboursement possible ?",
    a: "Oui, 14 jours, sans justification (conformité UE). Tu demandes par email, je rembourse sous 48 h.",
  },
  {
    q: "Mises à jour incluses ?",
    a: "Oui, à vie. Chaque nouvelle version est envoyée par email avec un lien de duplication mis à jour.",
  },
  {
    q: "Support ?",
    a: "Email direct. Réponse sous 48 h ouvrées. Je gère moi-même, pas d'intermédiaire.",
  },
  {
    q: "Compatible Notion Free ?",
    a: "Oui, tous mes templates fonctionnent sur la version gratuite de Notion. Pas besoin de plan payant.",
  },
  {
    q: "Du sur-mesure ?",
    a: "Oui, je conçois des systèmes Notion sur mesure pour des activités freelance ou petites boîtes. Tarif à partir de 600 €. Contacte-moi pour un devis.",
  },
];
