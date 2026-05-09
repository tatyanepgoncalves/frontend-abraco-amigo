
import HeaderDashboard from '@/components/layout/dashboard-layout/header-dashboard'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* HEADER FIXO */}
      <HeaderDashboard />

      {/* CONTEÚDO DA PÁGINA */}
      <main className="w-full px-6">{children}</main>
    </div>
  )
}
