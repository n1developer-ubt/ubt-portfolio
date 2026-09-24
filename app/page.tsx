import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export const dynamic = "force-static";

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:top-3 focus-visible:left-3 focus-visible:z-[100] focus-visible:rounded-pill focus-visible:bg-ink focus-visible:px-5 focus-visible:py-3 focus-visible:text-ink-inverse"
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
      </main>
    </>
  );
}
