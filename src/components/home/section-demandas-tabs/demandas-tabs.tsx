import { getLastestDemandas } from '@/service/home-service'
import CardDemanda from './card-demanda'

export default async function DemandasTabs() {
  const lastDemandas = await getLastestDemandas().catch(() => [])

  return (
    <section className="w-full space-y-6">
      <div>
        <h2 className="font-bold text-2xl text-zinc-900 tracking-tight dark:text-neutral-100">
          Últimas Demandas adicionadas
        </h2>
        <p className="text-sm text-zinc-500 dark:text-neutral-400">
          Selecione uma demanda abaixo para visualizar as demandas ativas de
          insumos e missões de voluntariado.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {lastDemandas.length === 0 ? (
          <p className="text-zinc-500 dark:text-neutral-400">
            Nenhuma demanda encontrada.
          </p>
        ) : (
          lastDemandas.map((demanda) => (
            <CardDemanda demanda={demanda} key={demanda.id} />
          ))
        )}
      </div>
    </section>
  )
}
