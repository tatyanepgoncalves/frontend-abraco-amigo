import { api } from '@/lib/axios'
import type { Usuario } from '@/lib/types'

export async function getUserProfile() {
  try {
    const response = await api.get<{ usuario: Usuario }>('/me')
    return response.data.usuario

    // biome-ignore lint/suspicious/noExplicitAny: it's necessary
  } catch (error: any) {
    const message =
      error.response?.data?.message || 'Erro ao buscar perfil do usuário.'
    console.error('Erro ao buscar perfil do usuário:', error)
    throw new Error(message)
  }
}
