import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex w-full items-center justify-center bg-white px-6 py-4 shadow-sm">
      <div className="flex w-full items-center justify-between">
        <Link className="font-semibold text-blue-800 text-md" href="/entrar">
          Abraço Amigo
        </Link>
        <Link className="text-neutral-500 text-sm" href="*">
          Ajuda
        </Link>
      </div>
    </header>
  )
}
