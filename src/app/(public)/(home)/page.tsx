'use server'

import SectionStatsPublic from '@/components/home/section-stats-public'
import SectionTabs from '@/components/home/section-tabs'
import { getStatsPublic } from '@/service/home-service'

export default async function Home() {
  const stats = await getStatsPublic().catch(() => null)

  return (
    <div className="space-y-8 px-6">
      <SectionStatsPublic stats={stats} />
      <SectionTabs />
    </div>
  )
}
