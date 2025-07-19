"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Database, Cloud, Smartphone, Globe, Zap } from "lucide-react"
import { useTranslations } from "next-intl"

const Skills = () => {
   const sectionRef = useRef<HTMLDivElement>(null)
   const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
   const [activeCategory, setActiveCategory] = useState(0)
   const t = useTranslations("skills")

   const skillCategories = (
      t.raw("categories") as Array<{
         title: string
         skills: Array<{
            name: string
            level: number
            description: string
         }>
      }>
   ).map((category, index) => ({
      ...category,
      icon:
         index === 0
            ? Globe
            : index === 1
            ? Database
            : index === 2
            ? Database
            : index === 3
            ? Cloud
            : index === 4
            ? Smartphone
            : Zap,
      color:
         index === 0
            ? "from-blue-500 to-cyan-500"
            : index === 1
            ? "from-green-500 to-emerald-500"
            : index === 2
            ? "from-purple-500 to-pink-500"
            : index === 3
            ? "from-orange-500 to-red-500"
            : index === 4
            ? "from-indigo-500 to-purple-500"
            : "from-yellow-500 to-orange-500",
   }))

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            delayChildren: 0.3,
            staggerChildren: 0.1,
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

               {/* Category Tabs */}
               <motion.div
                  variants={itemVariants}
                  className='flex flex-wrap justify-center gap-4'>
                  {skillCategories.map((category, index) => (
                     <motion.button
                        key={index}
                        onClick={() => setActiveCategory(index)}
                        className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                           activeCategory === index
                              ? "glass bg-white/10 text-white"
                              : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
                        <category.icon className='w-5 h-5' />
                        <span className='font-medium'>{category.title}</span>
                     </motion.button>
                  ))}
               </motion.div>

               {/* Skills Grid */}
               <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {skillCategories[activeCategory].skills.map(
                     (skill, index) => (
                        <motion.div
                           key={skill.name}
                           className='glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group'
                           initial={{ opacity: 0, scale: 0.9 }}
                           animate={{ opacity: 1, scale: 1 }}
                           transition={{ duration: 0.5, delay: index * 0.1 }}
                           whileHover={{ y: -5 }}>
                           <div className='space-y-4'>
                              {/* Skill header */}
                              <div className='flex items-center justify-between'>
                                 <h3 className='text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300'>
                                    {skill.name}
                                 </h3>
                                 <span className='text-sm text-gray-400 font-mono'>
                                    {skill.level}%
                                 </span>
                              </div>

                              {/* Progress bar */}
                              <div className='space-y-2'>
                                 <div className='h-2 bg-gray-800 rounded-full overflow-hidden'>
                                    <motion.div
                                       className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} origin-left`}
                                       initial={{ scaleX: 0 }}
                                       animate={
                                          isInView
                                             ? { scaleX: skill.level / 100 }
                                             : { scaleX: 0 }
                                       }
                                       transition={{
                                          duration: 1.5,
                                          delay: index * 0.1,
                                       }}
                                    />
                                 </div>
                              </div>

                              {/* Description */}
                              <p className='text-sm text-gray-400 leading-relaxed'>
                                 {skill.description}
                              </p>

                              {/* Skill level indicator */}
                              <div className='flex items-center space-x-2'>
                                 {[...Array(5)].map((_, i) => (
                                    <div
                                       key={i}
                                       className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                          i < Math.floor(skill.level / 20)
                                             ? `bg-gradient-to-r ${skillCategories[activeCategory].color}`
                                             : "bg-gray-700"
                                       }`}
                                    />
                                 ))}
                              </div>
                           </div>
                        </motion.div>
                     )
                  )}
               </motion.div>

               {/* Additional Info */}
               <motion.div
                  variants={itemVariants}
                  className='text-center space-y-6 glass p-8 rounded-2xl'>
                  <h3 className='text-2xl font-semibold text-white'>
                     {t("alwaysLearning")}
                  </h3>
                  <p className='text-gray-400 max-w-2xl mx-auto'>
                     {t("learningDescription")}
                  </p>
                  <div className='flex flex-wrap justify-center gap-4 mt-6'>
                     {(t.raw("learningTechnologies") as string[]).map(
                        (tech, index) => (
                           <motion.span
                              key={tech}
                              className='px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-sm text-purple-300'
                              initial={{ opacity: 0, scale: 0 }}
                              animate={
                                 isInView
                                    ? { opacity: 1, scale: 1 }
                                    : { opacity: 0, scale: 0 }
                              }
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              whileHover={{ scale: 1.1 }}>
                              {tech}
                           </motion.span>
                        )
                     )}
                  </div>
               </motion.div>
            </motion.div>
         </div>
      </div>
   )
}

export default Skills
