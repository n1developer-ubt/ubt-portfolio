import createMiddleware from "next-intl/middleware"
import { NextRequest, NextResponse } from "next/server"
import { locales, defaultLocale } from "./src/lib/i18n"

const intlMiddleware = createMiddleware({
   // A list of all locales that are supported
   locales,

   // Used when no locale matches
   defaultLocale,

   // Always use a prefix (including for the default locale)
   localePrefix: "always",
})

export default function middleware(request: NextRequest) {
   // Handle root path redirect
   console.log("Middleware triggered for:", request.nextUrl.pathname)

   const pathname = request.nextUrl.pathname

   // Check if the pathname already starts with a locale
   const pathnameHasLocale = locales.some(
      (locale) =>
         pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
   )

   // If root path, redirect to default locale
   if (pathname === "/") {
      return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url))
   }

   // For all other paths, use the next-intl middleware
   return intlMiddleware(request)
}

export const config = {
   // Match only internationalized pathnames
   matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
