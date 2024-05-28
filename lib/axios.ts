import axios, { AxiosInstance } from 'axios'
import { redirect } from 'next/navigation'

// Base API URL
export const baseUrl = process.env.NEXT_PUBLIC_API_URL

let instance: AxiosInstance
export const getAxios = () => {
  if (!instance) {
    instance = axios.create({
      withCredentials: true,
      baseURL: `${baseUrl}/api/v1`,
    })
  }

  // Response interceptor
  instance.interceptors.response.use(
    (response) => {
      // If the request succeeds, return the response
      return response
    },
    (error) => {
      if (error.response.status === 401) {
        redirect('/auth/login')
      }

      return Promise.reject(error)
    }
  )

  return instance
}
