export interface Usuario {
  email: string
  id: string
  image: string | null
  instituionId?: string
  nome: string
  tipoUsuario: 'GESTOR' | 'VOLUNTARIO'
}
