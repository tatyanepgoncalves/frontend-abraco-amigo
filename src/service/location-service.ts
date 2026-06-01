import { api } from '@/lib/axios'
import type { Location, LocationDetails } from '@/types/location'

export async function getLocationWithoutFilter(): Promise<Location[]> {
  try {
    const response = await api.get('/home/locais')

    return response.data?.locais ?? []

    // biome-ignore lint/complexity/noUselessCatchBinding: it's necessary here
    // biome-ignore lint/correctness/noUnusedVariables: it's necessary here
  } catch (error) {
    return []
  }
}

export async function getLocationById(id: string): Promise<LocationDetails> {
  try {
    const response = await api.get<LocationDetails>(`/locais/${id}`)

    return response.data
  } catch (error) {
    console.error(`Erro ao buscar local ${id}:`, error)
    throw new Error(
      error instanceof Error
        ? error.message
        : 'Erro ao buscar detalhes do local.'
    )
  }
}
