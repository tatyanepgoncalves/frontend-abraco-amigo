import { api } from '@/lib/axios'
import type { Usuario } from '@/types/usuario'

export async function getUserProfile() {
  try {
    const response = await api.get<{ usuario: Usuario }>('/me')
    return response.data.usuario

    // biome-ignore lint/complexity/noUselessCatchBinding: it's necessary here
    // biome-ignore lint/correctness/noUnusedVariables: it's necessary here
  } catch (error) {
    throw new Error('Erro ao buscar perfil do usuário.')
  }
}
