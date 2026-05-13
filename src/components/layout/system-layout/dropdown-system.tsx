'use client'

import { ChevronsUpDown, LogOut } from 'lucide-react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import useLogout from '@/hooks/use-logout'
import useProfile from '@/hooks/use-profile'
import useSidebar from '@/hooks/use-sidebar'
import { cn } from '@/lib/utils'
import { dropdownItens } from '@/types/menu'

export default function DropdownSystem() {
  const { data: usuario } = useProfile()
  const { isLoggingOut, handleLogout } = useLogout()

  const { isCollapsed } = useSidebar()
  const nameClean = usuario?.nome ?? 'Usuário'
  const initials = nameClean
    .split('')
    .filter(Boolean)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn(
            'flex items-center gap-2 py-8',
            isCollapsed ? 'justify-center' : 'justify-between'
          )}
          type="button"
        >
          <div className="flex items-center gap-2">
            <Avatar className="size-12">
              <AvatarImage alt={usuario?.nome} src={usuario?.imagem || ''} />
              <AvatarFallback className="bg-zinc-300 text-base text-black">
                {initials}
              </AvatarFallback>
            </Avatar>

            <div className="text-left text-xs">
              <p className="text-zinc-200">{usuario?.nome}</p>
              <p className="text-zinc-400">{usuario?.tipoUsuario}</p>
            </div>
          </div>

          <ChevronsUpDown className="text-neutral-300" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="space-y-4">
        {dropdownItens.map((menu) => {
          const Icon = menu.icon

          return (
            <Link
              className="flex items-center gap-2 rounded-lg py-2 text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              href={menu.href}
              key={menu.name}
            >
              <Icon className="h-4 w-4" />
              <span className="text-sm">{menu.name}</span>
            </Link>
          )
        })}

        <Button
          className="w-full justify-start p-0 text-muted-foreground"
          disabled={isLoggingOut}
          onClick={handleLogout}
          variant="ghost"
        >
          <LogOut />
          Sair
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
