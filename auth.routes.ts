/**
 * An array of routes that are accessible to public.
 * These routes do not require authentication
 */
export const publicRoutes: string[] = ["/"]

/**
 * An array of routes that are used for authentication.
 * These routes will redirect logged in users to /dashboard
 */
export const authRoutes: string[] = [
  "/auth",
  "/auth/register",
  "/auth/login",
  "/auth/forgot-password",
]

/**
 * The default redirect path after logging in
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/"
