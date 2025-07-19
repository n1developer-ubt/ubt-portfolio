"use client"

import { NextIntlClientProvider } from "next-intl"
import { ReactNode } from "react"

interface TranslationProviderProps {
   children: ReactNode
   messages: Record<string, unknown>
   locale: string
}

export default function TranslationProvider({
   children,
   messages,
   locale,
}: TranslationProviderProps) {
   return (
      <NextIntlClientProvider locale={locale} messages={messages}>
         {children}
      </NextIntlClientProvider>
   )
}
