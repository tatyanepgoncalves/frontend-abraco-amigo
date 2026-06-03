import { BicepsFlexed, PackageCheck, TriangleAlert } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { StatsGeneralData } from '@/schema/dashboard/stats-general-schema'

interface StatsProps {
  stats: StatsGeneralData
}

export default function SectionGlobal({ stats }: StatsProps) {
  return (
    <section className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {/* DEMANDAS ABERTAS */}
      <Card className="border-zinc-200/80 shadow-sm dark:border-zinc-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <p className="font-medium text-sm text-zinc-500 dark:text-zinc-400">
            Total de Abertas
          </p>
          <div className="rounded-md bg-cyan-50 p-2 text-cyan-600 dark:bg-cyan-950/40 dark:text-cyan-400">
            <BicepsFlexed className="h-4 w-4" />
          </div>
        </CardHeader>

        <CardContent>
          <CardTitle className="font-bold text-3xl tracking-tight">
            {stats.totalAbertas}
          </CardTitle>
          <p className="mt-1 text-xs text-zinc-400">
            Oportunidades de voluntariado e doações ativas
          </p>
        </CardContent>
      </Card>

      {/* DEMANDAS CRÍTICAS E PREOCUPANTES */}
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
            {stats.criticasPreocupantes}
          </CardTitle>
          <p className="mt-1 text-red-600/80 text-xs dark:text-red-400/70">
            Requerem atenção imediata
          </p>
        </CardContent>
      </Card>

      {/* DEMANDAS COMPLETAS  */}
      <Card className="border-zinc-200/80 shadow-sm dark:border-zinc-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <p className="font-medium text-sm text-zinc-500 dark:text-zinc-400">
            Total de Completas
          </p>
          <div className="rounded-md bg-emerald-50 p-2 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
            <PackageCheck className="h-4 w-4" />
          </div>
        </CardHeader>

        <CardContent>
          <CardTitle className="font-bold text-3xl tracking-tight">
            {stats.totalCompletas}
          </CardTitle>
          <p className="mt-1 text-xs text-zinc-400">
            Oportunidades de voluntariado e doações completas
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
