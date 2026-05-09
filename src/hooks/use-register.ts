import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import { useAuth } from '@/context/AuthContext'

export default function useRegister() {
  const router = useRouter()
  const { login } = useAuth()
  const [loading, setLoading] = useState(false)

  // Estados do formulário
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [tipoUsuario, setTipoUsuario] = useState('VOLUNTARIO')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')

  const handleCadastro = (e: React.FormEvent) => {
    e.preventDefault()

    if (email.trim() === '' && senha.trim() === '') {
      toast.error('Nome, e-mail e senha são necessários')

      return
    }

    if (nome.trim() === '') {
      toast.error('Nome do usuário é necessário.')

      return
    }

    if (email.trim() === '') {
      toast.error('E-mail é necessário.')

      return
    }

    if (senha.trim() === '') {
      toast.error('Senha é necessário.')
    }

    if (senha !== confirmarSenha) {
      toast.error('As senhas não coincidem!')
      return
    }

    setLoading(true)

    // Simulação de delay
    setTimeout(() => {
      const novoUsuario = {
        id: crypto.randomUUID(),
        nome,
        email,
        tipoUsuario: tipoUsuario as 'GESTOR' | 'VOLUNTARIO',
        senha,
        createdAt: new Date().toISOString(),
      }

      // Salvar no localStorage (Simulando tabela da API)
      const usuariosSalvos = localStorage.getItem('usuarios-mock')
      const listaAtualizada = usuariosSalvos
        ? [...JSON.parse(usuariosSalvos), novoUsuario]
        : [novoUsuario]

      localStorage.setItem('usuarios-mock', JSON.stringify(listaAtualizada))

      login(novoUsuario)

      toast.success('Conta criada com sucesso! Redirecionando...')

      setLoading(false)

      // Redireciona para o login após 2 segundos
      setTimeout(() => {
        router.push('/home')
      }, 1500)
    }, 1000)
  }

  return {
    loading,

    nome,
    email,
    tipoUsuario,
    senha,
    confirmarSenha,

    setNome,
    setEmail,
    setTipoUsuario,
    setSenha,
    setConfirmarSenha,

    handleCadastro,
  }
}
