'use client'

import { useState } from 'react'
import Header from '@/components/layout/public/header'

interface LayoutPublicProps {
  children: React.ReactNode
}

export default function LayoutPublic({ children }: LayoutPublicProps) {
  const [isLoading] = useState(true)

  return (
    <div className="min-h-screen space-y-8">
      <Header isLoading={isLoading} />
      <section className="">{children}</section>
    </div>
  )
}
