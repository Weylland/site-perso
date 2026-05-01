import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Stats } from "@/components/sections/Stats";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Stats />
    </main>
  );
}
