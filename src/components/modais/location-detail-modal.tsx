'use client'

import { AlertCircle } from 'lucide-react'
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

export function LocationDetailsModal({ location }: { location: Location }) {
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
          {/* Lista de Necessidades */}
          <div className="space-y-4">
            <h4 className="font-bold text-slate-400 text-sm uppercase tracking-widest">
              Itens Necessários
            </h4>

            {location.needs.map((need) => {
              const received = need.quantityReceived || 0
              const total = need.quantityNeeded || 1 // Evita divisão por zero
              const progress = Math.min(
                Math.round((received / total) * 100),
                100
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
                      <span>{progress}% arrecadado</span>
                      <span>
                        {need.quantityReceived ?? 0} /{' '}
                        {need.quantityNeeded ?? 0}
                      </span>
                    </div>
                    <Progress className="h-1.5" value={progress} />
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
