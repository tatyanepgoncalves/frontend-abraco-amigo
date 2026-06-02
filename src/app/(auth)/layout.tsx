import Header from '@/components/layout/public/header'

interface LayoutAuthProps {
  children: React.ReactNode
}

export default function LayoutAuth({ children }: LayoutAuthProps) {
  return (
    <div className="min-h-screen space-y-8">
      <Header />
      <section className="flex h-full max-h-screen min-h-[80vh] items-center px-6">
        {children}
      </section>
    </div>
  )
}
