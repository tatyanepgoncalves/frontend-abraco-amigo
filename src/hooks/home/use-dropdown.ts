import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { getUserProfile } from '@/service/user-service'
import type { Usuario } from '@/types/usuario'

export default function useDropdown() {
  const [usuario, setUsuario] = useState<Usuario | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function loadUserData() {
      try {
        setIsLoading(true)
        const dataUser = await getUserProfile()
        setUsuario(dataUser)
      } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error)
        toast.error('Erro ao carregar dados do usuário.')
      } finally {
        setIsLoading(false)
      }
    }

    loadUserData()
  }, [])

  // Função para pegar as iniciais do nome caso não tenha foto
  const getInitials = (name: string) =>
    name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)

  return { usuario, setUsuario, isLoading, setIsLoading, getInitials }
}
