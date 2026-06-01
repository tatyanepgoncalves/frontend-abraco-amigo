export interface Demanda {
  descricao: string | null
  id: string
  imagem: string | null
  prioridade: 'BAIXA' | 'MEDIA' | 'ALTA' | 'CRITICA'
  quantidade: number
  quantidadeArrecadada: number
  status: 'ABERTA' | 'COMPLETA' | 'CANCELADA'
  tipo: 'INSUMO' | 'VOLUNTARIADO'
  titulo: string
  unidadeMedida: 'KG' | 'LITROS' | 'UNIDADES' | 'PACOTES'
  voluntariosConfirmados: number
  voluntariosNecessarios: number
}