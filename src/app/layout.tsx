import type { Metadata } from 'next'
import { Inter, Public_Sans } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import { AuthProvider } from '@/context/AuthContext'
import { cn } from '@/lib/utils'

const publicSansHeading = Public_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
})

const interSans = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

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
      className={cn(publicSansHeading.variable)}
      lang="pt-BR"
      suppressHydrationWarning
    >
      <body
        className={`${interSans.variable} flex min-h-screen flex-col bg-neutral-50 font-sans`}
        suppressHydrationWarning
      >
        <Toaster position="top-right" richColors />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
