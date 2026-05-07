'use client'

import { Handshake, LogOut, Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import useSidebar from '@/hooks/use-sidebar'
import { cn } from '@/lib/utils'
import { menuItems, menuItemsGestor } from '@/types/menu'
import DropdownSystem from './dropdown-system'

export default function MenuMobile() {
  const pathname = usePathname()

  const { isUser } = useSidebar()
  const isGestor = isUser?.tipoUsuario === 'GESTOR'
  const visibleMenuItems = isGestor ? menuItemsGestor : menuItems

  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('usuario-logado')
    router.push('/')
  }

  return (
    <header className="flex items-center justify-between bg-emerald-800 px-6 py-4 shadow-md transition-all duration-500 lg:hidden">
      <Link className="text-neutral-50" href="/dashboard">
        <Handshake className="h-7 w-7" />
      </Link>

      <Sheet>
        <SheetTrigger>
          <Menu className="cursor-pointer text-white" />
        </SheetTrigger>

        <SheetContent
          className="justify-around border-r-0 bg-emerald-800 px-6"
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
                      isActive ? 'text-white' : 'text-neutral-300'
                    )}
                    href={item.href}
                  >
                    <Icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                </SheetClose>
              )
            })}

            <Button
              className="w-full justify-start"
              onClick={handleLogout}
              variant="buttonSheet"
            >
              <LogOut className="h-5 w-5" /> Sair
            </Button>
          </nav>

          <DropdownSystem />
        </SheetContent>
      </Sheet>
    </header>
  )
}
