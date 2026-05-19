import { api } from '@/lib/axios'
import type {
  LocationData,
  SearchLocationFilterData,
} from '@/schema/location-schema'

export async function getLocations(
  data?: SearchLocationFilterData
): Promise<LocationData[]> {
  try {
    const response = await api.get('/locais', { params: data })
    return response.data?.locais || []
    // biome-ignore lint/suspicious/noExplicitAny: it's necessary
  } catch (error: any) {
    const message = error.response?.data?.message || 'Erro ao buscar locais'
    console.error('Erro ao registrar usuário:', message)
    throw new Error('Error ao buscar locais.')
  }
}
