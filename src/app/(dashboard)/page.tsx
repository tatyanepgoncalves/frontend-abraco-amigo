import { DashboardStats } from '@/components/home/dashboard-stats'
import LocationCard from '@/components/home/location-card'
import { getLocations } from '@/services/location-service'
import { getStatsPublic } from '@/services/stats-service'

export default async function Home() {
  const [stats, locais] = await Promise.all([getStatsPublic(), getLocations()])

  return (
    <div className="w-full space-y-8 p-6">
      {/* Grid de KPIs Rápidos */}
      <DashboardStats stats={stats} />

      <section className="space-y-4">
        <div>
          <h2 className="font-bold text-2xl text-zinc-900 tracking-tight dark:text-neutral-100">
            Locais Necessitando de Apoio
          </h2>
          <p className="text-sm text-zinc-500 dark:text-neutral-400">
            Selecione uma unidade abaixo para visualizar as demandas ativas de
            insumos e missões de voluntariado.
          </p>
        </div>

        <div>
          {locais.length === 0 ? (
            <div className="w-full rounded-xl border border-zinc-200 border-dashed p-12 text-center dark:border-neutral-700">
              <p className="text-zinc-500 dark:text-neutral-400">
                Nenhum local cadastrado necessita de ajuda no momento.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {locais.map((local) => (
                <LocationCard key={local.id} location={local} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
