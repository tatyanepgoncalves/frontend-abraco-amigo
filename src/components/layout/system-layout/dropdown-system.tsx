'use client'

import { ChevronsUpDown } from 'lucide-react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import useSidebar from '@/hooks/use-sidebar'
import { cn } from '@/lib/utils'
import { dropdownItens } from '@/types/menu'

export default function DropdownSystem() {
  const { isUser, isCollapsed } = useSidebar()
  const nameClean = isUser?.nome ?? 'Usuário'
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
            'flex items-center gap-2 py-6',
            isCollapsed ? 'justify-center' : 'justify-between'
          )}
          type="button"
          variant="tertiary"
        >
          <Avatar>
            <AvatarImage alt={isUser?.nome} src={isUser?.image || ''} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>

          <ChevronsUpDown className="text-neutral-300" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>
          <div>
            <p>{isUser?.nome}</p>
            <p>{isUser?.email}</p>
            <p>{isUser?.tipoUsuario}</p>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup className="space-y-4">
          {dropdownItens.map((menu) => {
            const Icon = menu.icon

            return (
              <Link
                className="flex items-center gap-2 text-neutral-800"
                href={menu.href}
                key={menu.name}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm">{menu.name}</span>
              </Link>
            )
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
