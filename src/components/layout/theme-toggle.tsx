'use client'

import { useTheme } from 'next-themes'
import { Switch } from '@/components/ui/switch'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
      />
    </div>
  )
}
