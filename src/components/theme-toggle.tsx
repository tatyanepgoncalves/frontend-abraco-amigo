'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      className="rounded-full"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      size="icon"
      variant="ghost"
    >
      <Sun className="h-8 w-8 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-8 w-8 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Alternar tema</span>
    </Button>
  )
}
