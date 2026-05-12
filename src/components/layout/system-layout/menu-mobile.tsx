'use client'

import { Handshake, Loader2, LogOut, Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ToggleTheme from '@/components/buttons/toggle-theme'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import useLogout from '@/hooks/use-logout'
import useSidebar from '@/hooks/use-sidebar'
import { cn } from '@/lib/utils'
import { menuItems, menuItemsGestor } from '@/types/menu'
import DropdownSystem from './dropdown-system'

export default function MenuMobile() {
  const { isLoggingOut, handleLogout } = useLogout()
  const pathname = usePathname()

  const { isUser } = useSidebar()
  const isGestor = isUser?.tipoUsuario === 'GESTOR'
  const visibleMenuItems = isGestor ? menuItemsGestor : menuItems

  return (
    <header className="flex items-center justify-between bg-primary px-6 py-4 shadow-md transition-all duration-500 lg:hidden">
      <Link className="text-neutral-50" href="/dashboard">
        <Handshake className="h-7 w-7" />
      </Link>

      <div className="flex items-center gap-2">
        <ToggleTheme />

        <Sheet>
          <SheetTrigger>
            <Menu className="cursor-pointer text-white" />
          </SheetTrigger>

          <SheetContent
            className="justify-around border-r-0 bg-primary px-6"
            showCloseButton={false}
          >
            <nav className="space-y-8">
              {visibleMenuItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href

                return (
                  <SheetClose asChild key={item.name}>
                    <Link
                      className={cn(
                        'flex items-center gap-2 py-2 text-sm transition-all duration-500 hover:border-b hover:border-b-white hover:text-white',
                        isActive ? 'text-white' : 'text-zinc-300'
                      )}
                      href={item.href}
                    >
                      <Icon className="h-5 w-5 shrink-0" />
                      {item.name}
                    </Link>
                  </SheetClose>
                )
              })}

              <Button
                className="w-full justify-start rounded-none px-0 py-2 text-sm text-zinc-300 transition-all duration-500 hover:border-b hover:border-b-white hover:bg-transparent hover:text-white dark:hover:bg-transparent"
                onClick={handleLogout}
                variant="ghost"
              >
                {isLoggingOut ? (
                  <>
                    <Loader2 className="h-5 w-5 shrink-0" />
                    <span>Saindo...</span>
                  </>
                ) : (
                  <>
                    <LogOut className="h-5 w-5 shrink-0" />
                    <span>Sair</span>
                  </>
                )}
              </Button>
            </nav>

            <DropdownSystem />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
