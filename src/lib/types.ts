export interface Usuario {
  email: string
  id: string
  image: string | null
  nome: string
  tipoUsuario: 'GESTOR' | 'VOLUNTARIO'
}
