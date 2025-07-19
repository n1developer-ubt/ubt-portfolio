"use client"

import { useRouter } from "next/navigation"
import { useLocale } from "next-intl"
import { locales, localeNames } from "../lib/i18n"
import { Globe } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function LanguageSwitcher() {
   const router = useRouter()
   const locale = useLocale()
   const [isOpen, setIsOpen] = useState(false)

   const switchToLocale = (newLocale: string) => {
      // Construct the new path with the new locale
      const pathWithoutLocale = window.location.href
      const newPath = `/${newLocale}${pathWithoutLocale}`

      router.push(newPath)
      setIsOpen(false)
   }

   return (
      <div className='relative'>
         <button
            onClick={() => setIsOpen(!isOpen)}
            className='flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300'
            aria-label='Select language'>
            <Globe className='w-4 h-4' />
            <span className='text-sm font-medium'>
               {localeNames[locale as keyof typeof localeNames]}
            </span>
         </button>

         {isOpen && (
            <div className='absolute top-full mt-2 right-0 bg-black/90 backdrop-blur-md border border-white/20 rounded-lg shadow-xl z-50 min-w-[120px]'>
               {locales.map((loc) => (
                  <Link
                     key={loc}
                     href={loc}
                     locale={loc}
                     onClick={() => switchToLocale(loc)}
                     className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                        loc === locale
                           ? "text-white bg-white/10"
                           : "text-gray-400 hover:text-white hover:bg-white/5"
                     }`}>
                     <button
                        key={loc}
                        className={`w-full text-left px-4 py-2 hover:bg-white/10 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                           loc === locale
                              ? "bg-white/5 text-purple-400"
                              : "text-white"
                        }`}>
                        {localeNames[loc]}
                     </button>
                  </Link>
               ))}
            </div>
         )}

         {isOpen && (
            <div
               className='fixed inset-0 z-40'
               onClick={() => setIsOpen(false)}
               aria-hidden='true'
            />
         )}
      </div>
   )
}
