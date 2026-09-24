import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Marquee } from "@/components/Marquee";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Reviews } from "@/components/Reviews";
import { Skills } from "@/components/Skills";

export const dynamic = "force-static";

export default function Page() {
  return (
    <>
      <JsonLd />
      <a
        href="#main"
        className="focus-visible:rounded-pill focus-visible:bg-ink focus-visible:text-ink-inverse sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:top-3 focus-visible:left-3 focus-visible:z-[100] focus-visible:px-5 focus-visible:py-3"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
