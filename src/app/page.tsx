'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#667eea"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  );
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth scroll animations
      gsap.utils.toArray('.animate-on-scroll').forEach((element) => {
        gsap.fromTo(element as Element, 
          { 
            opacity: 0, 
            y: 100 
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element as Element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Parallax effects
      gsap.utils.toArray('.parallax').forEach((element) => {
        gsap.to(element as Element, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: element as Element,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* 3D Background Sphere */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-20">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen animate-on-scroll">
          <About />
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen animate-on-scroll">
          <Experience />
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen animate-on-scroll">
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen animate-on-scroll">
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen animate-on-scroll">
          <Contact />
        </section>
      </main>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}