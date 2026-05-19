import { api } from '@/lib/axios'

export async function getStatsPublic() {
  try {
    const response = await api.get('/estatisticas/publicas')
    return response.data
    // biome-ignore lint/suspicious/noExplicitAny: it's necessary
  } catch (error: any) {
    const message =
      error.response?.data?.message || 'Erro ao buscar estatísticas públicas'
    console.error(message)
    throw new Error('Error ao buscar estatísticas públicas.')
  }
}
