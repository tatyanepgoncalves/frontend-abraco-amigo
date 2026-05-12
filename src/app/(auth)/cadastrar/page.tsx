'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { setCookie } from 'cookies-next'
import { ArrowRight, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useAuth } from '@/context/AuthContext'
import { COOKIE_NAME } from '@/lib/axios'
import { type RegisterFormData, registerSchema } from '@/schema/register-schema'
import { registerUser } from '@/services/auth-service'

export default function Cadastrar() {
  const { login } = useAuth()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      nome: '',
      email: '',
      senha: '',
      confirmarSenha: '',
      tipoUsuario: 'VOLUNTARIO',
    },
  })
  const router = useRouter()

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
      router.push('/home')
      // biome-ignore lint/suspicious/noExplicitAny: it's necessary
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <section className="h-fit w-full space-y-8 rounded-xl bg-card p-4 shadow-md sm:max-w-xl sm:p-6">
      <div className="text-center">
        <h1 className="font-bold text-2xl text-zinc-900 md:text-3xl dark:text-zinc-100">
          Crie uma conta
        </h1>
        <p className="text-neutral-600 text-sm dark:text-zinc-300">
          Inscreva-se no Abraço Amigo para iniciar sua jornada.
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* NOME COMPLETO */}
        <div className="space-y-2">
          <Label htmlFor="nome">Nome completo</Label>
          <Input
            id="nome"
            {...register('nome')}
            placeholder="ex: João Teixeira"
            type="text"
          />
          {errors.nome && (
            <p className="text-red-500 text-sm">{errors.nome.message}</p>
          )}
        </div>

        {/* EMAIL */}
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            {...register('email')}
            placeholder="ex: joaoteixeira@exemplo.com"
            type="email"
          />
        </div>

        {/* TIPO USUARIO */}
        <div className="space-y-2">
          <Label htmlFor="tipo-usuario">Tipo de Usuário</Label>

          <Controller
            control={control}
            name="tipoUsuario"
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione um tipo de usuário" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="GESTOR">Gestor</SelectItem>
                  <SelectItem value="VOLUNTARIO">Voluntário</SelectItem>
                </SelectContent>
              </Select>
            )}
          />

          {errors.tipoUsuario && (
            <p className="text-red-500 text-sm">{errors.tipoUsuario.message}</p>
          )}
        </div>

        {/* SENHA */}
        <div className="space-y-2">
          <Label htmlFor="senha">Senha</Label>
          <Input id="senha" required type="password" {...register('senha')} />
          {errors.senha && (
            <p className="text-red-500 text-sm">{errors.senha.message}</p>
          )}
        </div>

        {/* CONFIRMAR SENHA */}
        <div className="space-y-2">
          <Label htmlFor="confirmar-senha">Confirmar Senha</Label>
          <Input
            id="confirmar-senha"
            {...register('confirmarSenha')}
            required
            type="password"
          />
          {errors.confirmarSenha && (
            <p className="text-red-500 text-sm">
              {errors.confirmarSenha.message}
            </p>
          )}
        </div>

        {/* BUTTON & LINK */}
        <div className="space-y-2">
          <Button
            className="flex w-full items-center justify-center"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? (
              <>
                <span>'Cadastrando...'</span>
                <Loader2 className="h-4 w-4 animate-spin" />
              </>
            ) : (
              <>
                <span>Cadastrar</span>
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
          <p className="text-center text-neutral-700 text-xs dark:text-zinc-400">
            Já tem conta?{' '}
            <Link className="font-medium hover:underline" href="/entrar">
              Acesse a conta.
            </Link>
          </p>
        </div>
      </form>
    </section>
  )
}
