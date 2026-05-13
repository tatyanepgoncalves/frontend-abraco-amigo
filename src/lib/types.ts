export interface Usuario {
  atualizadoEm: string | null
  criadoEm: string
  email: string
  id: string
  imagem: string | null
  nome: string
  telefone: string | null
  tipoUsuario: 'GESTOR' | 'VOLUNTARIO'
}
