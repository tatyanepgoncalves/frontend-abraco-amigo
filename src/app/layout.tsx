import type { Metadata } from 'next'
import { Public_Sans } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import { cn } from '@/lib/utils'
import { Providers } from './providers/providers'

const publicSansHeading = Public_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
})

const publicSans = Public_Sans({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Abraço Amigo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      className={cn(
        publicSansHeading.variable,
        'font-sans',
        publicSans.variable
      )}
      lang="pt-BR"
      suppressHydrationWarning
    >
      <body
        className={cn(
          publicSans.variable,
          'flex min-h-screen flex-col bg-neutral-50 font-sans dark:bg-neutral-950'
        )}
        suppressHydrationWarning
      >
        <Toaster position="top-right" richColors />

        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
