export const locales = ["en", "de"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

export const localeNames: Record<Locale, string> = {
   en: "English",
   de: "Deutsch",
}

export function getLocaleFromPathname(pathname: string): Locale {
   const segments = pathname.split("/")
   const localeSegment = segments[1]

   if (locales.includes(localeSegment as Locale)) {
      return localeSegment as Locale
   }

   return defaultLocale
}

export function removeLocaleFromPathname(pathname: string): string {
   const segments = pathname.split("/")
   const localeSegment = segments[1]

   if (locales.includes(localeSegment as Locale)) {
      return "/" + segments.slice(2).join("/")
   }

   return pathname
}
