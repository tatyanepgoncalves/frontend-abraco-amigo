import { api } from '@/lib/axios'

export async function getLocationWithoutFilter() {
  try {
    const response = await api.get('/home/locais')
    return response.data
    // biome-ignore lint/complexity/noUselessCatchBinding: it's necessary
    // biome-ignore lint/correctness/noUnusedVariables: it's necessary
  } catch (error) {
    throw new Error('Erro ao buscar locais')
  }
}

export async function getLocationById(id: string) {
  try {
    const response = await api.get(`/locais/${id}`)
    return response.data

    // biome-ignore lint/complexity/noUselessCatchBinding: it's necessary
    // biome-ignore lint/correctness/noUnusedVariables: it's necessary
  } catch (error) {
    throw new Error('Erro ao buscar local pelo ID')
  }
}
