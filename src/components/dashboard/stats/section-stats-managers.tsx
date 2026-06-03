import {
  BellCheck,
  BicepsFlexed,
  Boxes,
  PackageCheck,
  PackageOpen,
  TriangleAlert,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { StatsManagerData } from '@/schema/dashboard/stats-manager-schema'

interface StatsProps {
  stats: StatsManagerData
}

export default function SectionStatsManagers({ stats }: StatsProps) {
  if (!stats) {
    return (
      <div className="w-full rounded-xl border border-zinc-200 border-dashed bg-card/50 p-12 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
        Estatísticas temporariamente indisponíveis.
      </div>
    )
  }

  return (
    // Grid responsivo de 1 coluna em mobile, 2 em tablet e 3 em desktop
    <section className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {/* ================= VOLUNTARIADO ================= */}
      <Card className="border-zinc-200/80 shadow-sm dark:border-zinc-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <p className="font-medium text-sm text-zinc-500 dark:text-zinc-400">
            Vagas Abertas
          </p>
          <div className="rounded-md bg-cyan-50 p-2 text-cyan-600 dark:bg-cyan-950/40 dark:text-cyan-400">
            <BicepsFlexed className="h-4 w-4" />
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle className="font-bold text-3xl tracking-tight">
            {stats.voluntariado.totalVagasAbertas}
          </CardTitle>
          <p className="mt-1 text-xs text-zinc-400">
            Oportunidades de voluntariado ativas
          </p>
        </CardContent>
      </Card>

      <Card className="border-zinc-200/80 shadow-sm dark:border-zinc-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <p className="font-medium text-sm text-zinc-500 dark:text-zinc-400">
            Candidaturas Realizadas
          </p>
          <div className="rounded-md bg-cyan-50 p-2 text-cyan-600 dark:bg-cyan-950/40 dark:text-cyan-400">
            <BellCheck className="h-4 w-4" />
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle className="font-bold text-3xl tracking-tight">
            {stats.voluntariado.totalCandidaturasRealizadas}
          </CardTitle>
          <p className="mt-1 text-xs text-zinc-400">
            Interesses manifestados na plataforma
          </p>
        </CardContent>
      </Card>

      {/* ================= DOAÇÕES ================= */}
      <Card className="border-zinc-200/80 shadow-sm dark:border-zinc-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <p className="font-medium text-sm text-zinc-500 dark:text-zinc-400">
            Registros de Doações
          </p>
          <div className="rounded-md bg-emerald-50 p-2 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
            <Boxes className="h-4 w-4" />
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle className="font-bold text-3xl tracking-tight">
            {stats.doacoesInsumos.totalRegistrosDoacoes}
          </CardTitle>
          <p className="mt-1 text-xs text-zinc-400">
            Fluxos e entregas registradas
          </p>
        </CardContent>
      </Card>

      <Card className="border-zinc-200/80 shadow-sm dark:border-zinc-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <p className="font-medium text-sm text-zinc-500 dark:text-zinc-400">
            Itens Arrecadados
          </p>
          <div className="rounded-md bg-emerald-50 p-2 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
            <PackageCheck className="h-4 w-4" />
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle className="font-bold text-3xl tracking-tight">
            {stats.doacoesInsumos.totalItensArrecadados}
          </CardTitle>
          <p className="mt-1 text-xs text-zinc-400">
            Volume total de insumos recebidos
          </p>
        </CardContent>
      </Card>

      {/* ================= DEMANDAS ================= */}
      <Card className="border-zinc-200/80 shadow-sm dark:border-zinc-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <p className="font-medium text-sm text-zinc-500 dark:text-zinc-400">
            Demandas Abertas
          </p>
          <div className="rounded-md bg-zinc-100 p-2 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
            <PackageOpen className="h-4 w-4" />
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle className="font-bold text-3xl tracking-tight">
            {stats.demandasStatus.totalAbertas}
          </CardTitle>
          <p className="mt-1 text-xs text-zinc-400">
            Necessidades aguardando atendimento
          </p>
        </CardContent>
      </Card>

      {/* Destaque destrutivo/alerta para o caso crítico */}
      <Card className="border-red-200 bg-red-50/20 shadow-sm dark:border-red-950 dark:bg-red-950/10">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <p className="font-medium text-red-800 text-sm dark:text-red-400">
            Demandas Críticas
          </p>
          <div className="animate-pulse rounded-md bg-red-100 p-2 text-red-600 dark:bg-red-950 dark:text-red-400">
            <TriangleAlert className="h-4 w-4" />
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle className="font-bold text-3xl text-red-700 tracking-tight dark:text-red-400">
            {stats.demandasStatus.criticasPreocupantes}
          </CardTitle>
          <p className="mt-1 text-red-600/80 text-xs dark:text-red-400/70">
            Requerem atenção imediata
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
