import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://backendabracoamigo-production.up.railway.app',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptor para adicionar o Token em todas as chamadas da 'api'
api.interceptors.request.use((config) => {

  try {
    const token = localStorage.getItem("token")
  
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  } catch (e) {
    console.error('Erro no Interceptor:', e)
  }
  return config
})
