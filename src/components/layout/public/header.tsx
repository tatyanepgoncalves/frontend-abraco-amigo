'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from '../theme-toggle'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 w-full border-b bg-card px-6 py-4">
      <div className="flex w-full items-center justify-between">
        <Link href="/">
          <h2 className="font-semibold text-xl text-zinc-900 dark:text-zinc-100">
            Abraço Amigo
          </h2>
          <p className="text-muted-foreground text-sm">
            Central de Coordernação de Apoio
          </p>
        </Link>

        <div className="flex items-center gap-6">
          <div className="space-x-4 font-medium text-sm text-zinc-600 dark:text-zinc-400">
            {/* Se tiver na Home ('/'), mostra ambos os links */}
            {pathname === '/' && (
              <>
                <Link
                  className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                  href="/cadastrar"
                >
                  Cadastrar
                </Link>
                <Link
                  className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                  href="/entrar"
                >
                  Entrar
                </Link>
              </>
            )}

            {/* Se tiver na página de cadastro ('/cadastrar'), mostra apenas o link de cadastrar */}
            {pathname === '/cadastrar' && (
              <Link
                className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                href="/entrar"
              >
                Entrar
              </Link>
            )}

            {/* Se tiver na página de entrar ('/entrar'), mostra apenas o link de entrar */}
            {pathname === '/entrar' && (
              <Link
                className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                href="/cadastrar"
              >
                Cadastrar
              </Link>
            )}
          </div>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
