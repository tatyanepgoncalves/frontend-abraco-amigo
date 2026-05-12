'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      className="rounded-full text-white"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      size="icon-lg"
      variant="ghost"
    >
      <Sun size={16} className="w-8 h-8 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon  className="w-8 h-8 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Alternar tema</span>
    </Button>
  )
}
