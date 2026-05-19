

import { statsPublicData } from '@/schema/dashboard-schema'


interface StatsProps {
  stats: statsPublicData
  type?: string
}

export function DashboardStats({ stats }: StatsProps) {


  return (
    <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Voluntários Engajados */}
      <div className="rounded-lg border-l-blue-500  border-l-4 bg-card p-4 shadow-sm">
        <p className="font-bold text-slate-500 text-sm uppercase tracking-wider dark:text-neutral-300">
          Voluntários Engajados
        </p>
        <p className="font-bold text-2xl text-blue-600">
          {stats.totalVoluntariosEngajados}
        </p>
      </div>

      {/* Itens Arrecadados */}
      <div className="rounded-lg border-l-green-500 border-l-4 bg-card p-4 shadow-sm ">
        <p className="font-bold text-slate-500 text-sm uppercase tracking-wider dark:text-neutral-300">
          Itens Arrecadados
        </p>
        <p className="font-bold text-2xl text-green-600">
          {stats.totalItensArrecadados}
        </p>
      </div>


      {/* Demandas atendidas finalizadas */}
      <div className="rounded-lg border-l-purple-500 border-l-4 bg-card p-4 shadow-sm ">
        <p className="font-bold text-slate-500 text-sm uppercase tracking-wider dark:text-neutral-300">
          Demandas Atendidas
        </p>
        <p className="font-bold text-2xl text-purple-600">
          {stats.demandasAtendidas}
        </p>
      </div>

      {/* Demandas abertas */}
      <div className="rounded-lg border-l-indigo-500 border-l-4 bg-card p-4 shadow-sm ">
        <p className="font-bold text-slate-500 text-sm uppercase tracking-wider dark:text-neutral-300">
          Demandas Abertas
        </p>
        <p className="font-bold text-2xl text-indigo-600">
          {stats.demandasAbertas}
        </p>
      </div>

      {/* Demandas com prioridade Alta */}
      <div className="rounded-lg border-l-orange-500 border-l-4 bg-card p-4 shadow-sm ">
        <p className="font-bold text-slate-500 text-sm uppercase tracking-wider dark:text-neutral-300">
          Demandas com prioridade Alta
        </p>
        <p className="font-bold text-2xl text-orange-600">
          {stats.demandasAltas}
        </p>
      </div>

      {/* Demandas com prioridade Crítica */}
      <div className="rounded-lg border-l-red-500 border-l-4 bg-card p-4 shadow-sm ">
        <p className="font-bold text-slate-500 text-sm uppercase tracking-wider dark:text-neutral-300">
          Demandas com prioridade Crítica
        </p>
        <p className="font-bold text-2xl text-red-600">
          {stats.demandasCriticas}
        </p>
      </div>

    </section>
  )
}
