import axios from 'axios'

export const COOKIE_NAME = 'abraco_amigo_token'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptor para adicionar o Token em todas as chamadas da 'api'
api.interceptors.request.use(async (config) => {
  try {
    // Certifique-se de que isso só rode no SERVIDOR
    if (typeof window === 'undefined') {
      const { cookies } = await import('next/headers')
      const cookieStore = await cookies()
      const token = cookieStore.get(COOKIE_NAME)?.value

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }

    return config
  } catch (e) {
    console.error('Erro no Interceptor:', e)
  }
  return config
})
