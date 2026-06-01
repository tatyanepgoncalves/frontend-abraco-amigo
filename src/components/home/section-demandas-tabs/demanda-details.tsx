'use client'

import { HeartHandshake, Loader2 } from 'lucide-react'
import { Controller } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useApplyDemanda } from '@/hooks/home/use-apply-demanda'
import type { Demanda } from '@/schema/demadas-schema'

interface DemandaDetailProps {
  demanda: Demanda
  onActionComplete?: () => void
}

export default function DemandaDetail({
  onActionComplete,
  demanda,
}: DemandaDetailProps) {
  const { form, isOpen, setIsOpen, isSubmitting, onSubmit } = useApplyDemanda({
    onSuccess: onActionComplete,
    tipoDemanda: demanda.tipo,
    demanda,
  })

  const tipoDemanda = demanda.tipo === 'INSUMO'

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <Button className="w-full gap-2 rounded-lg py-2 font-medium">
          <HeartHandshake className="h-4 w-4" />
          {tipoDemanda ? 'Quero Doar Insumos' : 'Candidatar-se como Voluntário'}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-150">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl">
            {/* CORRIGIDO: Alinhado com o tipo real */}
            {tipoDemanda ? 'Registrar Doação' : 'Candidatura de Voluntariado'}
          </DialogTitle>
          <DialogDescription className="text-zinc-900 dark:text-zinc-100">
            Apoiando a demanda: <strong>{demanda.titulo}</strong>
          </DialogDescription>
        </DialogHeader>

        <form className="mt-4 space-y-4" onSubmit={onSubmit}>
          {/* Nome Completo */}
          <div className="space-y-1">
            <Label htmlFor="nome">Nome Completo *</Label>
            <Input
              id="nome"
              placeholder="Seu nome completo"
              {...form.register('nome')}
            />
            {form.formState.errors.nome && (
              <p className="text-red-500 text-xs">
                {form.formState.errors.nome.message}
              </p>
            )}
          </div>

          {/* E-mail */}
          <div className="space-y-1">
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              placeholder="exemplo@email.com"
              type="email"
              {...form.register('email')}
            />
            {form.formState.errors.email && (
              <p className="text-red-500 text-xs">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>

          {/* Telefone */}
          <div className="space-y-1">
            <Label htmlFor="telefone">Telefone / WhatsApp *</Label>
            <Input
              id="telefone"
              placeholder="(00) 00000-0000"
              {...form.register('telefone')}
            />
            {form.formState.errors.telefone && (
              <p className="text-red-500 text-xs">
                {form.formState.errors.telefone.message}
              </p>
            )}
          </div>

          {/* Endereço */}
          <div className="space-y-1">
            <Label htmlFor="endereco">Endereço (Opcional)</Label>
            <Input
              id="endereco"
              placeholder="Rua, número, bairro"
              {...form.register('endereco')}
            />
          </div>

          {/* CORRIGIDO: Mostra os campos de quantidade apenas se for INSUMO */}
          {tipoDemanda && (
            <div className="flex items-center gap-x-3 rounded-lg border bg-muted/40 p-3">
              <div className="w-full space-y-2">
                <Label className="pl-2" htmlFor="quantidade">
                  Quantidade a ser Doadada *
                </Label>
                <Input
                  id="quantidade"
                  placeholder="Ex: 10"
                  type="number"
                  {...form.register('quantidade')}
                />
                {form.formState.errors.quantidade && (
                  <p className="text-red-500 text-xs">
                    {form.formState.errors.quantidade.message}
                  </p>
                )}
              </div>

              <div className="w-80 space-y-2">
                <Label className="pl-2" htmlFor="unidadeMedida">
                  Unidade de medida *
                </Label>
                <Controller
                  control={form.control}
                  name="unidadeMedida"
                  render={({ field }) => (
                    <Select
                      onValueChange={field.onChange}
                      value={field.value || 'KG'}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent className="w-full">
                        <SelectItem value="KG">Quilograma (KG)</SelectItem>
                        <SelectItem value="LITROS">Litros (L)</SelectItem>
                        <SelectItem value="UNIDADES">Unidades</SelectItem>
                        <SelectItem value="PACOTES">Pacotes</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {form.formState.errors.unidadeMedida && (
                  <p className="text-red-500 text-xs">
                    {form.formState.errors.unidadeMedida.message}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Botões de Ação */}
          <div className="flex justify-end gap-2 pt-2">
            <Button
              onClick={() => setIsOpen(false)}
              type="button"
              variant="outline"
            >
              Cancelar
            </Button>
            <Button disabled={isSubmitting} type="submit">
              {isSubmitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              {/* CORRIGIDO: Texto do botão correspondente */}
              {tipoDemanda ? 'Confirmar Doação' : 'Confirmar Inscrição'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
