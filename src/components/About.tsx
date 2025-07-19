"use client"

import { useEffect, useRef, useMemo } from "react"
import { motion, useInView } from "framer-motion"
import { gsap } from "gsap"
import { Code, Zap, Users, Award } from "lucide-react"
import { useTranslations } from "next-intl"

const About = () => {
   const sectionRef = useRef<HTMLDivElement>(null)
   const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
   const t = useTranslations("about")

   const stats = useMemo(
      () => [
         {
            icon: Code,
            label: t("stats.yearsExperience"),
            value: "7+",
            color: "from-purple-500 to-pink-500",
         },
         {
            icon: Zap,
            label: t("stats.projectsCompleted"),
            value: "300+",
            color: "from-blue-500 to-cyan-500",
         },
         {
            icon: Users,
            label: t("stats.happyClients"),
            value: "150+",
            color: "from-green-500 to-emerald-500",
         },
         {
            icon: Award,
            label: t("stats.technologies"),
            value: "20+",
            color: "from-orange-500 to-red-500",
         },
      ],
      [t]
   )

   useEffect(() => {
      if (isInView) {
         const ctx = gsap.context(() => {
            // Animate stats counters
            stats.forEach((stat, index) => {
               const target = parseInt(stat.value.replace("+", ""))
               gsap.fromTo(
                  `.stat-${index}`,
                  { textContent: 0 },
                  {
                     textContent: target,
                     duration: 2,
                     ease: "power2.out",
                     snap: { textContent: 1 },
                     delay: index * 0.2,
                  }
               )
            })

            // Animate skill bars
            gsap.fromTo(
               ".skill-bar",
               { scaleX: 0 },
               {
                  scaleX: 1,
                  duration: 1.5,
                  ease: "power3.out",
                  stagger: 0.2,
                  delay: 0.5,
               }
            )
         }, sectionRef)

         return () => ctx.revert()
      }
   }, [isInView, stats])

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
      hidden: { y: 50, opacity: 0 },
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
      <div ref={sectionRef} className='min-h-screen flex items-center py-20'>
         <div className='container mx-auto px-6'>
            <motion.div
               variants={containerVariants}
               initial='hidden'
               animate={isInView ? "visible" : "hidden"}
               className='grid lg:grid-cols-2 gap-16 items-center'>
               {/* Left side - Content */}
               <motion.div variants={itemVariants} className='space-y-8'>
                  <div className='space-y-4'>
                     <motion.h2
                        className='text-5xl lg:text-6xl font-bold gradient-text'
                        variants={itemVariants}>
                        {t("title")}
                     </motion.h2>
                     <motion.div
                        className='w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500'
                        variants={itemVariants}
                     />
                  </div>

                  <motion.div
                     variants={itemVariants}
                     className='space-y-6 text-gray-300 text-lg leading-relaxed'>
                     <p>
                        {t.rich("paragraph1", {
                           roleHighlight: (chunks) => (
                              <span className='gradient-text-2 font-semibold'>
                                 {chunks}
                              </span>
                           ),
                        })}
                     </p>

                     <p>
                        {t.rich("paragraph2", {
                           aiHighlight: (chunks) => (
                              <span className='text-blue-400 font-semibold'>
                                 {chunks}
                              </span>
                           ),
                           techHighlight: (chunks) => (
                              <span className='text-blue-400 font-semibold'>
                                 {" "}
                                 {chunks}
                              </span>
                           ),
                        })}
                     </p>

                     <p>
                        {t.rich("paragraph3", {
                           projectsHighlight: (chunks) => (
                              <span className='gradient-text-2 font-semibold'>
                                 {chunks}
                              </span>
                           ),
                        })}
                     </p>
                  </motion.div>

                  {/* Skills Progress */}
                  <motion.div variants={itemVariants} className='space-y-4'>
                     <h3 className='text-2xl font-semibold text-white mb-6'>
                        {t("coreTechnologies")}
                     </h3>

                     {(
                        t.raw("skillItems") as Array<{
                           name: string
                           level: number
                        }>
                     ).map((skill, index) => (
                        <div key={skill.name} className='space-y-2'>
                           <div className='flex justify-between text-sm'>
                              <span className='text-gray-300'>
                                 {skill.name}
                              </span>
                              <span className='text-gray-400'>
                                 {skill.level}%
                              </span>
                           </div>
                           <div className='h-2 bg-gray-800 rounded-full overflow-hidden'>
                              <motion.div
                                 className='skill-bar h-full bg-gradient-to-r from-purple-500 to-pink-500 origin-left'
                                 style={{ width: `${skill.level}%` }}
                                 initial={{ scaleX: 0 }}
                                 animate={
                                    isInView ? { scaleX: 1 } : { scaleX: 0 }
                                 }
                                 transition={{
                                    duration: 1.5,
                                    delay: index * 0.2,
                                 }}
                              />
                           </div>
                        </div>
                     ))}
                  </motion.div>
               </motion.div>

               {/* Right side - Stats */}
               <motion.div variants={itemVariants} className='space-y-8'>
                  <div className='grid grid-cols-2 gap-6'>
                     {stats.map((stat, index) => (
                        <motion.div
                           key={stat.label}
                           variants={itemVariants}
                           className='glass p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-300'
                           whileHover={{ y: -10 }}>
                           <div
                              className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <stat.icon className='w-8 h-8 text-white' />
                           </div>
                           <div
                              className={`stat-${index} text-3xl font-bold text-white mb-2`}>
                              0
                           </div>
                           <div className='text-gray-400 text-sm'>
                              {stat.label}
                           </div>
                        </motion.div>
                     ))}
                  </div>

                  {/* Education */}
                  <motion.div variants={itemVariants} className='space-y-6'>
                     <h3 className='text-2xl font-semibold text-white'>
                        {t("education")}
                     </h3>

                     <div className='space-y-4'>
                        {(
                           t.raw("educationItems") as Array<{
                              year: string
                              title: string
                              institution: string
                              status: string
                           }>
                        ).map((item, index) => (
                           <motion.div
                              key={index}
                              className='flex items-center space-x-4 group'
                              initial={{ opacity: 0, x: 50 }}
                              animate={
                                 isInView
                                    ? { opacity: 1, x: 0 }
                                    : { opacity: 0, x: 50 }
                              }
                              transition={{
                                 duration: 0.6,
                                 delay: index * 0.1,
                              }}>
                              <div className='w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:scale-125 transition-transform duration-300' />
                              <div className='flex-1'>
                                 <div className='text-white font-semibold'>
                                    {item.title}
                                 </div>
                                 <div className='text-gray-400 text-sm'>
                                    {item.institution} • {item.year}
                                 </div>
                                 <div className='text-blue-400 text-xs'>
                                    {item.status}
                                 </div>
                              </div>
                           </motion.div>
                        ))}
                     </div>
                  </motion.div>

                  {/* Certifications */}
                  <motion.div variants={itemVariants} className='space-y-6'>
                     <h3 className='text-2xl font-semibold text-white'>
                        {t("certifications")}
                     </h3>

                     <div className='space-y-4'>
                        {(
                           t.raw("certificationItems") as Array<{
                              title: string
                              provider: string
                           }>
                        ).map((cert, index) => (
                           <motion.div
                              key={index}
                              className='flex items-center space-x-4 group'
                              initial={{ opacity: 0, x: 50 }}
                              animate={
                                 isInView
                                    ? { opacity: 1, x: 0 }
                                    : { opacity: 0, x: 50 }
                              }
                              transition={{
                                 duration: 0.6,
                                 delay: index * 0.1,
                              }}>
                              <div className='w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full group-hover:scale-125 transition-transform duration-300' />
                              <div className='flex-1'>
                                 <div className='text-white font-semibold'>
                                    {cert.title}
                                 </div>
                                 <div className='text-gray-400 text-sm'>
                                    {cert.provider}
                                 </div>
                              </div>
                           </motion.div>
                        ))}
                     </div>
                  </motion.div>

                  {/* Languages */}
                  <motion.div variants={itemVariants} className='space-y-6'>
                     <h3 className='text-2xl font-semibold text-white'>
                        {t("languages")}
                     </h3>

                     <div className='space-y-4'>
                        {(
                           t.raw("languageItems") as Array<{
                              language: string
                              proficiency: string
                           }>
                        ).map((lang, index) => (
                           <motion.div
                              key={index}
                              className='flex items-center space-x-4 group'
                              initial={{ opacity: 0, x: 50 }}
                              animate={
                                 isInView
                                    ? { opacity: 1, x: 0 }
                                    : { opacity: 0, x: 50 }
                              }
                              transition={{
                                 duration: 0.6,
                                 delay: index * 0.1,
                              }}>
                              <div className='w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full group-hover:scale-125 transition-transform duration-300' />
                              <div className='flex-1'>
                                 <div className='text-white font-semibold'>
                                    {lang.language}
                                 </div>
                                 <div className='text-gray-400 text-sm'>
                                    {lang.proficiency}
                                 </div>
                              </div>
                           </motion.div>
                        ))}
                     </div>
                  </motion.div>
               </motion.div>
            </motion.div>
         </div>
      </div>
   )
}

export default About
