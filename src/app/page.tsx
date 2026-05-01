import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { TemplateFeatured } from "@/components/sections/TemplateFeatured";
import { Testimonial } from "@/components/sections/Testimonial";
import { AboutTeaser } from "@/components/sections/AboutTeaser";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Stats />
      <Services />
      <Process />
      <TemplateFeatured />
      <Testimonial />
      <AboutTeaser />
    </main>
  );
}
