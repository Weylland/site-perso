const groups = [
  {
    title: "Front-end",
    desc: "Frameworks modernes pour des interfaces rapides, accessibles et maintenables.",
    tags: ["Next.js 15", "React 18", "TypeScript", "Tailwind v4", "shadcn/ui", "Framer Motion"],
  },
  {
    title: "Back-end",
    desc: "APIs REST et GraphQL, auth, paiements, intégrations.",
    tags: ["Node.js", "tRPC", "PHP 8", "WordPress", "Prisma", "Postgres"],
  },
  {
    title: "Infrastructure",
    desc: "Déploiement, monitoring, scaling.",
    tags: ["AWS Lambda", "API Gateway", "S3", "DynamoDB", "Vercel", "Cloudflare"],
  },
  {
    title: "Outils & workflow",
    desc: "Automatisation, paiements, emails transactionnels.",
    tags: ["n8n", "Stripe", "Resend", "Figma", "GitHub Actions"],
  },
];

export function AboutStack() {
  return (
    <section
      aria-label="Stack technique"
      className="bg-cream section-dots border-b-[2.5px] border-ink py-24"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16 bg-cream border-[2.5px] border-ink shadow-brutal max-w-[760px] mx-auto p-8">
          <span className="section-label">Stack technique</span>
          <h2 className="mt-4">
            Ce avec quoi
            <br />
            <em>je bosse</em>.
          </h2>
          <p className="mt-5 max-w-[58ch] mx-auto text-[1.1rem] opacity-80">
            Pas de hype pour la hype. Chaque techno a été choisie parce qu&apos;elle résout un
            problème concret sur mes projets clients.
          </p>
        </div>

        <div className="stack-groups">
          {groups.map(({ title, desc, tags }) => (
            <div key={title} className="stack-group">
              <h3>{title}</h3>
              <p style={{ fontSize: "0.95rem", marginBottom: "1rem" }}>{desc}</p>
              <div className="pill-row">
                {tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
