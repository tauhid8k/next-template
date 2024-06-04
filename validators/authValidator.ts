import { z } from "zod"

// Register Validator
export const registerValidator = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email" }),
    password: z.string().min(1, { message: "Password is required" }),
    confirm_password: z.string(),
  })
  .refine(
    (values) => {
      return values.password === values.confirm_password
    },
    {
      message: "Passwords must match",
      path: ["confirm_password"],
    }
  )

// Login Validator
export const loginValidator = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email" }),
  password: z.string().min(1, { message: "Password is required" }),
  remember_me: z.boolean().optional(),
})

// Email Verification Code Validator
export const emailVerificationCodeValidator = z.object({
  code: z
    .string()
    .min(6, { message: "Code must contain at least 6 characters" }),
})

// Forgot Password Validator
export const forgotPasswordValidator = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email" }),
})
