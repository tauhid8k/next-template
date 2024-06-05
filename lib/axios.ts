import axios, { AxiosInstance } from "axios"
import { redirect } from "next/navigation"
import { baseUrl } from "./api"

let instance: AxiosInstance
export const getAxios = () => {
  if (!instance) {
    instance = axios.create({
      withCredentials: true,
      baseURL: `${baseUrl}`,
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
        redirect("/auth/login")
      }

      return Promise.reject(error)
    }
  )

  return instance
}
