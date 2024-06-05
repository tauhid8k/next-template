/**
 * An array of routes that are accessible to public.
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/"]

/**
 * An array of routes that are used for authentication.
 * These routes will redirect logged in users to /dashboard
 * @type {string[]}
 */
export const authRoutes = [
  "/auth",
  "/auth/register",
  "/auth/login",
  "/auth/forgot-password",
]

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/"
