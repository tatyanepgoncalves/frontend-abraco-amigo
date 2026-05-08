'use client'

import { AlertCircle, CheckCircle2, UserPlus } from 'lucide-react'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Progress } from '@/components/ui/progress'
import type { Location } from '@/types'

interface LocationDetailsModalProps {
  hasJoined: boolean
  location: Location
  setHasJoined: (val: boolean) => void
}

export function LocationDetailsModal({
  location,
  hasJoined,
  setHasJoined,
}: LocationDetailsModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleJoin = async () => {
    setIsSubmitting(true)

    // Simulando chamada a API de 0.8s
    await new Promise((resolve) => setTimeout(resolve, 800))

    // Salva no localStorage
    const saved = JSON.parse(localStorage.getItem('my-subscriptions') || '[]')
    if (!saved.includes(location.id)) {
      localStorage.setItem(
        'my-subscriptions',
        JSON.stringify([...saved, location.id])
      )
      setHasJoined(true) // Isso vai disparar a atualização no LocationCard automaticamente!
    }
    setIsSubmitting(false)

    // Add Axios aqui depois para atualizar o banco
  }

  const handleCancel = () => {
    const saved = JSON.parse(localStorage.getItem('my-subscriptions') || '[]')
    localStorage.setItem(
      'my-subscriptions',
      // biome-ignore lint/suspicious/noExplicitAny: it's necessary
      JSON.stringify(saved.filter((id: any) => id !== location.id))
    )
    setHasJoined(false) // Atualiza o pai para subtrair o voluntário
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full rounded-lg bg-slate-900 py-2 font-semibold text-white hover:bg-slate-800">
          Ver Necessidades Detalhadas
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-125">
        <DialogHeader>
          <DialogTitle className="font-bold text-2xl text-slate-900">
            {location.name}
          </DialogTitle>
          <DialogDescription className="text-slate-500">
            Lista de prioridades atualizada em tempo real.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* SEÇÃO DE CANDIDATURA PERSISTENTE */}
          <section
            className={`space-y-4 rounded-xl border-2 border-dashed p-6 text-center transition-colors ${
              hasJoined
                ? 'border-emerald-200 bg-emerald-50/30'
                : 'border-slate-200 bg-slate-50/30'
            }`}
          >
            <div
              className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full border shadow-sm transition-transform ${
                hasJoined
                  ? 'scale-110 border-emerald-400 bg-emerald-500'
                  : 'border-slate-100 bg-white'
              }`}
            >
              {hasJoined ? (
                <CheckCircle2 className="h-6 w-6 text-white" />
              ) : (
                <UserPlus className="h-6 w-6 text-slate-400" />
              )}
            </div>

            <div className="space-y-1">
              <h3
                className={`font-bold ${hasJoined ? 'text-emerald-700' : 'text-slate-900'}`}
              >
                {hasJoined
                  ? 'Você é um voluntário aqui!'
                  : 'Quer ajudar neste local?'}
              </h3>
              <p className="mx-auto max-w-62.5 text-slate-500 text-xs">
                {hasJoined
                  ? 'Sua participação foi salva neste navegador. Obrigado por apoiar!'
                  : 'Ao clicar abaixo, você confirma sua disponibilidade para este local.'}
              </p>
            </div>

            {hasJoined ? (
              <Button
                className="text-emerald-700 text-xs hover:text-emerald-800"
                onClick={handleCancel}
                variant="ghost"
              >
                Cancelar minha participação
              </Button>
            ) : (
              <Button
                className="w-full bg-emerald-600 font-bold text-white hover:bg-emerald-700"
                disabled={isSubmitting}
                onClick={handleJoin}
              >
                {isSubmitting ? 'Registrando...' : 'Confirmar Candidatura'}
              </Button>
            )}
          </section>

          {/* Lista de Necessidades */}

          <div className="space-y-4">
            <h4 className="font-bold text-slate-400 text-sm uppercase tracking-widest">
              Itens Necessários
            </h4>

            {location.needs.map((need) => {
              const received = need.quantityReceived || 0
              const total = need.quantityNeeded || 1 // Evita divisão por zero
              const itemProgress = Math.min(
                Math.round((received / total) * 100),
                100
              )

              const currentVolunters = hasJoined
                ? location.currentVolunteers + 1
                : location.currentVolunteers

              const volunteerOccupancy = Math.round(
                (currentVolunters / location.maxVolunteers) * 100
              )

              return (
                <div
                  className="rounded-lg border border-slate-100 bg-slate-50/50 p-4"
                  key={need.id}
                >
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <p className="font-bold text-slate-800">
                        {need.description}
                      </p>
                      <p className="text-slate-500 text-xs">
                        Meta: {need.quantityNeeded ?? 0} unidades
                      </p>
                    </div>
                    <Badge
                      className="text-[10px]"
                      variant={
                        need.urgency === 'Alta' ? 'destructive' : 'secondary'
                      }
                    >
                      {need.urgency || 'Normal'}
                    </Badge>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between font-medium text-[11px]">
                      <span>{volunteerOccupancy}% arrecadado</span>
                      <span>
                        {need.quantityReceived ?? 0} /{' '}
                        {need.quantityNeeded ?? 0}
                      </span>
                    </div>
                    <Progress className="h-1.5" value={volunteerOccupancy} />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Orientações de Entrega */}
          <div className="flex gap-3 rounded-lg border border-blue-100 bg-blue-50 p-4">
            <AlertCircle className="h-5 w-5 shrink-0 text-blue-600" />
            <div className="text-blue-800 text-sm">
              <p className="font-bold">Como ajudar?</p>
              <p className="text-blue-700/80">
                Entre em contato com <strong>{location.coordinator}</strong>{' '}
                para agendar a entrega no endereço: {location.address}.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <Button
            className="text-xs"
            onClick={() => window.print()}
            variant="outline"
          >
            Imprimir Lista
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
