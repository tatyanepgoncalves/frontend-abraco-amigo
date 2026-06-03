import { zodResolver } from '@hookform/resolvers/zod'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useAuth } from '@/context/auth-context'
import { COOKIE_NAME } from '@/lib/axios'
import { type LoginFormData, loginSchema } from '@/schema/auth-schema'
import { loginUser } from '@/service/auth-service'

export default function useLogin() {
  const { login } = useAuth()
  const router = useRouter()
  const form = useForm<LoginFormData>({
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

      router.push('/dashboard')
      // biome-ignore lint/suspicious/noExplicitAny: it's necessary
    } catch (error: any) {
      const apiMessage =
        error.response?.data?.message || 'Error ao realizar login.'
      toast.error(apiMessage)
    }
  }

  return {
    register: form.register,
    handleSubmit: form.handleSubmit,
    errors: form.formState.errors,
    isSubmitting: form.formState.isSubmitting,
    onSubmit,
  }
}
