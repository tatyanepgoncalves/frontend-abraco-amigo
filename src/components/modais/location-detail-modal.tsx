'use client'

import { AlertCircle } from 'lucide-react'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Progress } from '@/components/ui/progress'
import type { Location } from '@/types'
import CandidacyForm from './candidacy-form'

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
  const [showForm, setShowForm] = useState(false)

  const handleFinish = async () => {
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
    setShowForm(false)
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

  const handleCancelButton = () => {
    setShowForm(false)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full rounded-lg bg-slate-900 py-2 font-semibold text-white hover:bg-slate-800">
          Ver Necessidades Detalhadas
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto bg-slate-50 sm:max-w-125">
        <DialogHeader>
          <DialogTitle className="font-bold text-2xl">
            {location.name}
          </DialogTitle>
          <DialogDescription>
            {showForm
              ? 'Preencha seus dados para ajudar'
              : 'Confira o que este local precisa'}
          </DialogDescription>
        </DialogHeader>

        {/* TELA 1: FORMULÁRIO (Se clicou em ajudar e ainda não é voluntário) */}
        {showForm && !hasJoined ? (
          <CandidacyForm
            location={location}
            onCancel={handleCancelButton}
            onFinish={handleFinish}
          />
        ) : (
          /* TELA 2: LISTA DE NECESSIDADES + FEEDBACK DE SUCESSO */
          <div className="fade-in slide-in-from-top-4 animate-in space-y-6 py-4 duration-500">
            {/* Seção de Status / Botão de Ação */}
            {hasJoined ? (
              /* Card de Sucesso (O que já tínhamos) */
              <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4 text-center">
                <p className="font-bold text-emerald-800">
                  Inscrição realizada com sucesso!
                </p>
                <Button
                  className="text-emerald-700 text-xs hover:text-emerald-800"
                  onClick={handleCancel}
                  variant="ghost"
                >
                  Cancelar minha participação
                </Button>
              </div>
            ) : (
              <section className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <p className="font-medium text-slate-600 text-sm">
                  Pronto para dar o próximo passo?
                </p>
                <Button
                  className="w-full bg-slate-900"
                  onClick={() => setShowForm(true)}
                >
                  Quero me candidatar / Doar
                </Button>
              </section>
            )}

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
                      <Progress className="h-1.5" value={itemProgress} />
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
        )}

        <div className="flex justify-end pt-2">
          <DialogClose asChild>
            <Button className="text-xs" variant="destructive">
              Cancel
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}
