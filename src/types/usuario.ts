export interface Usuario {
  email: string
  endereco: string | null
  id: string
  imagem: string
  nome: string
  senha: string
  telefone: string | null
  tipoUsuario: 'VOLUNTARIO' | 'INSTITUICAO'
}
