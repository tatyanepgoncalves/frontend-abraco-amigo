'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import { menuLinks } from '@/types/menu'
import DropdownAvatar from './dropdown-avatar'

export default function HeaderDesktop() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/home">
          <h2 className="font-semibold text-xl text-zinc-900 dark:text-zinc-100">
            Abraço Amigo
          </h2>
          <p className="text-muted-foreground text-sm">
            Central de Coordernação de Apoio
          </p>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <nav className="flex flex-col gap-8">
          {menuLinks.map((item) => {
            const isActive = pathname === item.link

            return (
              <Link
                className={cn(
                  'p-1 text-zinc-400 hover:border-b hover:border-b-cyan-700 hover:text-cyan-700 dark:text-zinc-500 hover:dark:border-b-cyan-400 hover:dark:text-cyan-400',
                  isActive &&
                    'border-b border-b-cyan-700 text-cyan-700 dark:border-b-cyan-400 dark:text-cyan-400'
                )}
                href={item.link}
                key={item.label}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </SidebarContent>

      <SidebarFooter>
        <DropdownAvatar />
      </SidebarFooter>
    </Sidebar>
  )
}
