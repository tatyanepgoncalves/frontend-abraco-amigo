'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

interface CandidacyFormProps {
  location: any
  onCancel: () => void
  onFinish: () => void
}

export default function CandidacyForm({
  location,
  onFinish,
  onCancel,
}: CandidacyFormProps) {
  const [type, setType] = useState<'trabalho' | 'doacao'>('trabalho')

  return (
    <div className="fade-in slide-in-from-bottom-4 animate-in space-y-6 duration-500">
      <div className="space-y-4">
        {/* Escolha do Tipo */}
        <div className="grid grid-cols-2 gap-2 rounded-lg bg-slate-100 p-1">
          <Button
            className="text-xs"
            onClick={() => setType('trabalho')}
            size="sm"
            variant={type === 'trabalho' ? 'default' : 'ghost'}
          >
            Trabalho Voluntário
          </Button>
          <Button
            className="text-xs"
            onClick={() => setType('doacao')}
            size="sm"
            variant={type === 'doacao' ? 'default' : 'ghost'}
          >
            Doação de Item
          </Button>
        </div>

        {/* Campos Comuns */}
        <div className="space-y-2">
          <Label htmlFor="name">Seu Nome</Label>
          <Input
            className="bg-white"
            id="name"
            placeholder="Como podemos te chamar?"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact">WhatsApp / Telefone</Label>
          <Input
            className="bg-white"
            id="contact"
            placeholder="(00) 00000-0000"
          />
        </div>

        {/* Condicional: Doação de Item */}
        {type === 'doacao' && (
          <div className="zoom-in-95 animate-in space-y-2 duration-200">
            <Label>O que você vai doar?</Label>
            <Select>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Selecione o item da lista" />
              </SelectTrigger>
              <SelectContent>
                {location.needs.map((need: any) => (
                  <SelectItem key={need.id} value={need.id}>
                    {need.item || need.description}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              className="mt-2 bg-white"
              placeholder="Quantidade (unidades/kg)"
              type="number"
            />
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="obs">Observações (Opcional)</Label>
          <Textarea
            className="bg-white"
            id="obs"
            placeholder="Ex: Estarei disponível a partir das 14h."
          />
        </div>
      </div>

      <Button
        className="w-full bg-emerald-600 hover:bg-emerald-700"
        onClick={onFinish}
      >
        Confirmar e Enviar
      </Button>

      <Button className="w-full bg-red-500 hover:bg-red-800" onClick={onCancel}>
        Cancelar
      </Button>
    </div>
  )
}
