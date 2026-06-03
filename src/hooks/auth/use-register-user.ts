import { zodResolver } from '@hookform/resolvers/zod'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useAuth } from '@/context/auth-context'
import { COOKIE_NAME } from '@/lib/axios'
import { type RegisterFormData, registerSchema } from '@/schema/auth-schema'
import { registerUser } from '@/service/auth-service'

export default function useRegisterUser() {
  const router = useRouter()
  const { login } = useAuth()

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      nome: '',
      email: '',
      senha: '',
      confirmarSenha: '',
      tipoUsuario: 'VOLUNTARIO' as 'GESTOR' | 'VOLUNTARIO',
    },
  })

  async function onSubmit(data: RegisterFormData) {
    try {
      const response = await registerUser(data)

      if (response.token) {
        setCookie(COOKIE_NAME, response.token, {
          maxAge: 60 * 60 * 24 * 7,
          path: '/',
          sameSite: 'lax',
        })
      }

      login(response.usuario)

      toast.success(response.message)
      router.push('/dashboard')
      // biome-ignore lint/suspicious/noExplicitAny: it's necessary
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return {
    register: form.register,
    handleSubmit: form.handleSubmit,
    control: form.control,
    errors: form.formState.errors,
    isSubmitting: form.formState.isSubmitting,
    onSubmit,
  }
}
