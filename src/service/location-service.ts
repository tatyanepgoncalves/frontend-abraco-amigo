import { api } from '@/lib/axios'

export async function getLocationWithoutFilter() {
  try {
    const response = await api.get('/home/locais')
    return response.data
  } catch (error) {
    console.error('Error fetching locations:', error)
    throw error
  }
}
