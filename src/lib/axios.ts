import axios from 'axios'
import { getCookie } from 'cookies-next'

export const COOKIE_NAME = 'abraco_amigo'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3333',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptor para adicionar o Token em todas as chamadas da 'api'
api.interceptors.request.use(async (config) => {
  try {
    let token: string | undefined | null

    if (typeof window === 'undefined') {
      const { cookies } = await import('next/headers')
      const cookieStore = await cookies()
      token = cookieStore.get(COOKIE_NAME)?.value
    } else {
      token = getCookie(COOKIE_NAME) as string
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  } catch (e) {
    console.error('Erro no Interceptor:', e)
  }
  return config
})
