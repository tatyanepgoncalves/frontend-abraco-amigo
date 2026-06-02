'use client'

import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useLogin from '@/hooks/auth/use-login'

export default function FormEntrar() {
  const { errors, handleSubmit, isSubmitting, onSubmit, register } = useLogin()

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-4 px-4 py-8 md:w-fit md:px-12 md:py-0">
      <div className="text-center">
        <h1 className="font-semibold text-2xl text-zinc-900 dark:text-zinc-100">
          Bem-vindo(a) de volta
        </h1>
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          Acesse o dashboard para saber mais informações
        </p>
      </div>
      <form className="w-full space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <div className="space-y-2">
          <Label className="pl-2" htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            placeholder="ex: joao@teixeira.com"
            type="email"
            {...register('email')}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Senha */}
        <div className="space-y-2">
          <Label className="pl-2">Senha</Label>
          <Input type="password" {...register('senha')} />
          {errors.senha && (
            <p className="text-red-500 text-sm">{errors.senha.message}</p>
          )}
        </div>

        <div className="space-y-2 text-center">
          <Button
            className="w-full bg-cyan-500"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? (
              <>
                <p>Entrando...</p>
                <Loader2 className="h-4 w-4 animate-spin" />
              </>
            ) : (
              <p>Entrar</p>
            )}
          </Button>
          <p className="text-muted-foreground text-xs">
            Já possui conta?{' '}
            <Link className="font-medium hover:underline" href="/cadastrar">
              Crie uma conta
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}
