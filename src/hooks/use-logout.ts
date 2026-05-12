import { useState } from 'react'
import { toast } from 'sonner'
import { useAuth } from '@/context/AuthContext'

export default function useLogout() {
  const { logout } = useAuth()

  const [isLoggingOut, setIsLoggingOut] = useState(false)

  async function handleLogout() {
    setIsLoggingOut(true)

    try {
      await logout()
      toast.success('Até logo!')
    } catch {
      toast.error('Erro ao sair. Tente novamente.')
    } finally {
      setIsLoggingOut(false)
    }
  }

  return {
    logout,
    isLoggingOut,
    setIsLoggingOut,
    handleLogout,
  }
}
