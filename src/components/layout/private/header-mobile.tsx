'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from '@/components/layout/theme-toggle'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { menuLinks } from '@/types/menu'
import DropdownAvatar from './dropdown-avatar'

export default function HeaderMobile() {
  const pathname = usePathname()

  return (
    // md:hidden garante que ele suma completamente no desktop
    <header className="sticky top-0 z-40 block w-full border-zinc-200 border-b bg-card px-6 py-3.5 shadow-sm md:hidden dark:border-zinc-800">
      <div className="flex w-full items-center justify-between">
        {/* LOGO E SUBTÍTULO */}
        <Link className="flex flex-col gap-0.5" href="/home">
          <h2 className="font-bold text-lg text-zinc-900 tracking-tight dark:text-zinc-100">
            Abraço Amigo
          </h2>
          <p className="font-medium text-[11px] text-muted-foreground tracking-tight">
            Central de Coordenação de Apoio
          </p>
        </Link>

        {/* BOTÕES DA DIREITA */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="h-9 w-9 border-zinc-200 dark:border-zinc-800"
                size="icon"
                variant="outline"
              >
                <Menu className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
              </Button>
            </SheetTrigger>

            {/* Menu Lateral Mobile */}
            <SheetContent
              className="flex h-screen w-75 flex-col justify-between border-zinc-200 border-r p-0 dark:border-zinc-800"
              side="right"
            >
              <div className="flex flex-col">
                {/* Cabeçalho interno do menu aberto */}
                <SheetHeader className="h-16 justify-center border-zinc-200/80 border-b px-6 text-left dark:border-zinc-800/80">
                  <SheetTitle className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                    Abraço Amigo
                  </SheetTitle>
                  <p className="-mt-1 font-medium text-[11px] text-muted-foreground">
                    Navegação do Sistema
                  </p>
                </SheetHeader>

                {/* LINKS DE NAVEGAÇÃO */}
                <nav className="flex flex-col gap-1 px-4 py-6">
                  {menuLinks.map((item) => {
                    const isActive = pathname === item.link

                    return (
                      <Link
                        className={cn(
                          'flex h-10 w-full items-center gap-3 rounded-lg px-4 py-2.5 font-medium text-sm transition-all',
                          'text-zinc-500 hover:bg-zinc-100/80 hover:text-zinc-900',
                          'dark:text-zinc-400 dark:hover:bg-zinc-900/80 dark:hover:text-zinc-100',
                          // Estado ativo (Estilo em bloco idêntico à Sidebar)
                          isActive && [
                            'bg-cyan-50 font-semibold text-cyan-700',
                            'dark:bg-cyan-950/40 dark:text-cyan-400',
                            'hover:bg-cyan-50 dark:hover:bg-cyan-950/40',
                          ]
                        )}
                        href={item.link}
                        key={item.link}
                      >
                        {/* Renderiza o ícone caso ele exista no objeto do link */}
                        {item.icon && (
                          <item.icon
                            className={cn(
                              'h-4 w-4 shrink-0 text-zinc-400 dark:text-zinc-500',
                              isActive && 'text-cyan-600 dark:text-cyan-400'
                            )}
                          />
                        )}
                        <span>{item.label}</span>
                      </Link>
                    )
                  })}
                </nav>
              </div>

              {/* PERFIL / AVATAR NO RODAPÉ */}
              <div className="border-zinc-200/80 border-t bg-zinc-50/30 p-4 dark:border-zinc-800/80 dark:bg-zinc-950/20">
                <DropdownAvatar />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
