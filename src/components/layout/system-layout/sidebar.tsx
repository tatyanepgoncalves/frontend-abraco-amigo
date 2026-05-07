'use client'

import { ArrowLeft, ArrowRight, Handshake } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import useSidebar from '@/hooks/use-sidebar'
import { cn } from '@/lib/utils'
import { menuItems, menuItemsGestor } from '@/types/menu'
import DropdownSystem from './dropdown-system'

export default function Sidebar() {
  const { isCollapsed, toggleSibebar, isUser } = useSidebar()
  const pathname = usePathname()

  const isGestor = isUser?.tipoUsuario === 'GESTOR'

  const visibleMenuItems = isGestor ? menuItemsGestor : menuItems

  return (
    <aside
      className={cn(
        'sticky left-0 hidden h-screen flex-col justify-between bg-emerald-800 px-4 py-6 shadow-md transition-all duration-500 lg:flex',
        isCollapsed ? 'w-20' : 'w-64'
      )}
    >
      <section className="relative flex w-full items-center justify-between">
        <Link
          className={
            'flex items-center gap-2 text-md text-neutral-50 transition-all duration-500'
          }
          href="/dashboard"
        >
          <Handshake className="md:h-8 md:w-8" />
          <span className={cn(isCollapsed ? 'hidden' : 'block')}>
            Abraço Amigo
          </span>
        </Link>
        <Button
          className="absolute right-[-40]"
          onClick={toggleSibebar}
          variant="secondary"
        >
          {isCollapsed ? <ArrowRight /> : <ArrowLeft />}
        </Button>
      </section>

      <nav className="flex flex-col gap-6">
        {visibleMenuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              className={cn(
                'flex items-center gap-2 transition-colors duration-500 hover:text-white',
                isActive ? 'text-white' : 'text-neutral-300',
                isCollapsed ? 'justify-center' : ''
              )}
              href={item.href}
              key={item.name}
            >
              <Icon className="h-5 w-5 shrink-0" />
              <span className={cn(isCollapsed ? 'sr-only' : 'not-sr-only')}>
                {item.name}
              </span>
            </Link>
          )
        })}
      </nav>

      <DropdownSystem />
    </aside>
  )
}
