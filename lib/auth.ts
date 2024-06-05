"use server"

import { cookies } from "next/headers"
import { baseUrl } from "./api"

export const getAuth = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/v1/auth`, {
      headers: {
        Cookie: cookies().toString(),
      },
      credentials: "include",
    })

    const data = await response.json()

    return {
      isAuthenticated: data.auth,
      user: data.user,
    }
  } catch (error) {
    return {
      isAuthenticated: false,
      user: null,
    }
  }
}
