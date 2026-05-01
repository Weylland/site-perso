import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Stats />
      <Services />
      <Process />
    </main>
  );
}
