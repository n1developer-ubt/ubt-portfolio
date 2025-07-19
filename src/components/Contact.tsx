"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import {
   Mail,
   MapPin,
   Send,
   Github,
   Linkedin,
   ExternalLink,
} from "lucide-react"
import { useTranslations } from "next-intl"

const Contact = () => {
   const sectionRef = useRef<HTMLDivElement>(null)
   const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
   const t = useTranslations("contact")
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      subject: "",
      message: "",
   })
   const [isSubmitting, setIsSubmitting] = useState(false)
   const [submitStatus, setSubmitStatus] = useState<
      "idle" | "success" | "error"
   >("idle")

   const contactInfo = [
      {
         icon: Mail,
         label: t("emailLabel"),
         value: "imusamabintariq@gmail.com",
         href: "mailto:imusamabintariq@gmail.com",
         color: "from-blue-500 to-cyan-500",
      },
      {
         icon: MapPin,
         label: t("location"),
         value: t("locationValue"),
         href: "#",
         color: "from-purple-500 to-pink-500",
      },
   ]

   const socialLinks = [
      {
         icon: Github,
         label: t("socialLinks.github"),
         href: "https://github.com/n1developer-ubt",
         color: "hover:text-gray-300",
      },
      {
         icon: Linkedin,
         label: t("socialLinks.linkedin"),
         href: "https://www.linkedin.com/in/usama-bin--tariq/",
         color: "hover:text-blue-400",
      },
      {
         icon: ExternalLink,
         label: t("socialLinks.fiverr"),
         href: "https://www.fiverr.com/n1developer",
         color: "hover:text-green-400",
      },
   ]

   const handleInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      })
   }

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      setIsSubmitting(true)

      try {
         const formElement = e.target as HTMLFormElement
         const formData_web3 = new FormData(formElement)
         
         const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Accept: "application/json",
            },
            body: JSON.stringify({
               access_key: "00fbc724-9792-4b49-b3a2-40202321fd51",
               name: formData.name,
               email: formData.email,
               subject: formData.subject,
               message: formData.message,
               from_name: formData.name,
               replyto: formData.email,
               botcheck: formData_web3.get("botcheck"),
            }),
         })

         const result = await response.json()

         if (result.success) {
            setSubmitStatus("success")
            setFormData({ name: "", email: "", subject: "", message: "" })
         } else {
            setSubmitStatus("error")
         }
      } catch (error) {
         console.error("Form submission error:", error)
         setSubmitStatus("error")
      } finally {
         setIsSubmitting(false)
         setTimeout(() => setSubmitStatus("idle"), 3000)
      }
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

               <div className='grid lg:grid-cols-2 gap-16'>
                  {/* Left side - Contact Info */}
                  <motion.div variants={itemVariants} className='space-y-8'>
                     <div className='space-y-6'>
                        <h3 className='text-3xl font-bold text-white mb-8'>
                           {t("title")}
                        </h3>

                        {contactInfo.map((info, index) => (
                           <motion.div
                              key={info.label}
                              className='flex items-center space-x-4 group'
                              initial={{ opacity: 0, x: -50 }}
                              animate={
                                 isInView
                                    ? { opacity: 1, x: 0 }
                                    : { opacity: 0, x: -50 }
                              }
                              transition={{
                                 duration: 0.6,
                                 delay: index * 0.2,
                              }}>
                              <div
                                 className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                 <info.icon className='w-6 h-6 text-white' />
                              </div>
                              <div>
                                 <div className='text-gray-400 text-sm'>
                                    {info.label}
                                 </div>
                                 <a
                                    href={info.href}
                                    className='text-white font-medium hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text transition-all duration-300'>
                                    {info.value}
                                 </a>
                              </div>
                           </motion.div>
                        ))}
                     </div>

                     {/* Social Links */}
                     <motion.div variants={itemVariants} className='space-y-6'>
                        <h4 className='text-xl font-semibold text-white'>
                           {t("followMe")}
                        </h4>
                        <div className='flex space-x-4'>
                           {socialLinks.map((social, index) => (
                              <motion.a
                                 key={social.label}
                                 href={social.href}
                                 target='_blank'
                                 rel='noopener noreferrer'
                                 className={`p-4 glass rounded-full text-gray-400 ${social.color} transition-all duration-300 glow-hover group`}
                                 whileHover={{ scale: 1.1, y: -5 }}
                                 whileTap={{ scale: 0.95 }}
                                 initial={{ opacity: 0, y: 20 }}
                                 animate={
                                    isInView
                                       ? { opacity: 1, y: 0 }
                                       : { opacity: 0, y: 20 }
                                 }
                                 transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                 }}>
                                 <social.icon className='w-6 h-6 group-hover:scale-110 transition-transform duration-300' />
                              </motion.a>
                           ))}
                        </div>
                     </motion.div>

                     {/* Availability Status */}
                     <motion.div
                        variants={itemVariants}
                        className='glass p-6 rounded-2xl space-y-4'>
                        <div className='flex items-center space-x-3'>
                           <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse' />
                           <span className='text-white font-semibold'>
                              {t("availability.status")}
                           </span>
                        </div>
                        <p className='text-gray-400 text-sm'>
                           {t("availability.description")}
                        </p>
                     </motion.div>
                  </motion.div>

                  {/* Right side - Contact Form */}
                  <motion.div variants={itemVariants} className='space-y-8'>
                     <div className='glass p-8 rounded-2xl'>
                        <h3 className='text-2xl font-bold text-white mb-6'>
                           {t("sendMessage")}
                        </h3>

                        <form onSubmit={handleSubmit} className='space-y-6'>
                           {/* Honeypot field for spam protection */}
                           <input
                              type="checkbox"
                              name="botcheck"
                              className="hidden"
                              style={{ display: 'none' }}
                           />
                           
                           <div className='grid md:grid-cols-2 gap-6'>
                              <div className='space-y-2'>
                                 <label
                                    htmlFor='name'
                                    className='text-sm font-medium text-gray-300'>
                                    {t("name")} *
                                 </label>
                                 <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all duration-300'
                                    placeholder={t("namePlaceholder")}
                                 />
                              </div>

                              <div className='space-y-2'>
                                 <label
                                    htmlFor='email'
                                    className='text-sm font-medium text-gray-300'>
                                    {t("email")} *
                                 </label>
                                 <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all duration-300'
                                    placeholder={t("emailPlaceholder")}
                                 />
                              </div>
                           </div>

                           <div className='space-y-2'>
                              <label
                                 htmlFor='subject'
                                 className='text-sm font-medium text-gray-300'>
                                 {t("subject")} *
                              </label>
                              <input
                                 type='text'
                                 id='subject'
                                 name='subject'
                                 value={formData.subject}
                                 onChange={handleInputChange}
                                 required
                                 className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all duration-300'
                                 placeholder={t("subjectPlaceholder")}
                              />
                           </div>

                           <div className='space-y-2'>
                              <label
                                 htmlFor='message'
                                 className='text-sm font-medium text-gray-300'>
                                 {t("message")} *
                              </label>
                              <textarea
                                 id='message'
                                 name='message'
                                 value={formData.message}
                                 onChange={handleInputChange}
                                 required
                                 rows={6}
                                 className='w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all duration-300 resize-none'
                                 placeholder={t("messagePlaceholder")}
                              />
                           </div>

                           <motion.button
                              type='submit'
                              disabled={isSubmitting}
                              className='w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 glow-hover'
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}>
                              {isSubmitting ? (
                                 <>
                                    <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin' />
                                    <span>{t("sending")}</span>
                                 </>
                              ) : (
                                 <>
                                    <Send className='w-5 h-5' />
                                    <span>{t("send")}</span>
                                 </>
                              )}
                           </motion.button>

                           {/* Status Messages */}
                           {submitStatus === "success" && (
                              <motion.div
                                 initial={{ opacity: 0, y: 10 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 className='p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-sm'>
                                 {t("successMessage")}
                              </motion.div>
                           )}

                           {submitStatus === "error" && (
                              <motion.div
                                 initial={{ opacity: 0, y: 10 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 className='p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-sm'>
                                 {t("errorMessage")}
                              </motion.div>
                           )}
                        </form>
                     </div>

                     {/* Quick Contact Options */}
                     <motion.div
                        variants={itemVariants}
                        className='grid grid-cols-1 gap-4'>
                        <a
                           href='mailto:imusamabintariq@gmail.com'
                           className='flex items-center justify-center space-x-2 p-4 glass rounded-lg hover:bg-white/10 transition-all duration-300 group'>
                           <Mail className='w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300' />
                           <span className='text-white font-medium'>
                              {t("emailMe")}
                           </span>
                        </a>

                        {/* <a
                  href="https://www.fiverr.com/n1developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 p-4 glass rounded-lg hover:bg-white/10 transition-all duration-300 group"
                >
                  <ExternalLink className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white font-medium">Hire on Fiverr</span>
                </a> */}
                     </motion.div>
                  </motion.div>
               </div>

               {/* Testimonials Section */}
               <motion.div
                  variants={containerVariants}
                  className='mt-20 space-y-12'>
                  <motion.div
                     variants={itemVariants}
                     className='text-center space-y-4'>
                     <h3 className='text-4xl font-bold gradient-text'>
                        {t("testimonials.title")}
                     </h3>
                     <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
                        {t("testimonials.subtitle")}
                     </p>
                     <div className='w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto' />
                  </motion.div>

                  <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                     {[
                        {
                           name: "sivosivo",
                           role: "Repeat Client",
                           country: "Switzerland",
                           rating: 5,
                           text: "Working with Usama Tariq on our website development project was an absolute pleasure! His PROFESSIONALISM and ATTENTION TO DETAIL truly shine through, delivering stellar results. With quick responsiveness and proactive communication, he made every milestone seamless—thanks a lot, Usama! 🙌",
                           project: "WordPress",
                           price: "EUR1,000–EUR1,500",
                           duration: "2 days",
                        },
                        {
                           name: "astepnate",
                           role: "Repeat Client",
                           country: "United States",
                           rating: 5,
                           text: "He was easy to work with. He payed attention to the details I gave him. The overall quality of his work was great. He took the time to zoom call when I had questions. I would absolutely recommend him.",
                           project: "Custom Websites",
                           price: "EUR200–EUR400",
                           duration: "4 weeks",
                        },
                        {
                           name: "colinjohnparry",
                           role: "Client",
                           country: "United States",
                           rating: 5,
                           text: "After contacted four or five sellers to create my tool, I am happy I found Usama. He listened to my needs and built the software I needed from scratch and to specification. When the first version didn't quite operate as intended, he worked with me to find a proactive solution and delivered exactly what I needed.",
                           project: "Desktop Applications",
                           price: "EUR400–EUR600",
                           duration: "5 weeks",
                        },
                        {
                           name: "anasmak11",
                           role: "Repeat Client",
                           country: "Kuwait",
                           rating: 5,
                           text: "Usama Tariq is a top-notch software developer whose exceptional professionalism and attention to detail truly EXCEEDED my expectations. He not only delivers on time but does so with remarkable politeness and quick responsiveness. It was an absolute pleasure working with him! 👍",
                           project: "Desktop Applications",
                           price: "EUR400–EUR600",
                           duration: "3 weeks",
                        },
                        {
                           name: "astepnate",
                           role: "Repeat Client",
                           country: "United States",
                           rating: 5,
                           text: "Working with Usama was a truly EXCELLENT experience! His attention to detail and professionalism not only exceeded expectations but also brought my vision to life more beautifully than I imagined. Responsive, polite, and deeply understanding, Usama is a RELIABLE choice for anyone seeking a smooth, hassle-free UX design project—HIGHLY recommended! 😊",
                           project: "UX Design",
                           price: "EUR400–EUR600",
                           duration: "3 weeks",
                        },
                     ].map((testimonial, index) => (
                        <motion.div
                           key={index}
                           className='glass p-6 rounded-2xl hover:bg-white/10 transition-all duration-300'
                           initial={{ opacity: 0, y: 50 }}
                           animate={
                              isInView
                                 ? { opacity: 1, y: 0 }
                                 : { opacity: 0, y: 50 }
                           }
                           transition={{ duration: 0.6, delay: index * 0.1 }}
                           whileHover={{ y: -5 }}>
                           <div className='space-y-4'>
                              {/* Rating */}
                              <div className='flex space-x-1'>
                                 {[...Array(testimonial.rating)].map((_, i) => (
                                    <div
                                       key={i}
                                       className='w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full'
                                    />
                                 ))}
                              </div>

                              {/* Testimonial text */}
                              <p className='text-gray-300 text-sm leading-relaxed'>
                                 &ldquo;{testimonial.text}&rdquo;
                              </p>

                              {/* Project Details */}
                              <div className='space-y-2'>
                                 <div className='text-xs text-purple-400 font-medium'>
                                    Project: {testimonial.project}
                                 </div>
                                 <div className='flex justify-between text-xs text-gray-400'>
                                    <span>Price: {testimonial.price}</span>
                                    <span>
                                       Duration: {testimonial.duration}
                                    </span>
                                 </div>
                              </div>

                              {/* Author */}
                              <div className='border-t border-white/10 pt-4'>
                                 <div className='text-white font-semibold'>
                                    {testimonial.name}
                                 </div>
                                 <div className='text-gray-400 text-sm'>
                                    {testimonial.role} • {testimonial.country}
                                 </div>
                              </div>
                           </div>
                        </motion.div>
                     ))}
                  </div>

                  {/* Fiverr CTA */}
                  <motion.div
                     variants={itemVariants}
                     className='text-center space-y-6 glass p-8 rounded-2xl'>
                     <h4 className='text-2xl font-semibold text-white'>
                        {t("fiverrTitle")}
                     </h4>
                     <p className='text-gray-400'>{t("fiverrDescription")}</p>
                     <motion.a
                        href='https://www.fiverr.com/n1developer'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-block px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full text-white font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 glow-hover'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
                        {t("viewFiverrProfile")}
                     </motion.a>
                  </motion.div>
               </motion.div>
            </motion.div>
         </div>
      </div>
   )
}

export default Contact
