import { DashboardStats } from '@/components/home/dashboard-stats'
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
      <DashboardStats locations={locations} />

      {/* Grid de Cards */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {locations.map((loc) => (
          <LocationCard key={loc.id} location={loc} />
        ))}
      </section>
    </main>
  )
}
