'use client'

import { usePathname, useRouter } from 'next/navigation'
import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface Usuario {
  email: string
  id: string
  nome: string
  tipoUsuario: 'GESTOR' | 'VOLUNTARIO'
}

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
    const loadStorageData = () => {
      const savedUser = localStorage.getItem('usuario-logado')
      if (savedUser) {
        setUser(JSON.parse(savedUser))
      }
      setLoading(false)
    }

    loadStorageData()
  }, [])

  // Proteção de Rotas
  useEffect(() => {
    if (!loading) {
      const isPublicRoute = publicRoutes.includes(pathname)

      if (!(user || isPublicRoute)) {
        router.push('/entrar')
      }
    }
  }, [user, loading, pathname])

  const login = (userData: Usuario) => {
    setUser(userData)
    localStorage.setItem('usuario-logado', JSON.stringify(userData))
    router.push('/dashboard')
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('usuario-logado')
    router.push('/entrar')
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
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
