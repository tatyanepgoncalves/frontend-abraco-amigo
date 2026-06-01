import Header from '@/components/layout/public/header'

interface LayoutPublicProps {
  children: React.ReactNode
}

export default function LayoutPublic({ children }: LayoutPublicProps) {
  return (
    <div className="min-h-screen space-y-8">
      <Header />
      <section className="">{children}</section>
    </div>
  )
}
