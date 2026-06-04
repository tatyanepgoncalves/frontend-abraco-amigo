'use client'

import { Loader2, Plus } from 'lucide-react'
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
import useCreateCategory from '@/hooks/voluntariado/use-create-category'

interface DialogCategoryProps {
  onCategoryCreated?: () => void
}

export default function DialogCategory({
  onCategoryCreated,
}: DialogCategoryProps) {
  const { isOpen, setIsOpen, isSubmitting, form, onSubmit, clearForm } =
    useCreateCategory(onCategoryCreated)

  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="h-4 w-4" /> Categorias
        </Button>
      </DialogTrigger>

      <DialogContent className="w-full sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Crie uma categoria</DialogTitle>
          <DialogDescription>
            Preencha os campos abaixo e cadastre uma nova categoria para as
            demandas.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-2">
            <Label className="pl-2">Nome da categoria*</Label>
            <Input {...form.register('nome')} placeholder="ex: Saúde" />
          </div>

          <div className="space-y-2">
            <Label className="pl-2">Descrição (opcional)</Label>
            <Input
              {...form.register('descricao')}
              placeholder="Descrição da categoria"
            />
          </div>

          {/* Botões de Ação */}
          <div className="flex justify-end gap-2 border-t pt-4">
            <Button
              disabled={isSubmitting}
              onClick={() => setIsOpen(false)}
              type="button"
              variant="ghost"
            >
              Cancelar
            </Button>

            <Button
              disabled={isSubmitting}
              onClick={clearForm}
              type="button"
              variant="ghost"
            >
              Limpa
            </Button>

            <Button disabled={isSubmitting} type="submit">
              {isSubmitting && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Criar categoria
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
