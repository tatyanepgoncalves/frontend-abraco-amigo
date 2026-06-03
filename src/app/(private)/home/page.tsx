import SectionGlobal from '@/components/dashboard/stats/section-global'
import SectionStatsManagers from '@/components/dashboard/stats/section-stats-managers'
import { getStatsGeneral, getStatsManager } from '@/service/home-service'
import { getUserProfile } from '@/service/user-service'

export default async function Home() {
  const [usuario, statsGestores, statsGerais] = await Promise.all([
    getUserProfile().catch(() => null),
    getStatsManager().catch(() => null),
    getStatsGeneral().catch(() => null),
  ])

  const isGestor = usuario?.tipoUsuario === 'GESTOR'
  const firstName = usuario?.nome.split(' ')[0] || 'Usuário'

  return (
    <div className="space-y-4 px-6 md:px-0 md:pr-6">
      <div className="">
        <h2 className="font-medium text-zinc-700 dark:text-zinc-200">
          Bem-vindo, {firstName}
        </h2>
        <h1 className="font-bold font-heading text-2xl">Painel de controle</h1>
        <h2 className="text-sm text-zinc-600 dark:text-zinc-300">
          Aqui você encontrar as principais funcionalidades do sistema.
        </h2>
      </div>

      {isGestor ? (
        <SectionStatsManagers stats={statsGestores} />
      ) : (
        <SectionGlobal stats={statsGerais} />
      )}
    </div>
  )
}
