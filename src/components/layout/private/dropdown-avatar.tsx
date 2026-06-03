'use client'

import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import useLogout from '@/hooks/auth/use-logout'
import useDropdown from '@/hooks/home/use-dropdown'
import { DropdownMenuLinks } from '@/types/menu'

export default function DropdownAvatar() {
  const { usuario, isLoading, getInitials } = useDropdown()
  const { isLoggingOut, handleLogout } = useLogout()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="flex h-14 w-full items-center justify-start gap-3 border border-zinc-200 px-4 focus-visible:ring-0 dark:border-zinc-800"
          variant="ghost"
        >
          {isLoading ? (
            // Estado de Carregamento (Skeleton / Loader)
            <div className="flex w-full items-center gap-3">
              <Loader2 className="h-5 w-5 animate-spin text-zinc-500" />
              <span className="text-sm text-zinc-400">
                Carregando perfil...
              </span>
            </div>
          ) : (
            <>
              <Avatar className="h-9 w-9">
                <AvatarImage alt={usuario?.nome} src={usuario?.imagem || ''} />
                <AvatarFallback>
                  {getInitials(usuario?.nome || 'Usuário')}
                </AvatarFallback>
              </Avatar>

              <div className="text-left">
                <h3 className="font-semibold text-sm text-zinc-700 leading-tight dark:text-zinc-200">
                  {usuario?.nome || 'Usuário'}
                </h3>
                <p className="mt-0.5 text-[11px] text-zinc-400 uppercase tracking-wider">
                  {usuario?.tipoUsuario || 'Voluntário'}
                </p>
              </div>
            </>
          )}
        </Button>
      </DropdownMenuTrigger>

      {/* O menu só fica disponível se não estiver carregando */}
      {!isLoading && (
        <DropdownMenuContent
          align="center"
          className="w-[calc(100vw-3rem)] max-w-70 space-y-3 px-2 py-6 dark:bg-zinc-900"
          sideOffset={6}
        >
          {DropdownMenuLinks.map((item) => (
            <DropdownMenuItem asChild key={item.link}>
              <Link
                className="block w-full rounded-md px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                href={item.link}
              >
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}

          <DropdownMenuItem asChild>
            <Button
              className="w-full justify-start px-3 py-2"
              disabled={isLoggingOut}
              onClick={handleLogout}
              variant="destructive"
            >
              Sair
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  )
}
