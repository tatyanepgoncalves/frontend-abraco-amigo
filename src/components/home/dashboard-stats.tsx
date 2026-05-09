'use client'

import { useEffect, useState } from 'react'

interface StatsProps {
  locations: any[]
}

export function DashboardStats({ locations }: StatsProps) {
  const [mySubscribingCount, setMySubscribingCount] = useState(0)

  useEffect(() => {
    // Pegamos nossas inscrições do localStorage
    const saved = JSON.parse(localStorage.getItem('my-subscriptions') || '[]')
    setMySubscribingCount(saved.length)

    // Opcional: Escutar mudanças no localStorage caso o usuário se inscreva sem dar F5
    const handleStorageChange = () => {
      const updated = JSON.parse(
        localStorage.getItem('my-subscriptions') || '[]'
      )
      setMySubscribingCount(updated.length)
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  // Calculamos as necessidades críticas dinamicamente dos dados
  const criticalNeedsCount = locations.reduce((acc, loc) => {
    const hasCritical = loc.needs.some((n: any) => n.urgency === 'Alta')
    return hasCritical ? acc + 1 : acc
  }, 0)

  // Calculamos o total de voluntários ativos no sistema + você
  const totalVolunteers =
    locations.reduce((acc, loc) => acc + loc.currentVolunteers, 0) +
    mySubscribingCount

  return (
    <section className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
      {/* Total de Locais - Estático vindo da API/Mock */}
      <div className="rounded-lg border-blue-500 border-l-4 bg-white p-4 shadow-sm dark:bg-neutral-800">
        <p className="font-bold text-slate-500 text-sm uppercase tracking-wider dark:text-neutral-300">
          Total de Locais
        </p>
        <p className="font-bold text-2xl dark:text-neutral-200">
          {locations.length}
        </p>
      </div>

      {/* Necessidades Críticas - Calculado dinamicamente */}
      <div className="rounded-lg border-red-500 border-l-4 bg-white p-4 shadow-sm dark:bg-neutral-800">
        <p className="font-bold text-slate-500 text-sm uppercase tracking-wider dark:text-neutral-300">
          Locais em Emergência
        </p>
        <p className="font-bold text-2xl dark:text-neutral-200">
          {criticalNeedsCount}
        </p>
        <p className="text-[10px] text-slate-400 dark:text-neutral-400">
          Locais com urgência alta
        </p>
      </div>

      {/* Voluntários Ativos - Soma do Mock + Suas inscrições no LocalStorage */}
      <div className="rounded-lg border-green-500 border-l-4 bg-white p-4 shadow-sm dark:bg-neutral-800">
        <p className="font-bold text-slate-500 text-sm uppercase tracking-wider dark:text-neutral-300">
          Total de voluntários
        </p>
        <p className="font-bold text-2xl text-green-600 dark:text-neutral-200">
          {totalVolunteers}
        </p>
      </div>
    </section>
  )
}
