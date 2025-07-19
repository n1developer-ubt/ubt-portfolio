"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, MapPin, ExternalLink } from "lucide-react"
import { useTranslations } from "next-intl"

const Experience = () => {
   const sectionRef = useRef<HTMLDivElement>(null)
   const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
   const t = useTranslations("experience")

   const experiences = t.raw("experiences") as Array<{
      title: string
      company: string
      period: string
      location: string
      type: string
      description: string
      achievements: string[]
      technologies: string[]
   }>

   const getColorForIndex = (index: number) => {
      const colors = [
         "from-blue-500 to-cyan-500",
         "from-green-500 to-emerald-500",
         "from-purple-500 to-pink-500",
         "from-orange-500 to-red-500",
         "from-indigo-500 to-purple-500",
      ]
      return colors[index % colors.length]
   }

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
               className='space-y-16'>
               {/* Section Header */}
               <motion.div
                  variants={itemVariants}
                  className='text-center space-y-4'>
                  <h2 className='text-5xl lg:text-6xl font-bold gradient-text'>
                     {t("title")}
                  </h2>
                  <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
                     {t("subtitle")}
                  </p>
                  <div className='w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto' />
               </motion.div>

               {/* Experience Timeline */}
               <div className='relative'>
                  {/* Timeline line */}
                  <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden lg:block' />

                  <div className='space-y-12'>
                     {experiences.map((exp, index) => (
                        <motion.div
                           key={index}
                           variants={itemVariants}
                           className='relative'
                           whileHover={{ scale: 1.02 }}
                           transition={{ type: "spring", stiffness: 300 }}>
                           {/* Timeline dot */}
                           <div className='absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hidden lg:block' />

                           <div className='lg:ml-20'>
                              <div className='glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300'>
                                 <div className='grid lg:grid-cols-3 gap-8'>
                                    {/* Left column - Basic info */}
                                    <div className='space-y-4'>
                                       <div className='space-y-2'>
                                          <h3 className='text-2xl font-bold text-white'>
                                             {exp.title}
                                          </h3>
                                          <div className='flex items-center space-x-2 text-lg'>
                                             <span
                                                className={`bg-gradient-to-r ${getColorForIndex(
                                                   index
                                                )} bg-clip-text text-transparent font-semibold`}>
                                                {exp.company}
                                             </span>
                                             <ExternalLink className='w-4 h-4 text-gray-400' />
                                          </div>
                                       </div>

                                       <div className='space-y-2 text-sm text-gray-400'>
                                          <div className='flex items-center space-x-2'>
                                             <Calendar className='w-4 h-4' />
                                             <span>{exp.period}</span>
                                          </div>
                                          <div className='flex items-center space-x-2'>
                                             <MapPin className='w-4 h-4' />
                                             <span>
                                                {exp.location} • {exp.type}
                                             </span>
                                          </div>
                                       </div>

                                       {/* Technologies */}
                                       <div className='space-y-2'>
                                          <h4 className='text-sm font-semibold text-gray-300'>
                                             {t("technologies")}
                                          </h4>
                                          <div className='flex flex-wrap gap-2'>
                                             {exp.technologies.map(
                                                (tech, techIndex) => (
                                                   <span
                                                      key={techIndex}
                                                      className='px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20'>
                                                      {tech}
                                                   </span>
                                                )
                                             )}
                                          </div>
                                       </div>
                                    </div>

                                    {/* Right column - Description and achievements */}
                                    <div className='lg:col-span-2 space-y-6'>
                                       <p className='text-gray-300 leading-relaxed'>
                                          {exp.description}
                                       </p>

                                       <div className='space-y-3'>
                                          <h4 className='text-lg font-semibold text-white'>
                                             {t("keyAchievements")}
                                          </h4>
                                          <ul className='space-y-2'>
                                             {exp.achievements.map(
                                                (achievement, achIndex) => (
                                                   <motion.li
                                                      key={achIndex}
                                                      className='flex items-start space-x-3 text-gray-300'
                                                      initial={{
                                                         opacity: 0,
                                                         x: 20,
                                                      }}
                                                      animate={
                                                         isInView
                                                            ? {
                                                                 opacity: 1,
                                                                 x: 0,
                                                              }
                                                            : {
                                                                 opacity: 0,
                                                                 x: 20,
                                                              }
                                                      }
                                                      transition={{
                                                         duration: 0.5,
                                                         delay:
                                                            index * 0.2 +
                                                            achIndex * 0.1,
                                                      }}>
                                                      <div
                                                         className={`w-2 h-2 bg-gradient-to-r ${getColorForIndex(
                                                            index
                                                         )} rounded-full mt-2 flex-shrink-0`}
                                                      />
                                                      <span className='text-sm leading-relaxed'>
                                                         {achievement}
                                                      </span>
                                                   </motion.li>
                                                )
                                             )}
                                          </ul>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </div>

               {/* Call to action */}
               <motion.div
                  variants={itemVariants}
                  className='text-center space-y-6'>
                  <h3 className='text-2xl font-semibold text-white'>
                     {t("readyToWork")}
                  </h3>
                  <motion.a
                     href='#contact'
                     className='inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 glow-hover'
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}>
                     {t("letsConnect")}
                  </motion.a>
               </motion.div>
            </motion.div>
         </div>
      </div>
   )
}

export default Experience
