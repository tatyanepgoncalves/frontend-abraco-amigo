'use client'

import { deleteCookie, getCookie } from 'cookies-next'
import { usePathname, useRouter } from 'next/navigation'
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { toast } from 'sonner'
import { COOKIE_NAME } from '@/lib/axios'
import { logoutUser } from '@/service/auth-service'
import { getUserProfile } from '@/service/user-service'
import type { Usuario } from '@/types/usuario'

interface AuthContextType {
  loading: boolean
  login: (userData: Usuario) => void
  logout: () => void
  user: Usuario | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Rotas que não precisam de login
const PUBLIC_ROUTESS = ['/', '/entrar', '/cadastrar']

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Usuario | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  const logout = useCallback(async () => {
    try {
      await logoutUser()
    } catch (error) {
      console.error('Incapaz de invalidar sessão no servidor.', error)
      toast.error('Não foi possível sair da conta.')
    } finally {
      setUser(null)
      localStorage.removeItem('usuario-logado')
      deleteCookie(COOKIE_NAME)
      router.push('/entrar')
    }
  }, [router])

  useEffect(() => {
    const loadData = async () => {
      const token = getCookie(COOKIE_NAME)

      if (token) {
        try {
          const userData = await getUserProfile()
          setUser(userData)
          localStorage.setItem('usuario-logado', JSON.stringify(userData))
        } catch (error) {
          console.error('Erro ao buscar perfil do usuário:', error)
          toast.error('Erro ao buscar informações do usuário.')
          setUser(null)
          logout()
        }
      }

      setLoading(false)
    }

    loadData()
  }, [logout])

  // Proteção de Rotas
  useEffect(() => {
    if (!loading) {
      const isPublicRoute = PUBLIC_ROUTESS.includes(pathname)

      if (!(user || isPublicRoute)) {
        router.push('/entrar')
      }

      // Se já está logado e tenta ir para login/cadastro -> Home
      if (user && pathname === '/entrar') {
        router.push('/home')
      }
    }
  }, [user, loading, pathname, router])

  const login = (userData: Usuario) => {
    setUser(userData)
    localStorage.setItem('usuario-logado', JSON.stringify(userData))
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider')
  }

  return context
}
