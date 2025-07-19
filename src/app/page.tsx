import Hero from "../components/Hero"
import About from "../components/About"
import Experience from "../components/Experience"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Navigation from "../components/Navigation"
import ParticleBackground from "../components/ParticleBackground"

export default function HomePage() {
   return (
      <>
         <ParticleBackground />
         <Navigation />
         <main className='relative z-10'>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
         </main>
      </>
   )
}
