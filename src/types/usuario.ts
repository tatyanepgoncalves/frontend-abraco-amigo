export interface Usuario {
  email: string
  endereco: string | null
  id: string
  imagem: string | null
  nome: string
  senha: string
  telefone: string | null
  tipoUsuario: 'VOLUNTARIO' | 'GESTOR'
}
