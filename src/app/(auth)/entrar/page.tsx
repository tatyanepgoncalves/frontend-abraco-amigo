'use client'

import { ArrowRight, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useLogin from '@/hooks/use-login'

export default function Entrar() {
  const { isSubmitting, errors, handleSubmit, onSubmit, register } = useLogin()

  return (
    <section className="h-fit w-full space-y-8 rounded-xl bg-card p-4 shadow-md sm:max-w-xl sm:p-6">
      <div className="text-center">
        <h1 className="font-bold text-2xl text-zinc-900 md:text-3xl lg:text-4xl dark:text-zinc-100">
          Bem-vindo de volta!
        </h1>
        <p className="text-neutral-600 text-sm dark:text-zinc-300">
          Preencha os dados para entrar no sistema.
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* EMAIL */}
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            {...register('email')}
            placeholder="ex: joaoteixeira@exemplo.com"
            type="email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}
        </div>

        {/* SENHA */}
        <div className="space-y-2">
          <Label htmlFor="senha">Senha</Label>
          <Input id="senha" {...register('senha')} type="password" />
          {errors.senha && (
            <p className="text-red-500 text-xs">{errors.senha.message}</p>
          )}
        </div>

        {/* BUTTON & LINK */}
        <div className="space-y-2">
          <Button className="w-full" disabled={isSubmitting} type="submit">
            {isSubmitting ? (
              <>
                <span>Entrando...</span>
                <Loader2 className="h-4 w-4 animate-spin" />
              </>
            ) : (
              <>
                <span>Entrar</span>
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
          <p className="text-center text-neutral-700 text-xs dark:text-zinc-400">
            Ainda não tem conta?{' '}
            <Link className="font-medium hover:underline" href="/cadastrar">
              Crie uma conta.
            </Link>
          </p>
        </div>
      </form>
    </section>
  )
}
