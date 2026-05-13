import { useQuery } from '@tanstack/react-query'
import { useAuth } from '@/context/AuthContext'
import { getUserProfile } from '@/services/user-service'

export default function useProfile() {
  const { user } = useAuth()

  return useQuery({
    queryKey: ['profile', user?.id],
    queryFn: getUserProfile,
    enabled: !!user, // só executa se o usuário tiver logado.
    staleTime: 1000 * 60 * 5, // mantém os dados frescos por 5 minutos
  })
}
