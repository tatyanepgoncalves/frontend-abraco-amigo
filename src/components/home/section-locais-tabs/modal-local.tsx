'use client'

import { AlertCircle } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { getLocationById } from '@/service/location-service'
import type { Location, LocationDetails } from '@/types/location'

interface ModalLocalProps {
  local: Location
}

export default function ModalLocal({ local }: ModalLocalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [details, setDetails] = useState<LocationDetails | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleOpenChange = async (open: boolean) => {
    setIsOpen(open)
    if (open && !details) {
      setIsLoading(true)
      try {
        const data = await getLocationById(local.id)
        setDetails(data)
      } catch (error) {
        console.error('Erro ao carregar detalhes:', error)
        toast.error(`Erro ao carregar detalhes do local: ${local.nome}`)
      } finally {
        setIsLoading(false)
      }
    }
  }

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center py-8">
          <p className="text-muted-foreground">Carregando detalhes...</p>
        </div>
      )
    }

    if (!details) {
      return null
    }

    return (
      <div className="space-y-6">
        {/* Informações básicas */}
        <div className="space-y-2">
          <h3 className="font-semibold">Informações</h3>
          <p className="text-sm">
            <strong>Endereço:</strong> {details.endereco}
          </p>
          <p className="text-sm">
            <strong>Telefone:</strong> {details.telefone}
          </p>
          {details.email && (
            <p className="text-sm">
              <strong>Email:</strong> {details.email}
            </p>
          )}
          <p className="text-sm">
            <strong>Tipo:</strong> {details.tipoLocal}
          </p>
        </div>

        {/* Gestor */}
        {details.gestor && (
          <div className="space-y-2">
            <h3 className="font-semibold">Gestor</h3>
            <p className="text-sm">{details.gestor.nome}</p>
          </div>
        )}

        {/* Voluntariado */}
        <div className="space-y-2">
          <h3 className="font-semibold">Voluntariado</h3>
          <p className="text-sm">
            Vagas: {details.vagasPreenchidas}/{details.vagasTotais}
          </p>
        </div>

        {/* Demandas abertas */}
        {details.demandas && details.demandas.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-semibold">
              Demandas Abertas ({details.demandas.length})
            </h3>
            <ul className="space-y-2">
              {details.demandas.map((demanda) => (
                <li
                  className="border-blue-500 border-l-2 pl-3 text-sm"
                  key={demanda.id}
                >
                  <p className="font-medium">{demanda.titulo}</p>
                  {demanda.imagem && (
                    <Image
                      alt={demanda.titulo}
                      className="mt-2 h-32 w-full object-cover"
                      height={50}
                      src={demanda.imagem}
                      width={50}
                    />
                  )}
                  <p className="text-muted-foreground text-xs">
                    {demanda.tipo} • {demanda.prioridade} • {demanda.status}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Alerta se há urgência */}
        {details.possuiUrgenciaAlta && (
          <div className="rounded-md border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-950">
            <p className="font-semibold text-red-800 text-sm dark:text-red-200">
              <AlertCircle /> Este local possui demandas críticas/altas
            </p>
          </div>
        )}
      </div>
    )
  }

  return (
    <Dialog onOpenChange={handleOpenChange} open={isOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">Ver detalhes</Button>
      </DialogTrigger>

      <DialogContent className="max-h-[80vh] w-full overflow-y-auto sm:max-w-150">
        <DialogTitle>{local.nome}</DialogTitle>

        {renderContent()}
      </DialogContent>
    </Dialog>
  )
}
