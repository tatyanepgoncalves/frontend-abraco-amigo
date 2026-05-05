import type React from 'react'
import Footer from '@/components/layout/auth-layout/footer'
import Header from '@/components/layout/auth-layout/header'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen w-full flex-col justify-between">
      <Header />
      <main className="flex h-full flex-col items-center justify-center px-6 py-10">
        {children}
      </main>
      <Footer />
    </div>
  )
}
