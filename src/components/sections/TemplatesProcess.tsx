import { howItWorksSteps } from "@/data/templates";

export function TemplatesProcess() {
  return (
    <section aria-label="Comment ça marche" className="bg-peach border-b-[2.5px] border-ink">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <span className="section-label">Comment ça marche</span>
          <h2 className="mt-4">
            De l&apos;achat
            <br />à la <em>première tâche</em>.
          </h2>
        </div>
        <div className="steps">
          {howItWorksSteps.map(({ num, title, description }) => (
            <div key={num} className="step">
              <div className="step-num">{num}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
