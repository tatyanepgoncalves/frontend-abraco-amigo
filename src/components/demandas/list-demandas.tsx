// components/dashboard/demandas/lista-demandas.tsx
'use client'

import { Inbox, Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { api } from '@/lib/axios'
import DemandaCard, { type DemandaData } from './demanda-card'

export default function ListaDemandas() {
  const [demandas, setDemandas] = useState<DemandaData[]>([])
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  useEffect(() => {
    async function carregarDemandas() {
      try {
        setLoading(true)
        setErrorMsg(null)

        // Substitua pelo caminho real absoluto ou relativo da sua API
        const response = await api.get<{
          demandas: DemandaData[]
          mensagem?: string
        }>('/demandas')

        const { demandas: listaObtida, mensagem } = response.data

        if (listaObtida && listaObtida.length > 0) {
          setDemandas(listaObtida)
        } else if (mensagem) {
          // Captura o status 200 que o seu Fastify envia quando a tabela está vazia
          setErrorMsg(mensagem)
          toast.error(mensagem)
        } else {
          toast.info('Nenhuma demanda pendente no momento.')
          setErrorMsg('Nenhuma demanda pendente no momento.')
        }
        // biome-ignore lint/suspicious/noExplicitAny: it's necessary
      } catch (err: any) {
        setErrorMsg(err.message || 'Erro ao carregar lista de solicitações.')
        toast.error(err.message || 'Erro ao carregar lista de solicitações.')
      } finally {
        setLoading(false)
      }
    }

    carregarDemandas()
  }, [])

  // 1. ESTADO CARREGANDO
  if (loading) {
    return (
      <div className="flex min-h-100 w-full flex-col items-center justify-center gap-3">
        <Loader2 className="h-8 w-8 animate-spin text-cyan-600 dark:text-cyan-400" />
        <p className="font-medium text-sm text-zinc-500">
          Buscando demandas ativas...
        </p>
      </div>
    )
  }

  // ESTADO VAZIO OU ERRO
  if (errorMsg || demandas.length === 0) {
    return (
      <div className="flex min-h-87.5 w-full flex-col items-center justify-center rounded-xl border border-zinc-200 border-dashed bg-card/40 p-8 text-center dark:border-zinc-800">
        <div className="mb-3 rounded-full bg-zinc-100 p-3 text-zinc-400 dark:bg-zinc-900">
          <Inbox className="h-6 w-6" />
        </div>
        <h3 className="font-semibold text-base text-zinc-700 dark:text-zinc-300">
          Mural de Demandas
        </h3>
        <p className="mt-1 max-w-xs text-sm text-zinc-400">
          {errorMsg || 'Nenhuma demanda pendente no momento.'}
        </p>
      </div>
    )
  }

  // RENDERIZAÇÃO DA GRADE COM SUCESSO
  // Grid responsivo ajustado para o tamanho dos Cards
  return (
    <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {demandas.map((demanda) => (
        <DemandaCard key={demanda.id} {...{ demanda }} />
      ))}
    </div>
  )
}
