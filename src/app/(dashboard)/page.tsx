import { DashboardStats } from '@/components/home/dashboard-stats'
import LocationCard from '@/components/home/location-card'
import { getLocations } from '@/services/location-service'

export default async function Home() {
  const locations = await getLocations()

  return (
    <div className="w-full p-6">
      {/* Grid de KPIs Rápidos */}
      <DashboardStats locations={locations} />

      {/* Grid de Cards */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {locations.map((loc) => (
          <LocationCard key={loc.id} location={loc} />
        ))}
      </section>
    </div>
  )
}
