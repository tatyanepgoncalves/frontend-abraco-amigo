'use client'

import { deleteCookie, getCookie } from 'cookies-next'
import { usePathname, useRouter } from 'next/navigation'
import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { COOKIE_NAME } from '@/lib/axios'
import type { Usuario } from '@/lib/types'
import { logoutUser } from '@/services/auth-service'
import { getUserProfile } from '@/services/user-service'

interface AuthContextType {
  loading: boolean
  login: (userData: Usuario) => void
  logout: () => void
  user: Usuario | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Usuario | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  // Rotas que não precisam de login
  const publicRoutes = ['/', '/entrar', '/cadastrar']

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
          setUser(null)
          logout()
        }
      }

      setLoading(false)
    }

    loadData()
  }, [])

  // Proteção de Rotas
  useEffect(() => {
    if (!loading) {
      const isPublicRoute = publicRoutes.includes(pathname)

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

  const logout = async () => {
    try {
      await logoutUser()
    } catch (error) {
      console.error('Incapaz de invalidar sessão no servidor.', error)
    } finally {
      setUser(null)
      localStorage.removeItem('usuario-logado')
      deleteCookie(COOKIE_NAME)
      router.push('/entrar')
    }
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
