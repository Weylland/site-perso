import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main>
      <h1>Nicolas Samier</h1>
      <p>Développeur fullstack - site en construction.</p>

      <div className="p-8 space-y-4">
        <Button variant="primary">Découvrir mes services</Button>
        <Button variant="secondary">Mes templates</Button>
        <Button variant="dark">Me contacter</Button>
        <Button variant="primary" size="big">
          Big primary
        </Button>
        <Button variant="secondary" size="small">
          Small
        </Button>
      </div>
    </main>
  );
}
