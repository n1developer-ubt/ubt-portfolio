"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Play, X } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "next-intl"

const Projects = () => {
   const sectionRef = useRef<HTMLDivElement>(null)
   const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
   const [selectedProject, setSelectedProject] = useState<number | null>(null)
   const [filter, setFilter] = useState("all")
   const t = useTranslations("projects")

   const projects = (
      t.raw("projectItems") as Array<{
         title: string
         category: string
         description: string
         longDescription: string
         technologies: string[]
         features: string[]
         status: string
      }>
   ).map((project, index) => ({
      ...project,
      id: index + 1,
      image:
         index === 0
            ? "/lrcarserv.png"
            : index === 1
            ? "/evergo.png"
            : index === 2
            ? "/trucksafety.png"
            : "/stuzanne.png",
      liveUrl: index < 2 ? "#" : "#",
      githubUrl: "#",
      color:
         index === 0
            ? "from-blue-500 to-cyan-500"
            : index === 1
            ? "from-green-500 to-emerald-500"
            : index === 2
            ? "from-orange-500 to-red-500"
            : "from-purple-500 to-pink-500",
   }))

   const categories = [
      { id: "all", name: t("filterAll") },
      { id: "web", name: t("filterWeb") },
      { id: "mobile", name: t("filterMobile") },
      { id: "enterprise", name: t("filterEnterprise") },
   ]

   const filteredProjects =
      filter === "all"
         ? projects
         : projects.filter((project) => project.category === filter)

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

               {/* Filter Tabs */}
               <motion.div
                  variants={itemVariants}
                  className='flex flex-wrap justify-center gap-4'>
                  {categories.map((category) => (
                     <motion.button
                        key={category.id}
                        onClick={() => setFilter(category.id)}
                        className={`px-6 py-3 rounded-full transition-all duration-300 ${
                           filter === category.id
                              ? "glass bg-white/10 text-white"
                              : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
                        {category.name}
                     </motion.button>
                  ))}
               </motion.div>

               {/* Projects Grid */}
               <motion.div layout className='grid md:grid-cols-2 gap-8'>
                  <AnimatePresence>
                     {filteredProjects.map((project, index) => (
                        <motion.div
                           key={project.id}
                           layout
                           initial={{ opacity: 0, scale: 0.9 }}
                           animate={{ opacity: 1, scale: 1 }}
                           exit={{ opacity: 0, scale: 0.9 }}
                           transition={{ duration: 0.5, delay: index * 0.1 }}
                           className='glass rounded-2xl overflow-hidden group hover:bg-white/10 transition-all duration-300'
                           whileHover={{ y: -10 }}>
                           {/* Project Image */}
                           <div className='relative h-64 overflow-hidden'>
                              <Image
                                 src={project.image}
                                 alt={project.title}
                                 fill
                                 className='object-cover group-hover:scale-110 transition-transform duration-500'
                              />
                              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />

                              {/* Status Badge */}
                              <div
                                 className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${project.color} rounded-full text-xs font-semibold text-white`}>
                                 {project.status}
                              </div>

                              {/* Overlay Actions */}
                              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                 <div className='flex space-x-4'>
                                    <motion.button
                                       onClick={() =>
                                          setSelectedProject(project.id)
                                       }
                                       className='p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors'
                                       whileHover={{ scale: 1.1 }}
                                       whileTap={{ scale: 0.9 }}>
                                       <Play className='w-5 h-5' />
                                    </motion.button>
                                    {project.liveUrl !== "#" && (
                                       <motion.a
                                          href={project.liveUrl}
                                          target='_blank'
                                          rel='noopener noreferrer'
                                          className='p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors'
                                          whileHover={{ scale: 1.1 }}
                                          whileTap={{ scale: 0.9 }}>
                                          <ExternalLink className='w-5 h-5' />
                                       </motion.a>
                                    )}
                                    {project.githubUrl !== "#" && (
                                       <motion.a
                                          href={project.githubUrl}
                                          target='_blank'
                                          rel='noopener noreferrer'
                                          className='p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors'
                                          whileHover={{ scale: 1.1 }}
                                          whileTap={{ scale: 0.9 }}>
                                          <Github className='w-5 h-5' />
                                       </motion.a>
                                    )}
                                 </div>
                              </div>
                           </div>

                           {/* Project Info */}
                           <div className='p-6 space-y-4'>
                              <div className='space-y-2'>
                                 <h3 className='text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300'>
                                    {project.title}
                                 </h3>
                                 <p className='text-gray-400 leading-relaxed'>
                                    {project.description}
                                 </p>
                              </div>

                              {/* Technologies */}
                              <div className='flex flex-wrap gap-2'>
                                 {project.technologies
                                    .slice(0, 4)
                                    .map((tech, techIndex) => (
                                       <span
                                          key={techIndex}
                                          className='px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20'>
                                          {tech}
                                       </span>
                                    ))}
                                 {project.technologies.length > 4 && (
                                    <span className='px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20'>
                                       +{project.technologies.length - 4} more
                                    </span>
                                 )}
                              </div>
                           </div>
                        </motion.div>
                     ))}
                  </AnimatePresence>
               </motion.div>

               {/* Call to Action */}
               <motion.div
                  variants={itemVariants}
                  className='text-center space-y-6'>
                  {" "}
                  <h3 className='text-2xl font-semibold text-white'>
                     {t("interestedInWorking")}
                  </h3>
                  <motion.a
                     href='#contact'
                     className='inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 glow-hover'
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}>
                     {t("startProject")}
                  </motion.a>
               </motion.div>
            </motion.div>
         </div>

         {/* Project Modal */}
         <AnimatePresence>
            {selectedProject && (
               <motion.div
                  className='fixed inset-0 z-50 flex items-center justify-center p-4'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}>
                  {/* Backdrop */}
                  <motion.div
                     className='absolute inset-0 bg-black/80 backdrop-blur-sm'
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     onClick={() => setSelectedProject(null)}
                  />

                  {/* Modal Content */}
                  <motion.div
                     className='relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass rounded-2xl'
                     initial={{ scale: 0.9, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     exit={{ scale: 0.9, opacity: 0 }}
                     transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 200,
                     }}>
                     {(() => {
                        const project = projects.find(
                           (p) => p.id === selectedProject
                        )
                        if (!project) return null

                        return (
                           <div className='p-8 space-y-6'>
                              {/* Header */}
                              <div className='flex items-center justify-between'>
                                 <h3 className='text-3xl font-bold gradient-text'>
                                    {project.title}
                                 </h3>
                                 <button
                                    onClick={() => setSelectedProject(null)}
                                    className='p-2 text-gray-400 hover:text-white transition-colors'>
                                    <X className='w-6 h-6' />
                                 </button>
                              </div>

                              {/* Image */}
                              <div className='relative h-64 rounded-xl overflow-hidden'>
                                 <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className='object-cover'
                                 />
                              </div>

                              {/* Description */}
                              <p className='text-gray-300 leading-relaxed'>
                                 {project.longDescription}
                              </p>

                              {/* Features */}
                              <div className='space-y-4'>
                                 <h4 className='text-xl font-semibold text-white'>
                                    {t("features")}
                                 </h4>
                                 <ul className='grid md:grid-cols-2 gap-2'>
                                    {project.features.map((feature, index) => (
                                       <li
                                          key={index}
                                          className='flex items-start space-x-2 text-gray-300'>
                                          <div
                                             className={`w-2 h-2 bg-gradient-to-r ${project.color} rounded-full mt-2 flex-shrink-0`}
                                          />
                                          <span className='text-sm'>
                                             {feature}
                                          </span>
                                       </li>
                                    ))}
                                 </ul>
                              </div>

                              {/* Technologies */}
                              <div className='space-y-4'>
                                 <h4 className='text-xl font-semibold text-white'>
                                    {t("technologiesUsed")}
                                 </h4>
                                 <div className='flex flex-wrap gap-2'>
                                    {project.technologies.map((tech, index) => (
                                       <span
                                          key={index}
                                          className='px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20'>
                                          {tech}
                                       </span>
                                    ))}
                                 </div>
                              </div>

                              {/* Actions */}
                              <div className='flex space-x-4 pt-4'>
                                 {project.liveUrl !== "#" && (
                                    <a
                                       href={project.liveUrl}
                                       target='_blank'
                                       rel='noopener noreferrer'
                                       className='flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300'>
                                       <ExternalLink className='w-4 h-4' />
                                       <span>{t("viewProject")}</span>
                                    </a>
                                 )}
                                 {project.githubUrl !== "#" && (
                                    <a
                                       href={project.githubUrl}
                                       target='_blank'
                                       rel='noopener noreferrer'
                                       className='flex items-center space-x-2 px-6 py-3 border border-white/20 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300'>
                                       <Github className='w-4 h-4' />
                                       <span>{t("viewCode")}</span>
                                    </a>
                                 )}
                              </div>
                           </div>
                        )
                     })()}
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   )
}

export default Projects
