import { getLocationWithoutFilter } from '@/service/location-service'
import CardLocais from './card-locais'

export default async function LocaisTabs() {
  const locations = await getLocationWithoutFilter()

  return (
    <section className="w-full space-y-6">
      <div className="text-center md:text-left">
        <h2 className="font-bold text-2xl text-foreground tracking-tight">
          Últimas Instituições Atualizadas
        </h2>
        <p className="text-muted-foreground text-sm">
          Locais cadastrados recentemente ou com alertas críticos necessitando
          de voluntários/insumos.
        </p>
      </div>

      <section className="grid md:grid-cols-2 lg:grid-cols-4">
        {locations.length === 0 ? (
          <div className="w-full rounded-xl border border-zinc-300 border-dashed bg-card p-12 text-center md:col-span-2 lg:col-span-4 dark:border-zinc-600">
            <p className="text-zinc-500 dark:text-zinc-400">
              Nenhum local cadastrado.
            </p>
          </div>
        ): (
          locations.map((local) => (
            <CardLocais key={local.id} locais={local} />
          ))
        )}
      </section>

      {/* <div className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-4">
        {locations.locais.length === 0 ? (
          <p className="text-muted-foreground">Nenhum local cadastrado.</p>
        ) : (
          
          // locations.locais.map((location) => (
          //   <CardLocais key={location.id} locais={location} />
          // ))
        )}
      </div> */}
    </section>
  )
}
