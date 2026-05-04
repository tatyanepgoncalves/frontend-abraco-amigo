'use client'

import { Loader2, LockKeyhole, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

type ViewMode = 'login' | 'signup'

export default function AuthGestorDialog() {
  const [mode, setMode] = useState<ViewMode>('login')
  const [loading, setLoading] = useState(false)

  // Estados dos campos baseados na nova tabela "usuarios"
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  // biome-ignore lint/suspicious/useAwait: it isn't necessary here
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      console.log('Dados mockados enviados:', { email, senha, mode })
      toast.success(
        mode === 'login' ? 'Bem-vindo de volta!' : 'Conta criada com sucesso!'
      )
      setLoading(false)
    }, 1000)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2" variant="secondary">
          <ShieldCheck className="h-4 w-4" /> Painel do Gestor
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-100">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <LockKeyhole className="h-5 w-5 text-orange-600" />
            {mode === 'login' ? 'Acesso Administrativo' : 'Novo Gestor'}
          </DialogTitle>
          <DialogDescription>
            {mode === 'login'
              ? 'Gerencie demandas, locais e voluntários.'
              : 'Cadastre um novo administrador para o sistema.'}
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-4 pt-4" onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <div className="space-y-2">
              <Label htmlFor="g-nome">Nome do Gestor</Label>
              <Input
                id="g-nome"
                onChange={(e) => setNome(e.target.value)}
                placeholder="Ex: João Admin"
                required
                value={nome}
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="g-email">E-mail</Label>
            <Input
              id="g-email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="gestor@email.com"
              required
              type="email"
              value={email}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="g-senha">Senha</Label>
            <Input
              id="g-senha"
              onChange={(e) => setSenha(e.target.value)}
              required
              type="password"
              value={senha}
            />
          </div>

          <Button
            className="w-full bg-orange-600 text-white hover:bg-orange-700"
            disabled={loading}
            type="submit"
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            // biome-ignore lint/style/noNestedTernary: it's necessary here
            ) : mode === 'login' ? (
              'Entrar'
            ) : (
              'Cadastrar Gestor'
            )}
          </Button>

          <button
            className="w-full text-center text-muted-foreground text-sm hover:text-orange-600"
            onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
            type="button"
          >
            {mode === 'login'
              ? 'Criar nova conta de gestor'
              : 'Já tenho acesso'}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
