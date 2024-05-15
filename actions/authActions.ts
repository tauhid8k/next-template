'use server'

import { z } from 'zod'
import {
  registerValidator,
  loginValidator,
  forgotPasswordValidator,
} from '@/validators/authValidator'
import { baseUrl } from '@/lib/api'

// Register
export const register = async (values: z.infer<typeof registerValidator>) => {
  const response = await fetch(`${baseUrl}/register`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  })
  return await response.json()
}

// Login User
export const login = async (values: z.infer<typeof loginValidator>) => {
  const response = await fetch(`${baseUrl}/login`, {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  })

  return await response.json()
}

// Forgot Password
export const forgotPassword = async (
  values: z.infer<typeof forgotPasswordValidator>
) => {}
