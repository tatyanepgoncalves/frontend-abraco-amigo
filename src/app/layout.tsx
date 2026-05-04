import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import Header from '@/components/header/header'

const interSans = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
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
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${interSans.variable} ${plusJakartaSans.variable} flex min-h-full flex-col bg-zinc-50 font-plusJakartaSans`}
        suppressHydrationWarning
      >
        <Toaster position="top-right" richColors />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
