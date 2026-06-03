'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import { menuLinks } from '@/types/menu'
import DropdownAvatar from './dropdown-avatar'

export default function HeaderDesktop() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-zinc-200 border-r bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-950/50">
      {/* HEADER DA SIDEBAR */}
      <SidebarHeader className="h-16 justify-center border-zinc-200/80 border-b px-6 dark:border-zinc-800/80">
        <Link className="group flex flex-col gap-0.5" href="/home">
          <h2 className="font-bold text-lg text-zinc-900 transition-colors group-hover:text-cyan-600 dark:text-zinc-100 dark:group-hover:text-cyan-400">
            Abraço Amigo
          </h2>
          <p className="font-medium text-muted-foreground text-xs tracking-tight">
            Central de Coordenação de Apoio
          </p>
        </Link>
      </SidebarHeader>

      {/* CONTEÚDO / LINKS DE NAVEGAÇÃO */}
      <SidebarContent className="gap-4 px-4 py-6">
        <nav>
          <SidebarMenu className="gap-4">
            {menuLinks.map((item) => {
              const isActive = pathname === item.link
              const Icon = item?.icon

              return (
                <SidebarMenuItem key={item.link}>
                  {/* SidebarMenuButton injeta os comportamentos e tamanhos ideais do Shadcn */}
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      'h-10 w-full justify-start gap-3 rounded-lg px-4 py-2.5 font-medium text-sm transition-all',
                      'text-zinc-500 hover:bg-zinc-100/80 hover:text-zinc-900',
                      'dark:text-zinc-400 dark:hover:bg-zinc-900/80 dark:hover:text-zinc-100',
                      // Estilo quando o link estiver ativo (Pill Effect)
                      isActive && [
                        'bg-cyan-50 font-semibold text-cyan-700 shadow-sm',
                        'dark:bg-cyan-950/40 dark:text-cyan-400',
                        'hover:bg-cyan-50 dark:hover:bg-cyan-950/40',
                        'hover:text-cyan-700 dark:hover:text-cyan-400',
                      ]
                    )}
                    isActive={isActive}
                  >
                    <Link href={item.link}>
                      {/* Se seus itens do menu tiverem ícones (ex: item.icon), você pode renderizá-los aqui de forma incrível */}
                      {Icon && (
                        <Icon
                          className={cn(
                            'h-4 w-4 shrink-0 text-zinc-400 dark:text-zinc-500',
                            isActive && 'text-cyan-600 dark:text-cyan-400'
                          )}
                        />
                      )}
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </nav>
      </SidebarContent>

      {/* RODAPÉ DA SIDEBAR */}
      <SidebarFooter className="border-zinc-200/80 border-t p-4 dark:border-zinc-800/80">
        <DropdownAvatar />
      </SidebarFooter>
    </Sidebar>
  )
}
