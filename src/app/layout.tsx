import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import "./globals.css"

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

export default async function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   // For the default locale, we'll get messages for 'en'
   const messages = await getMessages()

   return (
      <html lang='en' className='scroll-smooth'>
         <body
            className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-black text-white overflow-x-hidden`}>
            <NextIntlClientProvider locale='en' messages={messages}>
               {children}
            </NextIntlClientProvider>
         </body>
      </html>
   )
}
