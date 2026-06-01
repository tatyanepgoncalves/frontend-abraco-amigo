import { getLocationWithoutFilter } from '@/service/location-service'
import CardLocais from './card-locais'

export default async function LocaisTabs() {
  const locations = await getLocationWithoutFilter()

  return (
    <section className="w-full space-y-6">
      <div>
        <h2 className="flex items-center gap-2 font-bold text-2xl text-foreground tracking-tight">
          Últimas Instituições Atualizadas
        </h2>
        <p className="text-muted-foreground text-sm">
          Locais cadastrados recentemente ou com alertas críticos necessitando
          de voluntários/insumos.
        </p>
      </div>

      <div className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-4">
        {locations.locais.length === 0 ? (
          <p className="text-muted-foreground">Nenhum local cadastrado.</p>
        ) : (
          locations.locais.map((location) => (
            <CardLocais key={location.id} locais={location} />
          ))
        )}
      </div>
    </section>
  )
}
