'use client'

import { AlertCircle, Edit, Trash2, Users } from 'lucide-react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'

interface Demanda {
  descricao: string
  id: string
  prioridade: string
  status: string
  titulo: string
  voluntariosConfirmados: number
  voluntariosNecessarios: number
}

interface DemandaItemProps {
  demanda: Demanda
  onDelete: (id: string) => void
  onEdit: (demanda: Demanda) => void
}

export default function DemandaItem({
  demanda,
  onEdit,
  onDelete,
}: DemandaItemProps) {
  // Função para definir a cor da badge de prioridade
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'ALTA':
        return 'bg-red-500 hover:bg-red-600'
      case 'MÉDIA':
        return 'bg-orange-500 hover:bg-orange-600'
      default:
        return 'bg-blue-500 hover:bg-blue-600'
    }
  }

  return (
    <Card className="overflow-hidden border-l-4 border-l-primary shadow-sm transition-shadow hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <Badge className={getPriorityColor(demanda.prioridade)}>
            {demanda.prioridade}
          </Badge>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <Users className="h-4 w-4" />
            {demanda.voluntariosConfirmados}/{demanda.voluntariosNecessarios}
          </div>
        </div>
        <CardTitle className="mt-2 text-xl">{demanda.titulo}</CardTitle>
        <CardDescription className="line-clamp-2">
          {demanda.descricao}
        </CardDescription>
      </CardHeader>

      <CardContent>
        {/* Aqui você pode adicionar mais detalhes mockados se quiser */}
        <div className="flex items-center gap-1 text-muted-foreground text-xs">
          <AlertCircle className="h-3 w-3" />
          Status: <span className="font-semibold">{demanda.status}</span>
        </div>
      </CardContent>

      <CardFooter className="flex justify-end gap-2 bg-muted/50 pt-4">
        <Button
          className="gap-2"
          onClick={() => onEdit(demanda)}
          size="sm"
          variant="outline"
        >
          <Edit className="h-4 w-4" /> Editar
        </Button>

        <Button
          className="gap-2"
          onClick={() => onDelete(demanda.id)}
          size="sm"
          variant="destructive"
        >
          <Trash2 className="h-4 w-4" /> Excluir
        </Button>
      </CardFooter>
    </Card>
  )
}
