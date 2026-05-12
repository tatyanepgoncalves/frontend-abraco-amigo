import { zodResolver } from '@hookform/resolvers/zod'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useAuth } from '@/context/AuthContext'
import { COOKIE_NAME } from '@/lib/axios'
import { type LoginFormData, loginSchema } from '@/schema/login-schema'
import { loginUser } from '@/services/auth-service'

export default function useLogin() {
  const { login } = useAuth()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      senha: '',
    },
  })

  async function onSubmit(data: LoginFormData) {
    try {
      const response = await loginUser(data)

      if (response.token) {
        setCookie(COOKIE_NAME, response.token, {
          maxAge: 60 * 60 * 24 * 7, // 7 days
          path: '/',
          sameSite: 'lax',
        })
      }

      if (response.user) {
        login(response.user)
        const firstName = response.user.nome.split(' ')[0]
        toast.success(
          `Login realizado com sucesso! Bem-vindo de volta, ${firstName}`
        )
      }

      router.push('/home')
      // biome-ignore lint/suspicious/noExplicitAny: it's necessary
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  }
}
