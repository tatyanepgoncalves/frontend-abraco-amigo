import Link from 'next/link'
import ThemeToggle from '../theme-toggle'

export default function Header() {
  return (
    <header className="sticky top-0 w-full border-b bg-card px-6 py-4">
      <div className="flex w-full items-center justify-between">
        <Link href="/">
          <h2 className="font-semibold text-xl text-zinc-900 dark:text-zinc-100">
            Abraço Amigo
          </h2>
          <p className="text-muted-foreground text-sm">
            Central de Coordernação de Apoio
          </p>
        </Link>

        <div className="flex items-center gap-6">
          <div>
            <Link href="/cadastrar">Cadastrar</Link>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
