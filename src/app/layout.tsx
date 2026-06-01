import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'
import { Providers } from './providers/providers'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Abraço Amigo',
  description: 'Sistema de apoio nos momentos de necessidade.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      className={cn('antialiased', 'font-sans', outfit.variable)}
      lang="pt-BR"
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950">
        <Toaster position="top-center" richColors />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
