// src/components/home/location-card.tsx
'use client'

import { useEffect, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import type { LocationData } from '@/schema/location-schema'
import { LocationDetailsModal } from '../modais/location-detail-modal'
import { Label } from '../ui/label'
import { Progress } from '../ui/progress'

export default function LocationCard({ location }: { location: LocationData }) {
  const [hasJoined, setHasJoined] = useState(false)

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('my-subscriptions') || '[]')
    if (saved.includes(location.id)) {
      setHasJoined(true)
    }
  }, [location.id])

  // Evita divisões por zero se o local não possuir vagas configuradas nas demandas
  const maxVolunteers = location.vagasTotais || 1
  const currentVolunteers = hasJoined ? location.vagasPreenchidas + 1 : location.vagasPreenchidas
  
  const volunteerOccupancy = Math.min(
    Math.round((currentVolunteers / maxVolunteers) * 100), 
    100
  )
  const remainingSlots = location.vagasTotais - location.vagasPreenchidas

  return (
    <Card className="flex h-[380px] flex-col justify-between rounded-xl border border-zinc-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800">
      <div>
        <CardHeader className="flex flex-row items-start justify-between p-0 mb-4">
          <div className="space-y-1 pr-2">
            <CardTitle className="font-bold text-lg text-zinc-800 dark:text-neutral-200 line-clamp-1">
              {location.nome}
            </CardTitle>
            <CardDescription className="text-sm text-zinc-500 dark:text-neutral-400 line-clamp-2">
              {location.endereco || 'Endereço não informado'}
            </CardDescription>
          </div>
          {location.possuiUrgenciaAlta && (
            <Badge className="shrink-0 rounded-full bg-red-100 px-2 py-1 font-bold text-red-600 text-[10px] uppercase dark:bg-red-950 dark:text-red-400">
              Urgência Alta
            </Badge>
          )}
        </CardHeader>

        <CardContent className="space-y-4 p-0">
          <div className="text-sm space-y-1">
            <p className="font-semibold text-zinc-700 dark:text-neutral-300">
              Coordenador: <span className="font-normal text-zinc-600 dark:text-neutral-400">{location.gestor.nome}</span>
            </p>
            <p className="text-zinc-600 dark:text-neutral-400">
              Contato: {location.telefone || 'Não informado'}
            </p>
          </div>

          {/* Se houver vagas configuradas, exibe a barra de progresso */}
          {location.vagasTotais > 0 && (
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between">
                <Label className="font-medium text-xs text-zinc-700 dark:text-neutral-300" htmlFor={`progress-${location.id}`}>
                  Ocupação de Voluntários
                </Label>
                <span className="font-bold text-xs text-zinc-500">{volunteerOccupancy}%</span>
              </div>

              <Progress className="h-2 w-full" id={`progress-${location.id}`} value={volunteerOccupancy} />

              <div className="flex items-center justify-between text-[11px] pt-1">
                <span className="font-medium text-zinc-400">{volunteerOccupancy}% ocupado</span>
                <span className={`font-semibold ${remainingSlots <= 2 ? 'text-orange-500' : 'text-emerald-600'}`}>
                  {remainingSlots > 0 ? `${remainingSlots} vagas livres` : 'Lotado'}
                </span>
              </div>
            </div>
          )}
        </CardContent>
      </div>

      <CardFooter className="p-0 pt-4 bg-transparent border-t-0">
        <LocationDetailsModal 
          hasJoined={hasJoined} 
          location={location} 
          setHasJoined={setHasJoined} 
        />
      </CardFooter>
    </Card>
  )
}