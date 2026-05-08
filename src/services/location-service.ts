
import { MOCK_LOCATIONS } from '@/constants/mocks'

export const getLocations = async () => {
  // Simulando um delay de rede
  await new Promise((res) => setTimeout(res, 500))
  return MOCK_LOCATIONS
}
