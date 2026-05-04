'use client'

import { Loader2, LogIn } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner' // Se não tiver o sonner, use alert
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

export default function AuthDialog() {
  const [mode, setMode] = useState<ViewMode>('login')
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false) // Controle manual do Dialog

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  // biome-ignore lint/suspicious/useAwait: it isn't necessary here
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // SIMULAÇÃO DE DADOS MOCKADOS
    setTimeout(() => {
      console.log('--- MOCK AUTH ---')
      console.log('Modo:', mode)
      console.log('Payload:', { email, password, name })

      setLoading(false)

      if (mode === 'login') {
        toast.success('Login realizado com sucesso! (MOCK)')
        setOpen(false) // Fecha o modal
      } else {
        toast.success('Cadastro realizado! Agora faça login. (MOCK)')
        setMode('login') // Muda para login
      }
    }, 1500) // Simula 1.5s de delay
  }

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild>
        <Button className="gap-2" variant="outline">
          <LogIn className="h-4 w-4" /> Entrar
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-100">
        <DialogHeader>
          <DialogTitle>
            {mode === 'login' ? 'Acesse sua conta' : 'Crie sua conta'}
          </DialogTitle>
          <DialogDescription>
            {mode === 'login'
              ? 'Entre como voluntário para gerenciar suas demandas.'
              : 'Preencha os dados abaixo para se tornar um voluntário.'}
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-4 pt-4" onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input
                id="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                required
                value={name}
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemplo@email.com"
              required
              type="email"
              value={email}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              value={password}
            />
          </div>

          <Button className="w-full" disabled={loading} type="submit">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Carregando...
              </>
              // biome-ignore lint/style/noNestedTernary: it's necessary
            ) : mode === 'login' ? (
              'Entrar'
            ) : (
              'Cadastrar'
            )}
          </Button>

          {/* AJUSTE AQUI: Removi o <p> para evitar erro de Hydration */}
          <div className="flex flex-col items-center gap-2 text-sm">
            {mode === 'login' ? (
              <div className="text-muted-foreground">
                Não tem uma conta?{' '}
                <button
                  className="font-medium text-primary underline-offset-4 hover:underline"
                  onClick={() => setMode('signup')}
                  type="button"
                >
                  Cadastre-se
                </button>
              </div>
            ) : (
              <div className="text-muted-foreground">
                Já possui uma conta?{' '}
                <button
                  className="font-medium text-primary underline-offset-4 hover:underline"
                  onClick={() => setMode('login')}
                  type="button"
                >
                  Faça login
                </button>
              </div>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
