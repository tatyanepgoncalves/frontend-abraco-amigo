export const MOCK_DEMANDAS = [
  {
    id: '1ac2-uuid-mock',
    titulo: 'Cozinheiro para Abrigo Central',
    descricao: 'Necessário preparo de refeições para 50 pessoas.',
    voluntariosNecessarios: 5,
    voluntariosConfirmados: 2,
    prioridade: 'ALTA',
    status: 'ABERTA',
    categoriaId: 'cat-1',
  },
  {
    id: '2bd3-uuid-mock',
    titulo: 'Distribuição de Agasalhos',
    descricao: 'Triagem e entrega de doações de inverno.',
    voluntariosNecessarios: 10,
    voluntariosConfirmados: 10,
    prioridade: 'MÉDIA',
    status: 'COMPLETA',
    categoriaId: 'cat-2',
  },
]

export const MOCK_CATEGORIAS = [
  { id: 'cat-1', nome: 'ALIMENTOS' },
  { id: 'cat-2', nome: 'VESTUÁRIO' },
  { id: 'cat-3', nome: 'SAÚDE' },
]
