import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { locales } from "../../lib/i18n"
import "../globals.css"

const inter = Inter({
   variable: "--font-inter",
   subsets: ["latin"],
})

const jetbrainsMono = JetBrains_Mono({
   variable: "--font-jetbrains-mono",
   subsets: ["latin"],
})

export const metadata: Metadata = {
   title: "Usama Bin Tariq - Full Stack Developer",
   description:
      "Software Engineer with 7+ years of experience in full-stack development, specializing in modern web technologies and scalable solutions.",
   keywords:
      "Full Stack Developer, Software Engineer, React, Next.js, Node.js, TypeScript, C#, ASP.NET",
   authors: [{ name: "Usama Bin Tariq" }],
   openGraph: {
      title: "Usama Bin Tariq - Full Stack Developer",
      description:
         "Software Engineer with 7+ years of experience in full-stack development",
      url: "https://usamabintariq.vercel.app",
      siteName: "Usama Bin Tariq Portfolio",
      type: "website",
   },
}

export function generateStaticParams() {
   return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
   children,
   params,
}: {
   children: React.ReactNode
   params: Promise<{ locale: string }>
}) {
   const { locale } = await params

   console.log(`Layout: Using locale ${locale}`)

   // Providing all messages to the client
   // side is the easiest way to get started
   const messages = await getMessages({ locale })

   return (
      <html lang={locale} className='scroll-smooth'>
         <body
            className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-black text-white overflow-x-hidden`}>
            <NextIntlClientProvider locale={locale} messages={messages}>
               {children}
            </NextIntlClientProvider>
         </body>
      </html>
   )
}
