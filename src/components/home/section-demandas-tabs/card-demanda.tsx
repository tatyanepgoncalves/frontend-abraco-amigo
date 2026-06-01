'use client'

import { Box, ImageOff, Users } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Field, FieldLabel } from '@/components/ui/field'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import DemandaDetails from './demanda-details'

interface Demanda {
  descricao: string | null
  id: string
  imagem: string | null
  prioridade: 'BAIXA' | 'MEDIA' | 'ALTA' | 'CRITICA'
  quantidade: number
  quantidadeArrecadada: number
  status: 'ABERTA' | 'COMPLETA' | 'CANCELADA'
  tipo: 'INSUMO' | 'VOLUNTARIADO'
  titulo: string
  unidadeMedida: 'KG' | 'LITROS' | 'UNIDADES' | 'PACOTES'
  voluntariosConfirmados: number
  voluntariosNecessarios: number
}

interface CardDemandaProps {
  demanda: Demanda
}

export default function CardDemanda({ demanda }: CardDemandaProps) {
  const [isOpen, setIsOpen] = useState(false)
  const isInsumo = demanda.tipo === 'INSUMO'

  const total = isInsumo
    ? (demanda.quantidade ?? 1)
    : (demanda.voluntariosNecessarios ?? 1)
  const atual = isInsumo
    ? demanda.quantidadeArrecadada
    : demanda.voluntariosConfirmados
  const progresso = total > 0 ? Math.min((atual / total) * 100, 100) : 0

  const prioridadeCores = {
    BAIXA: 'bg-blue-500/10 text-blue-500',
    MEDIA: 'bg-yellow-500/10 text-yellow-600',
    ALTA: 'bg-orange-500/80 text-orange-600',
    CRITICA: 'bg-destructive/10 text-destructive font-bold animate-pulse',
  }

  return (
    <article className="flex flex-col justify-between overflow-hidden rounded-xl bg-card shadow-sm transition-all hover:shadow-md dark:border-zinc-800">
      <div className="relative h-44 w-full bg-zinc-100 dark:bg-zinc-700">
        {demanda.imagem ? (
          <Image
            alt={demanda.titulo}
            className="h-48 w-full rounded-md object-cover"
            height={176}
            src={demanda.imagem}
            width={400}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center text-zinc-400">
            <ImageOff className="h-8 w-8 stroke-[1.2]" />
            <span className="mt-1 text-xs">Sem imagem disponível</span>
          </div>
        )}

        <Badge
          className={cn(
            'absolute top-2 right-2',
            prioridadeCores[demanda.prioridade]
          )}
        >
          {demanda.prioridade}
        </Badge>
      </div>

      <div className="space-y-4 p-4">
        <div>
          <h2 className="font-semibold text-xl text-zinc-800 dark:text-zinc-200">
            {demanda.titulo}
          </h2>
          <div className="flex items-center gap-1.5 font-semibold text-muted-foreground text-xs">
            {isInsumo ? (
              <Box className="h-3.5 w-3.5 text-blue-500" />
            ) : (
              <Users className="h-3.5 w-3.5 text-teal-500" />
            )}
            <span className="text-muted-foreground">
              {isInsumo ? 'Doação' : 'Voluntariado'}
            </span>
          </div>
        </div>

        {/* Métricas e Barra de Progresso */}
        <Field className="w-full">
          <FieldLabel
            className="flex items-center justify-between"
            htmlFor="progress-goal"
          >
            <span>Progresso do objetivo</span>

            <span className="font-semibold text-foreground">
              {atual} / {total}{' '}
              <span className="text-[10px] text-muted-foreground">
                {isInsumo ? demanda.unidadeMedida : 'Pessoas'}
              </span>
            </span>
          </FieldLabel>
          <Progress className="h-2.5" id="progress-goal" value={progresso} />
        </Field>

        <DemandaDetails demanda={demanda} onClose={() => setIsOpen(true)} />
      </div>
    </article>
  )
}
