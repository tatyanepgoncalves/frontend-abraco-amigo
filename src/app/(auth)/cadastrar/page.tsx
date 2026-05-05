'use client'

import { ArrowRight, Loader2 } from 'lucide-react'
import Link from 'next/link'
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
import useRegister from '@/hooks/use-register'

export default function Cadastrar() {
  const {
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
  } = useRegister()

  return (
    <section className="h-fit w-full space-y-8 rounded-xl bg-white p-4 shadow-md sm:max-w-xl sm:p-6">
      <div className="text-center">
        <h1 className="font-bold text-2xl text-zinc-900 md:text-3xl">
          Crie uma conta
        </h1>
        <p className="text-neutral-600 text-sm">
          Inscreva-se no Abraço Amigo para iniciar sua jornada.
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleCadastro}>
        {/* NOME COMPLETO */}
        <div className="space-y-2">
          <Label htmlFor="nome">Nome completo</Label>
          <Input
            id="nome"
            onChange={(e) => setNome(e.target.value)}
            placeholder="ex: João Teixeira"
            required
            type="text"
            value={nome}
          />
        </div>

        {/* EMAIL */}
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ex: joaoteixeira@exemplo.com"
            required
            type="email"
            value={email}
          />
        </div>

        {/* TIPO USUARIO */}
        <div className="space-y-2">
          <Label htmlFor="tipo-usuario">Tipo de Usuário</Label>

          <Select onValueChange={setTipoUsuario} value={tipoUsuario}>
            <SelectTrigger className="w-full" id="tipo-usuario">
              <SelectValue placeholder="Selecione um tipo de usuário" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="GESTOR">Gestor</SelectItem>
              <SelectItem value="VOLUNTARIO">Voluntário</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* SENHA */}
        <div className="space-y-2">
          <Label htmlFor="senha">Senha</Label>
          <Input
            id="senha"
            onChange={(e) => setSenha(e.target.value)}
            required
            type="password"
            value={senha}
          />
        </div>

        {/* CONFIRMAR SENHA */}
        <div className="space-y-2">
          <Label htmlFor="confirmar-senha">Confirmar Senha</Label>
          <Input
            id="confirmar-senha"
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
            type="password"
            value={confirmarSenha}
          />
        </div>

        {/* BUTTON & LINK */}
        <div className="space-y-2">
          <Button
            className="flex w-full items-center justify-center"
            disabled={loading}
            type="submit"
          >
            <span> {loading ? 'Cadastrando...' : 'Cadastrar'}</span>
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <ArrowRight className="h-4 w-4" />
            )}
          </Button>
          <p className="text-center text-neutral-700 text-xs">
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
