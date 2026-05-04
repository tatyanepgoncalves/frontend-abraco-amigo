'use client'

import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { MOCK_DEMANDAS } from '@/mocks/data'
import DemandaItem from './demanda-item'

export default function Demandas() {
  const [demandas, setDemandas] = useState(MOCK_DEMANDAS)
  const [isGestor, setIsGestor] = useState(true)

  // Estados para edição
  const [editingDemanda, setEditingDemanda] = useState<any>(null)
  const [editTitle, setEditTitle] = useState('')

  useEffect(() => {
    const salvas = localStorage.getItem('demandas-mock')
    if (salvas) {
      setDemandas(JSON.parse(salvas))
    } else {
      setDemandas(MOCK_DEMANDAS)
    }
  }, [])

  const handleDelete = (id: string) => {
    if (!isGestor) {
      toast.error('Apenas gestores podem excluir demandas.')
      return
    }
    setDemandas((prev) => prev.filter((d) => d.id !== id))
    toast.success('Demanda excluída com sucesso!')
  }

  const handleEditClick = (demanda: any) => {
    if (!isGestor) {
      toast.error('Apenas gestores podem editar demandas.')
      return
    }
    setEditingDemanda(demanda)
    setEditTitle(demanda.titulo)
  }

  const saveEdit = () => {
    setDemandas((prev) =>
      prev.map((d) =>
        d.id === editingDemanda.id ? { ...d, titulo: editTitle } : d
      )
    )
    setEditingDemanda(null)
    toast.success('Demanda atualizada!')
  }

  return (
    <div className="space-y-6 p-8">
      <div className="flex items-center justify-between rounded-lg border bg-muted/30 p-4">
        <div>
          <h1 className="font-bold text-2xl">Lista de Demandas</h1>
          <p className="text-muted-foreground text-sm">
            Gerencie as necessidades do abrigo
          </p>
        </div>

        {/* Toggle para simular troca de perfil durante o desenvolvimento */}
        <div className="flex items-center space-x-2 border-l pl-4">
          <Switch
            checked={isGestor}
            id="gestor-mode"
            onCheckedChange={setIsGestor}
          />
          <Label htmlFor="gestor-mode">Modo Gestor</Label>
        </div>
      </div>

      {demandas.length === 0 ? (
        <div className="rounded-xl border-2 border-dashed py-12 text-center">
          <p className="text-muted-foreground">Nenhuma demanda encontrada.</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {demandas.map((item) => (
            <DemandaItem
              demanda={item}
              key={item.id}
              onDelete={isGestor ? handleDelete : () => {}}
              onEdit={isGestor ? handleEditClick : () => {}}
            />
          ))}
        </div>
      )}

      {/* Dialog de Edição Mockado */}
      <Dialog
        onOpenChange={() => setEditingDemanda(null)}
        open={!!editingDemanda}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar Demanda</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Título da Demanda</Label>
              <Input
                onChange={(e) => setEditTitle(e.target.value)}
                value={editTitle}
              />
            </div>
            <p className="text-muted-foreground text-xs italic">
              ID: {editingDemanda?.id}
            </p>
          </div>
          <DialogFooter>
            <Button onClick={() => setEditingDemanda(null)} variant="outline">
              Cancelar
            </Button>
            <Button onClick={saveEdit}>Salvar Alterações</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
