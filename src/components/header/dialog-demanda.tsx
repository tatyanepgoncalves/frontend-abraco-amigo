'use client'

import { Loader2, Plus } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

export default function DialogDemanda() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  // Estados do formulário
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [voluntarios, setVoluntarios] = useState('1')
  const [prioridade, setPrioridade] = useState('MÉDIA')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulação de delay de rede
    setTimeout(() => {
      const novaDemanda = {
        id: crypto.randomUUID(), // Gera um ID único estilo banco de dados
        titulo,
        descricao,
        voluntariosNecessarios: Number(voluntarios),
        voluntariosConfirmados: 0,
        prioridade,
        status: 'ABERTA',
        categoriaId: 'mock-cat-1',
      }

      // Lógica de LocalStorage
      const demandasSalvas = localStorage.getItem('demandas-mock')
      const listaAtualizada = demandasSalvas
        ? [...JSON.parse(demandasSalvas), novaDemanda]
        : [novaDemanda]

      localStorage.setItem('demandas-mock', JSON.stringify(listaAtualizada))

      // Feedback e Reset
      toast.success('Demanda criada localmente!')
      setLoading(false)
      setOpen(false)

      // Reset campos
      setTitulo('')
      setDescricao('')
      setVoluntarios('1')

      // Forçar refresh da página para atualizar a lista (ou use um Context/State compartilhado)
      window.dispatchEvent(new Event('storage'))
    }, 800)
  }

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild>
        <Button className="gap-2" type="button" variant="outline">
          <Plus className="h-4 w-4" /> <span>Nova Demanda</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar demanda</DialogTitle>
          <DialogDescription>
            Preencha as informações e adicione uma nova demanda ao sistema.
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-4 pt-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="titulo">Título da demanda</Label>
            <Input
              id="titulo"
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="ex: Cozinheiro"
              required
              value={titulo}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="descricao">Descrição da demanda</Label>
            <Input
              id="descricao"
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="ex: Busca-se 5 cozinheiros"
              required
              value={descricao}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="voluntarios">Nº Voluntários</Label>
              <Input
                id="voluntarios"
                min="1"
                onChange={(e) => setVoluntarios(e.target.value)}
                type="number"
                value={voluntarios}
              />
            </div>

            <div className="space-y-2">
              <Label>Prioridade</Label>
              <Select onValueChange={setPrioridade} value={prioridade}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BAIXA">Baixa</SelectItem>
                  <SelectItem value="MÉDIA">Média</SelectItem>
                  <SelectItem value="ALTA">Alta</SelectItem>
                  <SelectItem value="CRÍTICA">Crítica</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button className="w-full" disabled={loading} type="submit">
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              'Criar Demanda'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
