import { api } from '@/lib/axios'

export async function getDemandas() {
  try {
    const response = await api.get('/demandas')
    return response.data?.demandas ?? []
  } catch (error) {
    console.error('Erro ao buscar demandas:', error)
    return []
  }
}
