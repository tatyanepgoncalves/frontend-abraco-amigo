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

export async function getLastestDemandas() {
  try {
    const response = await api.get('/demandas/ultimas')
    return response.data?.demandas ?? []
    // biome-ignore lint/complexity/noUselessCatchBinding: it's necessary here
    // biome-ignore lint/correctness/noUnusedVariables: it's necessary here
  } catch (error) {
    return []
  }
}

export async function getStatsManager() {
  try {
    const response = await api.get('/estatisticas/gestores')
    return response.data
    // biome-ignore lint/suspicious/noExplicitAny: it's necessary for the message
  } catch (error: any) {
    const message =
      error.response?.data?.message ||
      'Erro interno ao carregar estatísticas públicas.'
    throw new Error(message)
  }
}

export async function getStatsGeneral() {
  try {
    const response = await api.get('/estatisticas')
    return response.data
    // biome-ignore lint/suspicious/noExplicitAny: it's necessary for the message
  } catch (error: any) {
    const message =
      error.response?.data?.message ||
      'Erro interno ao carregar estatísticas geraiss.'
    throw new Error(message)
  }
}
