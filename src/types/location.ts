export interface Location {
  atualizadoEm: string | null
  criadoEm: string
  deletadoEm: string | null
  doacoesAbertas: number
  doacoesNecessarias: number
  doacoesRecebidas: number
  email: string | null
  endereco: string
  gestor: {
    id: string
    nome: string
  }
  id: string
  imagem: string | null
  length: number
  nome: string
  possuiUrgenciaAlta: boolean
  telefone: string
  tipoLocal: 'ABRIGO' | 'CENTRO_COMUNITARIO' | 'ESCOLA' | 'HOSPITAL' | 'ONG'
  vagasPreenchidas: number
  vagasTotais: number
  vagasVoluntariadoAbertas: number
}

export interface LocationDetails extends Location {
  demandas?: Array<{
    id: string
    titulo: string
    descricao: string | null
    imagem: string | null
    status: string
    tipo: string
    prioridade: string
  }>
}
