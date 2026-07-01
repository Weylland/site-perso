const groups = [
  {
    title: "Front-end",
    desc: "Interfaces rapides, responsive et accessibles.",
    tags: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Leaflet"],
  },
  {
    title: "Back-end & données",
    desc: "APIs, auth, intégrations et bases de données.",
    tags: ["Node.js", "Express", "PHP", "WordPress / WooCommerce", "MySQL", "SQLite", "Supabase"],
  },
  {
    title: "Infrastructure & cloud",
    desc: "Déploiement, fonctions serverless, hébergement.",
    tags: ["AWS Lambda", "API Gateway", "S3", "DynamoDB", "Vercel", "Railway", "Git / GitHub"],
  },
  {
    title: "IA & automatisation",
    desc: "Pipelines LLM, RAG et agents sur mesure.",
    tags: ["Claude API / MCP", "Mistral API", "n8n", "RAG", "Basic Memory"],
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
            Pas une liste pour faire joli : ce sont les outils avec lesquels je travaille vraiment,
            au quotidien.
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
