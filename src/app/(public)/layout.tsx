import Header from '@/components/layout/public/header'

interface LayoutPublicProps {
  children: React.ReactNode
}

export default function LayoutPublic({ children }: LayoutPublicProps) {
  return (
    <div className="space-y-8">
      <Header />
      <section>{children}</section>
    </div>
  )
}
