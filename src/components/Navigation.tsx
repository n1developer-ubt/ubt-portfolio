"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useTranslations } from "next-intl"
import LanguageSwitcher from "./LanguageSwitcher"

const Navigation = () => {
   const [isOpen, setIsOpen] = useState(false)
   const [scrolled, setScrolled] = useState(false)
   const [activeSection, setActiveSection] = useState("home")
   const t = useTranslations("navigation")

   const navItems = useMemo(
      () => [
         { name: t("home"), href: "#home" },
         { name: t("about"), href: "#about" },
         { name: t("experience"), href: "#experience" },
         { name: t("skills"), href: "#skills" },
         { name: t("projects"), href: "#projects" },
         { name: t("contact"), href: "#contact" },
      ],
      [t]
   )

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 50)

         // Update active section based on scroll position
         const sections = navItems.map((item) => item.href.substring(1))
         const currentSection = sections.find((section) => {
            const element = document.getElementById(section)
            if (element) {
               const rect = element.getBoundingClientRect()
               return rect.top <= 100 && rect.bottom >= 100
            }
            return false
         })

         if (currentSection) {
            setActiveSection(currentSection)
         }
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
   }, [navItems])

   const handleNavClick = (href: string) => {
      setIsOpen(false)
      const element = document.querySelector(href)
      if (element) {
         element.scrollIntoView({ behavior: "smooth" })
      }
   }

   return (
      <>
         <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
               scrolled ? "glass backdrop-blur-md" : "bg-transparent"
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            <div className='container mx-auto px-6 py-4'>
               <div className='flex items-center justify-between'>
                  {/* Logo */}
                  <motion.div
                     className='text-2xl font-bold gradient-text'
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}>
                     {t("logo")}
                  </motion.div>

                  {/* Desktop Navigation */}
                  <div className='hidden md:flex items-center space-x-8'>
                     {navItems.map((item, index) => (
                        <motion.a
                           key={item.name}
                           href={item.href}
                           onClick={(e) => {
                              e.preventDefault()
                              handleNavClick(item.href)
                           }}
                           className={`relative text-sm font-medium transition-colors duration-300 ${
                              activeSection === item.href.substring(1)
                                 ? "text-white"
                                 : "text-gray-400 hover:text-white"
                           }`}
                           initial={{ opacity: 0, y: -20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.5, delay: index * 0.1 }}
                           whileHover={{ y: -2 }}>
                           {item.name}
                           {activeSection === item.href.substring(1) && (
                              <motion.div
                                 className='absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500'
                                 layoutId='activeSection'
                                 initial={{ scaleX: 0 }}
                                 animate={{ scaleX: 1 }}
                                 transition={{ duration: 0.3 }}
                              />
                           )}
                        </motion.a>
                     ))}

                     {/* Language Switcher */}
                     <LanguageSwitcher />
                  </div>

                  {/* Mobile Menu Button */}
                  <motion.button
                     className='md:hidden p-2 text-white'
                     onClick={() => setIsOpen(!isOpen)}
                     whileTap={{ scale: 0.95 }}>
                     <AnimatePresence mode='wait'>
                        {isOpen ? (
                           <motion.div
                              key='close'
                              initial={{ rotate: -90, opacity: 0 }}
                              animate={{ rotate: 0, opacity: 1 }}
                              exit={{ rotate: 90, opacity: 0 }}
                              transition={{ duration: 0.2 }}>
                              <X className='w-6 h-6' />
                           </motion.div>
                        ) : (
                           <motion.div
                              key='menu'
                              initial={{ rotate: 90, opacity: 0 }}
                              animate={{ rotate: 0, opacity: 1 }}
                              exit={{ rotate: -90, opacity: 0 }}
                              transition={{ duration: 0.2 }}>
                              <Menu className='w-6 h-6' />
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </motion.button>
               </div>
            </div>
         </motion.nav>

         {/* Mobile Menu */}
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  className='fixed inset-0 z-40 md:hidden'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}>
                  {/* Backdrop */}
                  <motion.div
                     className='absolute inset-0 bg-black/80 backdrop-blur-sm'
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     onClick={() => setIsOpen(false)}
                  />

                  {/* Menu Content */}
                  <motion.div
                     className='absolute top-0 right-0 w-80 h-full glass border-l border-white/10'
                     initial={{ x: "100%" }}
                     animate={{ x: 0 }}
                     exit={{ x: "100%" }}
                     transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 200,
                     }}>
                     <div className='flex flex-col items-center justify-center h-full space-y-8'>
                        {navItems.map((item, index) => (
                           <motion.a
                              key={item.name}
                              href={item.href}
                              onClick={(e) => {
                                 e.preventDefault()
                                 handleNavClick(item.href)
                              }}
                              className={`text-2xl font-medium transition-colors duration-300 ${
                                 activeSection === item.href.substring(1)
                                    ? "text-white gradient-text"
                                    : "text-gray-400 hover:text-white"
                              }`}
                              initial={{ opacity: 0, x: 50 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              whileHover={{ scale: 1.1, x: -10 }}
                              whileTap={{ scale: 0.95 }}>
                              {item.name}
                           </motion.a>
                        ))}

                        {/* Language Switcher for Mobile */}
                        <motion.div
                           initial={{ opacity: 0, x: 50 }}
                           animate={{ opacity: 1, x: 0 }}
                           transition={{
                              duration: 0.3,
                              delay: navItems.length * 0.1,
                           }}>
                           <LanguageSwitcher />
                        </motion.div>
                     </div>
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   )
}

export default Navigation
