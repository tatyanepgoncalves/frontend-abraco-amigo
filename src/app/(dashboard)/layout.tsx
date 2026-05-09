import ThemeToggle from '@/components/theme-toggle'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* HEADER FIXO */}
      <header className="border-b bg-card px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <h1 className="font-bold text-2xl text-foreground">Abraço Amigo</h1>
            <p className="text-muted-foreground text-sm">
              Central de Coordenação de Esforços
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* O botão de tema agora fica no layout global */}
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* CONTEÚDO DA PÁGINA */}
      <main className="w-full px-6">{children}</main>
    </div>
  )
}
