// components/dashboard/demandas/demanda-card.tsx
import {
  AlertTriangle,
  Calendar,
  MapPin,
  Package,
  Tag,
  User,
} from 'lucide-react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

// Tipagem exata mapeada a partir do retorno esperado da sua rota Fastify
export interface DemandaData {
  atualizadoEm: string | null
  categoria: {
    id: string
    nome: string
    descricao: string | null
  }
  criadoEm: string // Data já formatada como string pelo backend
  descricao: string | null
  gestor: {
    id: string
    nome: string
  }
  id: string
  imagem: string | null
  local: {
    id: string
    nome: string
    endereco: string | null
    telefone: string | null
    email: string | null
    tipoLocal: string
  }
  prioridade: 'BAIXA' | 'MEDIA' | 'ALTA' | 'CRITICA'
  quantidade: number | null
  titulo: string
}

interface DemandaCardProps {
  demanda: DemandaData
}

export default function DemandaCard({ demanda }: DemandaCardProps) {
  // Configuração semântica para as cores de prioridade
  const prioridadeConfig = {
    BAIXA: 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300',
    MEDIA:
      'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-900/50',
    ALTA: 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/40 dark:text-orange-400 dark:border-orange-900/50',
    CRITICA:
      'bg-red-50 text-red-700 border-red-200 dark:bg-red-950/40 dark:text-red-400 dark:border-red-900/50 animate-pulse',
  }

  return (
    <Card className="flex h-full flex-col justify-between overflow-hidden border-zinc-200 bg-card shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800">
      <div>
        {/* IMAGEM DA DEMANDA (Se houver) */}
        {demanda.imagem && (
          <div className="relative h-44 w-full overflow-hidden border-zinc-100 border-b bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
            <Image
              alt={demanda.titulo}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              height={100}
              src={demanda.imagem}
              width={100}
            />
          </div>
        )}

        <CardHeader className="space-y-3 p-5">
          {/* BADGES FILTROS */}
          <div className="flex flex-wrap items-center gap-2">
            <Badge
              className={cn(
                'font-semibold text-[10px] tracking-wide',
                prioridadeConfig[demanda.prioridade]
              )}
              variant="outline"
            >
              {demanda.prioridade === 'CRITICA' && (
                <AlertTriangle className="mr-1 h-3 w-3 shrink-0" />
              )}
              {demanda.prioridade}
            </Badge>

            <Badge
              className="gap-1 bg-zinc-100 font-normal text-[10px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
              variant="secondary"
            >
              <Tag className="h-2.5 w-2.5" />
              {demanda.categoria.nome}
            </Badge>
          </div>

          {/* TÍTULO E DESCRIÇÃO */}
          <div className="space-y-1">
            <CardTitle className="line-clamp-1 font-bold text-xl text-zinc-900 tracking-tight dark:text-zinc-100">
              {demanda.titulo}
            </CardTitle>
            {demanda.descricao && (
              <CardDescription className="mt-1 line-clamp-2 text-sm text-zinc-500 dark:text-zinc-400">
                {demanda.descricao}
              </CardDescription>
            )}
          </div>
        </CardHeader>

        {/* METADADOS / DETALHES DO LOCAL */}
        <CardContent className="space-y-2.5 border-zinc-100 border-b px-5 pt-0 pb-4 text-xs text-zinc-600 dark:border-zinc-800/60 dark:text-zinc-400">
          <div className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-zinc-400" />
            <div>
              <p className="font-semibold text-zinc-700 dark:text-zinc-300">
                {demanda.local.nome}
              </p>
              {demanda.local.endereco && (
                <p className="line-clamp-1 text-[11px] text-zinc-400">
                  {demanda.local.endereco}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <User className="h-3.5 w-3.5 shrink-0 text-zinc-400" />
            <p>
              Responsável:{' '}
              <span className="font-medium text-zinc-700 dark:text-zinc-300">
                {demanda.gestor.nome}
              </span>
            </p>
          </div>

          {/* QUANTIDADE DINÂMICA */}
          {demanda.quantidade && demanda.quantidade > 0 && (
            <div className="flex items-center gap-2 pt-1">
              <Package className="h-3.5 w-3.5 shrink-0 text-cyan-600 dark:text-cyan-400" />
              <p className="font-medium text-zinc-700 dark:text-zinc-300">
                Meta necessária:{' '}
                <span className="font-bold text-cyan-600 dark:text-cyan-400">
                  {demanda.quantidade} itens
                </span>
              </p>
            </div>
          )}
        </CardContent>
      </div>

      {/* FOOTER DO CARD */}
      <CardFooter className="flex items-center justify-between gap-2 bg-zinc-50/50 p-4 dark:bg-zinc-900/30">
        <div className="flex items-center gap-1.5 font-medium text-[11px] text-zinc-400">
          <Calendar className="h-3.5 w-3.5" />
          <span>{demanda.criadoEm}</span>
        </div>

        <Button
          className="h-8 bg-cyan-600 px-4 font-semibold text-white text-xs hover:bg-cyan-700 dark:bg-cyan-700 dark:hover:bg-cyan-600"
          size="sm"
        >
          Ajudar
        </Button>
      </CardFooter>
    </Card>
  )
}
