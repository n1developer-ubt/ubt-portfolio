import createMiddleware from "next-intl/middleware"
import { NextRequest, NextResponse } from "next/server"

const intlMiddleware = createMiddleware({
   // A list of all locales that are supported
   locales: ["en"],

   // Used when no locale matches
   defaultLocale: "en",
})

export default function middleware(request: NextRequest) {
   // Handle root path redirect
   if (request.nextUrl.pathname === "/") {
      return NextResponse.redirect(new URL("/en", request.url))
   }

   // For all other paths, use the next-intl middleware
   return intlMiddleware(request)
}

export const config = {
   // Match only internationalized pathnames
   matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
