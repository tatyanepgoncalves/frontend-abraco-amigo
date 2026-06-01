import {
  BicepsFlexed,
  CircleAlert,
  CircleCheck,
  PackageOpen,
} from 'lucide-react'
import { Card, CardTitle } from '@/components/ui/card'
import type { StatsPublicData } from '@/schema/home/public-stats-schema'

interface StatsProps {
  stats: StatsPublicData
}

export default function SectionStatsPublic({ stats }: StatsProps) {
  if (!stats) {
    // Se estiver nulo (erro ou sem dados), não renderiza a seção
    return (
      <div className="w-full rounded-xl border border-zinc-300 border-dashed bg-card p-12 text-center text-zinc-500 dark:border-zinc-600 dark:text-zinc-400">
        Estatísticas temporariamente indisponíveis.
      </div>
    )
  }

  return (
    <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
      {/* Voluntários Engajados */}
      <Card className="flex flex-col items-center justify-center bg-white text-center md:max-w-100 dark:bg-zinc-800">
        <CardTitle className="text-3xl">
          {stats.totalVoluntariosEngajados}
        </CardTitle>
        <CardTitle className="flex items-center gap-2 text-sm text-zinc-400">
          <BicepsFlexed className="h-4 w-4 text-primary dark:text-cyan-400" />{' '}
          Voluntários engajados
        </CardTitle>
      </Card>

      {/* Demandas atendidas finalizadas */}
      <Card className="flex flex-col items-center justify-center text-center sm:max-w-100 dark:bg-zinc-800">
        <CardTitle className="text-3xl">{stats.vagasPreenchidas}</CardTitle>
        <CardTitle className="flex items-center gap-2 text-sm text-zinc-400">
          <CircleCheck className="h-4 w-4 text-primary dark:text-cyan-400" />{' '}
          Demandas atendidas
        </CardTitle>
      </Card>

      {/* Demandas abertas */}
      <Card className="flex flex-col items-center justify-center text-center sm:max-w-100 dark:bg-zinc-800">
        <CardTitle className="text-3xl">{stats.demandasAbertas}</CardTitle>
        <CardTitle className="flex items-center gap-2 text-sm text-zinc-400">
          <PackageOpen className="h-4 w-4 text-primary dark:text-cyan-400" />{' '}
          Demandas abertas
        </CardTitle>
      </Card>

      {/* Demandas com prioridade Crítica */}
      <Card className="flex flex-col items-center justify-center text-center sm:max-w-100 dark:bg-zinc-800">
        <CardTitle className="text-3xl">{stats.demandasCriticas}</CardTitle>
        <CardTitle className="flex items-center gap-2 text-sm text-zinc-400">
          <CircleAlert className="h-4 w-4 text-primary dark:text-cyan-400" />{' '}
          Demandas crítica
        </CardTitle>
      </Card>
    </section>
  )
}
