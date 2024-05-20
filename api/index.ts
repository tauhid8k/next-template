import axios, { AxiosInstance } from 'axios'

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

  return instance
}
