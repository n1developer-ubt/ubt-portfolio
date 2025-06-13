"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import Image from "next/image"
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react"

if (typeof window !== "undefined") {
   gsap.registerPlugin(TextPlugin)
}

const Hero = () => {
   const heroRef = useRef<HTMLDivElement>(null)
   const textRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      const ctx = gsap.context(() => {
         // Typing animation for the main title
         gsap.to(textRef.current, {
            duration: 2,
            text: "Full Stack Developer",
            ease: "none",
            delay: 1,
         })

         // Floating animation for profile image
         gsap.to(".profile-image", {
            y: -20,
            duration: 3,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
         })

         // Stagger animation for social links
         gsap.fromTo(
            ".social-link",
            {
               opacity: 0,
               scale: 0,
               rotation: 180,
            },
            {
               opacity: 1,
               scale: 1,
               rotation: 0,
               duration: 0.8,
               ease: "back.out(1.7)",
               stagger: 0.2,
               delay: 2.5,
            }
         )

         // Particle animation
         gsap.set(".particle", {
            opacity: 0,
            scale: 0,
         })

         gsap.to(".particle", {
            opacity: 1,
            scale: 1,
            duration: 2,
            ease: "power2.out",
            stagger: {
               amount: 3,
               from: "random",
            },
            delay: 1.5,
         })
      }, heroRef)

      return () => ctx.revert()
   }, [])

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
         },
      },
   }

   const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
         transition: {
            type: "spring",
            stiffness: 100,
         },
      },
   }

   return (
      <div
         ref={heroRef}
         className='relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0'>
         {/* Animated particles */}
         {[...Array(50)].map((_, i) => (
            <div
               key={i}
               className='particle absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full'
               style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
               }}
            />
         ))}

         <motion.div
            className='container mx-auto px-6 text-center relative z-10'
            variants={containerVariants}
            initial='hidden'
            animate='visible'>
            <div className='grid lg:grid-cols-2 gap-12 items-center'>
               {/* Left side - Text content */}
               <motion.div className='space-y-8' variants={itemVariants}>
                  <motion.div
                     className='space-y-4'
                     initial={{ opacity: 0, x: -50 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 1, delay: 0.5 }}>
                     <h1 className='text-6xl lg:text-8xl font-bold'>
                        <span className='block gradient-text'>Usama</span>
                        <span className='block gradient-text-2'>Bin Tariq</span>
                     </h1>

                     <div className='h-16 flex items-center justify-center'>
                        <div
                           ref={textRef}
                           className='text-2xl lg:text-4xl font-light text-gray-300 font-mono'>
                           {/* Text will be animated here */}
                        </div>
                     </div>
                  </motion.div>

                  <motion.p
                     className='text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed'
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 1, delay: 1.5 }}>
                     Software Developer with 7+ years of experience crafting
                     scalable solutions and building exceptional digital
                     experiences with modern technologies.
                  </motion.p>

                  {/* Social Links */}
                  <motion.div
                     className='flex justify-center lg:justify-start space-x-6'
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 1, delay: 2 }}>
                     <a
                        href='https://github.com/n1developer-ubt'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='social-link p-4 glass rounded-full hover:bg-white/10 transition-all duration-300 glow-hover group'>
                        <Github className='w-6 h-6 group-hover:scale-110 transition-transform' />
                     </a>
                     <a
                        href='https://www.linkedin.com/in/usama-bin--tariq/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='social-link p-4 glass rounded-full hover:bg-white/10 transition-all duration-300 glow-hover group'>
                        <Linkedin className='w-6 h-6 group-hover:scale-110 transition-transform' />
                     </a>
                     <a
                        href='mailto:imusamabintariq@gmail.com'
                        className='social-link p-4 glass rounded-full hover:bg-white/10 transition-all duration-300 glow-hover group'>
                        <Mail className='w-6 h-6 group-hover:scale-110 transition-transform' />
                     </a>
                     <a
                        href='https://www.fiverr.com/n1developer'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='social-link p-4 glass rounded-full hover:bg-white/10 transition-all duration-300 glow-hover group'>
                        <ExternalLink className='w-6 h-6 group-hover:scale-110 transition-transform' />
                     </a>
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                     className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 1, delay: 2.5 }}>
                     <motion.a
                        href='#projects'
                        className='px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 glow-hover'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
                        View My Work
                     </motion.a>
                     <motion.a
                        href='#contact'
                        className='px-8 py-4 border border-white/20 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
                        Get In Touch
                     </motion.a>
                  </motion.div>
               </motion.div>

               {/* Right side - Profile image */}
               <motion.div
                  className='relative'
                  variants={itemVariants}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1 }}>
                  <div className='relative w-80 h-80 mx-auto'>
                     {/* Animated rings */}
                     <div
                        className='absolute inset-0 rounded-full border-2 border-purple-500/30 animate-spin'
                        style={{ animationDuration: "20s" }}></div>
                     <div
                        className='absolute inset-4 rounded-full border-2 border-pink-500/30 animate-spin'
                        style={{
                           animationDuration: "15s",
                           animationDirection: "reverse",
                        }}></div>
                     <div
                        className='absolute inset-8 rounded-full border-2 border-blue-500/30 animate-spin'
                        style={{ animationDuration: "10s" }}></div>

                     {/* Profile image */}
                     <div className='profile-image absolute inset-12 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl'>
                        <Image
                           src='/usama-profile.jpg'
                           alt='Usama Bin Tariq'
                           fill
                           className='object-cover'
                           priority
                        />
                     </div>

                     {/* Glow effect */}
                     <div className='absolute inset-12 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-xl'></div>
                  </div>
               </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
               className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 3 }}>
               <motion.div
                  className='flex flex-col items-center space-y-2 text-gray-400'
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}>
                  <span className='text-sm'>Scroll to explore</span>
                  <ArrowDown className='w-5 h-5' />
               </motion.div>
            </motion.div>
         </motion.div>
      </div>
   )
}

export default Hero
