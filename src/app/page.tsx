import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { Highlight } from "@/components/ui/Highlight";

export default function Home() {
  return (
    <main className="p-8 space-y-6">
      <h1>
        Je construis des <Highlight>sites</Highlight> et des{" "}
        <Highlight color="peach">applications</Highlight> qui rapportent.
      </h1>
      <p>Développeur fullstack — site en construction.</p>
      <div className="flex gap-2 flex-wrap">
        <Pill>Disponible</Pill>
        <Pill tone="peach">Freelance</Pill>
        <Pill tone="sunshine">Remote France</Pill>
        <Pill tone="mint">Stripe</Pill>
        <Pill tone="sky">n8n</Pill>
      </div>
      <div className="flex gap-3 flex-wrap">
        <Button variant="primary">Découvrir mes services</Button>
        <Button variant="secondary">Mes templates</Button>
        <Button variant="dark">Me contacter</Button>
      </div>
    </main>
  );
}
