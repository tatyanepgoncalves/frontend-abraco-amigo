import { useRouter } from 'next/navigation'
import type React from 'react'
import { useState } from 'react'
import { toast } from 'sonner'
import { useAuth } from '@/context/AuthContext'

export default function useLogin() {
  const { login } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // Estados do formulario
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    if (email.trim() === '' && senha.trim() === '') {
      toast.error('E-mail e senha são necessários')

      return
    }

    if (email.trim() === '') {
      toast.error('E-mail é necessário.')

      return
    }

    if (senha.trim() === '') {
      toast.error('Senha é necessário.')
    }

    // Simulação de delay de rede
    setTimeout(() => {
      // Buscar usuários do localStorage
      const usuariosSalvos = localStorage.getItem('usuarios-mock')
      const usuarios = usuariosSalvos ? JSON.parse(usuariosSalvos) : []

      // Tenta encontrar o usuário com as mesmas credenciais
      const usuarioEncontrado = usuarios.find(
        // biome-ignore lint/suspicious/noExplicitAny: it's necessary here
        (u: any) => u.email === email && u.senha === senha
      )

      if (usuarioEncontrado) {
        toast.success(`Bem-vindo, ${usuarioEncontrado.nome.split(' ')[0]}!`)

        // Simula salvar sessão (token ou dados do user)
        login(usuarioEncontrado)

        // Redirecionar baseado no tipo de usuário ou para a home
        router.push('/dashboard')
      } else {
        toast.error('E-mail ou senha incorretos.')
      }

      setIsLoading(false)
    }, 1000)
  }

  return {
    isLoading,

    email,
    senha,

    setIsLoading,
    setEmail,
    setSenha,

    handleLogin,
  }
}
