'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useState } from 'react'
import { AuthProvider } from '@/context/AuthContext'
import { VolunteerProvider } from '@/context/VolunteerContext'

export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient[0]}>
      <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
        <AuthProvider>
          <VolunteerProvider>{children}</VolunteerProvider>
        </AuthProvider>
      </NextThemesProvider>
    </QueryClientProvider>
  )
}
