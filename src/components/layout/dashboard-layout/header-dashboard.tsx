import Link from "next/link"
import ThemeToggle from "@/components/theme-toggle"

export default function HeaderDashboard() {
  return (
      <header className="w-full space-y-4 border-b bg-card px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href='/'>
            <h1 className="font-bold text-2xl text-foreground">Abraço Amigo</h1>
            <p className="text-muted-foreground text-sm">
              Central de Coordenação de Esforços
            </p>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              className="hidden text-sm text-zinc-800 md:block dark:text-zinc-300"
              href="/entrar"
            >
              Entrar na conta
            </Link>
            <Link
              className="hidden text-sm text-zinc-800 md:block dark:text-zinc-300"
              href="/cadastrar"
            >
              Criar uma conta
            </Link>
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center justify-around md:hidden">
          <Link
            className="text-sm text-zinc-700 dark:text-zinc-300"
            href="/entrar"
          >
            Entrar na conta
          </Link>
          <Link
            className="text-sm text-zinc-700 dark:text-zinc-300"
            href="/cadastrar"
          >
            Criar uma conta
          </Link>
        </div>
      </header>
  )
}
