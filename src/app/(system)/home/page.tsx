'use client'

import useProfile from '@/hooks/use-profile'
import SystemLoading from '../loading'

export default function Home() {
  const { data: usuario, isLoading, error } = useProfile()
  const firstName = usuario?.nome.split(' ')[0]

  if (isLoading) {
    return <SystemLoading />
  }

  if (error) {
    return <div>Erro ao carregar o perfil</div>
  }

  return (
    <div>
      <h2 className="font-medium text-zinc-700">Bem-vindo, {firstName}</h2>
      <h1 className="font-bold font-heading text-2xl">Painel de controle</h1>
      <h2 className="text-sm text-zinc-600">
        Aqui você encontrar as principais funcionalidades do sistema.
      </h2>
    </div>
  )
}
