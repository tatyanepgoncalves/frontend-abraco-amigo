'use server'

import SectionStatsPublic from '@/components/home/section-stats-public'
import { getStatsPublic } from '@/service/home-service'

export default async function Home() {
  const stats = await getStatsPublic().catch(() => null)

  return (
    <div className="h-[78.5vh] max-h-screen px-6">
      <SectionStatsPublic stats={stats} />
    </div>
  )
}
