import { api } from '@/lib/axios'

export async function getStatsPublic() {
  try {
    const response = await api.get('/estatisticas/publicas')
    return response.data
    // biome-ignore lint/suspicious/noExplicitAny: it's necessary for the message
  } catch (error: any) {
    const message =
      error.response?.data?.message ||
      'Erro interno ao carregar estatísticas públicas.'
    throw new Error(message)
  }
}
