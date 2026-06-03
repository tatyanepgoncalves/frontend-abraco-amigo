'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from '@/components/layout/theme-toggle'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { menuLinks } from '@/types/menu'
import DropdownAvatar from './dropdown-avatar'

export default function HeaderMobile() {
  const pathname = usePathname()

  return (
    <header className="sticky block w-full border-b bg-card px-6 py-4 shadow-md md:hidden">
      <div className="flex w-full items-center justify-between">
        <Link href="/home">
          <h2 className="font-semibold text-xl text-zinc-900 dark:text-zinc-100">
            Abraço Amigo
          </h2>
          <p className="text-muted-foreground text-sm">
            Central de Coordernação de Apoio
          </p>
        </Link>

        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="" variant="outline">
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent className="flex h-screen flex-col justify-between py-16">
              <nav className="flex flex-col justify-between gap-8 px-6">
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

              <div className="mb-4 px-6">
                <DropdownAvatar />
              </div>
            </SheetContent>
          </Sheet>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
