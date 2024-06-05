import { DEFAULT_LOGIN_REDIRECT, authRoutes, publicRoutes } from "@/auth.routes"
import { NextRequest, NextResponse } from "next/server"
import { getAuth } from "@/lib/auth"

export default async function middleware(req: NextRequest) {
  const { nextUrl } = req

  const isDashboardRoute = nextUrl.pathname.startsWith("/dashboard")
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)

  if (isDashboardRoute) {
    const { isAuthenticated } = await getAuth()

    console.log("Dashboard Route", isAuthenticated)

    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/auth/login", nextUrl))
    }
    return NextResponse.next()
  }

  if (isAuthRoute) {
    const { isAuthenticated } = await getAuth()

    console.log("Auth Route", isAuthenticated)

    if (isAuthenticated) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api)(.*)"],
}
