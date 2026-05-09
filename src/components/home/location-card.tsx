'use client'

import { useEffect, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import type { Location } from '@/types/index'
import { LocationDetailsModal } from '../modais/location-detail-modal'
import { Label } from '../ui/label'
import { Progress } from '../ui/progress'

export default function LocationCard({ location }: { location: Location }) {
  const [hasJoined, setHasJoined] = useState(false)

  // Verifica no carregamento se o usuário já é voluntário
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('my-subscriptions') || '[]')
    if (saved.includes(location.id)) {
      setHasJoined(true)
    }
  }, [location.id])

  const isCritical = location.needs.some((n) => n.urgency === 'Alta')
  const currentVolunters = hasJoined
    ? location.currentVolunteers + 1
    : location.currentVolunteers
  const volunteerOccupancy = Math.round(
    (currentVolunters / location.maxVolunteers) * 100
  )

  const remainingSlots = location.maxVolunteers - location.currentVolunteers

  return (
    <Card className="flex h-90 flex-col justify-between rounded-xl border border-zinc-100 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800">
      <CardHeader className="mb-4 flex items-start justify-between px-0">
        <div>
          <CardTitle className="font-bold text-lg text-zinc-800 dark:text-neutral-200">
            {location.name}
          </CardTitle>
          <CardDescription className="text-sm text-zinc-500 dark:text-neutral-400">
            {location.address}
          </CardDescription>
        </div>
        {isCritical && (
          <Badge className="rounded-full bg-red-100 px-2 py-1 font-bold text-red-600 text-xs uppercase dark:bg-red-800 dark:text-red-300">
            Urgência Alta
          </Badge>
        )}
      </CardHeader>

      <CardContent className="space-y-4 px-0">
        <div>
          <p className="font-semibold text-sm text-zinc-700 dark:text-neutral-300">
            Coordenador:{' '}
            <span className="font-normal">{location.coordinator}</span>
          </p>
          <p className="text-sm text-zinc-600 dark:text-neutral-400">
            Contato: {location.contact}
          </p>
        </div>

        {/* Barra de Voluntários */}
        <div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label
                className="cursor-pointer font-medium text-sm text-zinc-700 dark:text-neutral-300"
                htmlFor="current-volunteers"
              >
                Ocupação de Voluntários
              </Label>
              <span className="font-semibold text-xs text-zinc-500">
                {volunteerOccupancy}%
              </span>
            </div>

            <Progress
              className="h-2 w-full"
              id="current-volunteers"
              value={volunteerOccupancy}
            />

            <div className="flex items-center justify-between text-[11px]">
              <span className="font-medium text-zinc-400">
                {volunteerOccupancy}% ocupado
              </span>
              <span
                className={`font-semibold ${remainingSlots <= 2 ? 'text-orange-500' : 'text-emerald-600'}`}
              >
                {remainingSlots > 0
                  ? `${remainingSlots} vagas livres`
                  : 'Lotado'}
              </span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="border-t-0 bg-transparent px-0">
        <LocationDetailsModal
          hasJoined={hasJoined}
          location={location}
          setHasJoined={setHasJoined}
        />
      </CardFooter>
    </Card>
  )
}
