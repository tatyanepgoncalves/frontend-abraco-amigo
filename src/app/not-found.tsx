'use client' // Necessário para usar hooks de navegação e estado de login

import { Search } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/context/auth-context'
import useLogout from '@/hooks/auth/use-logout'

export default function NotFound() {
  const router = useRouter()
  const { user } = useAuth()
  const isAuthenticated = !!user
  const { isLoggingOut, handleLogout } = useLogout()

  return (
    // Adicionado bg-zinc-950 para dar contraste com as cores claras que você escolheu
    <div className="flex h-screen w-full flex-col items-center justify-center bg-zinc-950 p-4 text-white">
      <div className="flex w-full max-w-md flex-col items-center justify-center gap-6 py-8">
        {/* CONTAINER DO ÍCONE + 404 */}
        <div className="relative flex w-full items-center justify-center">
          {/* Lupa de fundo com opacidade */}
          <Search
            className="h-40 w-40 animate-pulse text-zinc-700/40"
            strokeWidth={2.5}
          />

          {/* O 404 agora fica perfeitamente centralizado em qualquer tela */}
          <h2 className="absolute font-black text-6xl text-cyan-400 tracking-tighter drop-shadow-[0_0_15px_rgba(34,211,238,0.3)] sm:text-7xl">
            404
          </h2>
        </div>

        {/* TEXTOS */}
        <div className="flex flex-col items-center space-y-3 text-center">
          <h1 className="font-bold text-2xl tracking-tight sm:text-3xl">
            Página não encontrada
          </h1>
          <p className="max-w-xs text-sm text-zinc-400 sm:text-base">
            A página que você procura não existe ou foi movida.
          </p>
        </div>

        {/* BOTÕES */}
        <div className="mt-2 flex items-center gap-3">
          {/* SÓ RENDERIZA SE O USUÁRIO ESTIVER LOGADO */}
          {isAuthenticated && (
            <Button
              className="px-5"
              disabled={isLoggingOut}
              onClick={handleLogout}
              type="button"
              variant="destructive"
            >
              {isLoggingOut ? 'Saindo...' : 'Sair'}
            </Button>
          )}

          {/* Botão Voltar utilizando o router do Next.js */}
          <Button
            className="px-5"
            disabled={isLoggingOut}
            onClick={() => router.back()}
            type="button"
            variant="secondary"
          >
            Voltar
          </Button>

          {/* Dica: Um botão para a Home sempre ajuda caso o "Voltar" não tenha histórico */}
          <Link href="/" passHref>
            <Button
              className="px-5 text-zinc-300"
              disabled={isLoggingOut}
              type="button"
              variant="outline"
            >
              Início
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
