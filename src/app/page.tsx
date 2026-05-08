import LocationCard from '@/components/home/location-card'
import { getLocations } from '@/services/location-service'

export default async function Home() {
  const locations = await getLocations()

  return (
    <main className="w-full p-6">
      <header className="mb-8">
        <h1 className="font-bold text-3xl text-slate-900">Abraço Amigo</h1>
        <p className="text-slate-600">Central de Coordenação de Esforços</p>
      </header>

      {/* Grid de KPIs Rápidos */}
      <section className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-lg border-blue-500 border-l-4 bg-white p-4 shadow-sm">
          <p className="font-bold text-slate-500 text-sm uppercase tracking-wider">
            Total de Locais
          </p>
          <p className="font-bold text-2xl">{locations.length}</p>
        </div>
        <div className="rounded-lg border-red-500 border-l-4 bg-white p-4 shadow-sm">
          <p className="font-bold text-slate-500 text-sm uppercase tracking-wider">
            Necessidades Críticas
          </p>
          <p className="font-bold text-2xl">12</p>
        </div>
        <div className="rounded-lg border-green-500 border-l-4 bg-white p-4 shadow-sm">
          <p className="font-bold text-slate-500 text-sm uppercase tracking-wider">
            Voluntários Ativos
          </p>
          <p className="font-bold text-2xl">84</p>
        </div>
      </section>

      {/* Grid de Cards */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {locations.map((loc) => (
          <LocationCard key={loc.id} location={loc} />
        ))}
      </section>
    </main>
  )
}
