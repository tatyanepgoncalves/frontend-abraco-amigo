'use client'

import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { Controller } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useRegisterUser from '@/hooks/auth/use-register-user'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

export default function FormCadastrar() {
  const { control, errors, handleSubmit, isSubmitting, onSubmit, register } =
    useRegisterUser()

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-4 px-4 py-8 md:w-fit md:px-12 md:py-0">
      <div className="text-center">
        <h1 className="font-semibold text-2xl text-zinc-900 dark:text-zinc-100">
          Crie uma conta
        </h1>
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          Inscreva-se no Abraço Amigo para começar sua jornada.
        </p>
      </div>
      <form className="w-full space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Nome completo */}
        <div className="space-y-2">
          <Label className="pl-2" htmlFor="nome">
            Nome completo
          </Label>
          <Input
            id="nome"
            placeholder="ex: João Teixeira"
            type="text"
            {...register('nome')}
          />
          {errors.nome && (
            <p className="text-red-500 text-sm">{errors.nome.message}</p>
          )}
        </div>

        {/* Email  */}
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

        {/* Tipo de usuário */}
        <div className="space-y-2">
          <Label htmlFor="tipoUsuario">Tipo de usuário</Label>
          <Controller
            control={control}
            name="tipoUsuario"
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione um tipo de usuário" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectItem value="VOLUNTARIO">Voluntário</SelectItem>
                  <SelectItem value="GESTOR">Gestor(a)</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.tipoUsuario && (
            <p className="text-red-500 text-sm">{errors.tipoUsuario.message}</p>
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

        {/* Confirmar Senha */}
        <div className="space-y-2">
          <Label className="pl-2">Confirmar Senha</Label>
          <Input type="password" {...register('confirmarSenha')} />
          {errors.confirmarSenha && (
            <p className="text-red-500 text-sm">
              {errors.confirmarSenha.message}
            </p>
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
                <p>Cadastrando...</p>
                <Loader2 className="h-4 w-4 animate-spin" />
              </>
            ) : (
              <p>Cadastrar</p>
            )}
          </Button>
          <p className="text-muted-foreground text-xs">
            Já possui conta?{' '}
            <Link className="font-medium" href="/entrar">
              Entrar na conta
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}
