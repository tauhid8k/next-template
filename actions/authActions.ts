'use server'

import { z } from 'zod'
import {
  registerValidator,
  loginValidator,
  forgotPasswordValidator,
} from '@/validators/authValidator'

// Register
export const register = async (values: z.infer<typeof registerValidator>) => {}

// Login User
export const login = async (values: z.infer<typeof loginValidator>) => {}

// Forgot Password
export const forgotPassword = async (
  values: z.infer<typeof forgotPasswordValidator>
) => {}
