import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import type { Usuario } from '@/lib/types'

export default function useSidebar() {
  const [isUser, setIsUser] = useState<Usuario | null>()
  const router = useRouter()
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  useEffect(() => {
    const loggedUser = localStorage.getItem('usuario-logado')

    if (loggedUser) {
      try {
        setIsUser(JSON.parse(loggedUser))
      } catch (error) {
        console.log('Usuário não autenticado.', error)
        toast.error('Usuário não autenticado.')
      }
    }
  }, [])

  const toggleSibebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  const handleLogout = () => {
    localStorage.removeItem('usuario-logado')
    router.push('/')
  }

  return {
    isUser,
    setIsUser,
    handleLogout,

    isCollapsed,
    toggleSibebar,
  }
}
