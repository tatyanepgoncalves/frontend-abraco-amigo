

import ThemeToggle from '@/components/theme-toggle'
import Link from 'next/link'


export default function Header() {
  return (
    <header className='w-full px-6 py-4 border-b bg-card'>
      <div className='flex items-center justify-between w-full'>
        <Link href="/">
          <h1 className="font-bold text-2xl text-foreground">Abraço Amigo</h1>
          <p className="text-muted-foreground text-sm">
            Central de Coordenação de Esforços
          </p>
        </Link>

       
        <ThemeToggle />
      </div>

    </header>
  )

}

