import { getRequestConfig } from "next-intl/server"
import type { RequestConfig } from "next-intl/server"

// Can be imported from a shared config
const locales = ["en", "de"] as const
type Locale = (typeof locales)[number]

async function loadMessages(locale: string) {
   try {
      const messages = await import(`../../messages/${locale}.json`)
      return messages.default
   } catch (error) {
      console.error(`Failed to load messages for locale ${locale}:`, error)
      // Fallback to English
      const fallback = await import(`../../messages/en.json`)
      return fallback.default
   }
}

export default getRequestConfig(async ({ locale }): Promise<RequestConfig> => {
   // Validate that the incoming `locale` parameter is valid
   const validLocale: Locale = locales.includes(locale as Locale)
      ? (locale as Locale)
      : "en"

   console.log(`Loading messages for locale: ${validLocale}`)
   const messages = await loadMessages(validLocale)

   return {
      locale: validLocale,
      messages,
   }
})
