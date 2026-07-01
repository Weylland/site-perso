import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { ProjectsFeatured } from "@/components/sections/ProjectsFeatured";
import { Testimonial } from "@/components/sections/Testimonial";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { Faq } from "@/components/sections/Faq";
import { CtaFinal } from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Stats />
      <Services />
      <Process />
      <ProjectsFeatured />
      <Testimonial />
      <AboutTeaser />
      <Faq />
      <CtaFinal />
    </main>
  );
}
