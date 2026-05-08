export const DEMANDAS_MOCK = [
  {
    id: 1,
    titulo: 'Manutenção Preventiva',
    categoria: 'Infraestrutura',
    local: 'São Paulo, SP',
    descricao: 'Revisão semestral dos sistemas elétricos do bloco A.',
  },
  {
    id: 2,
    titulo: 'Instalação de Rede',
    categoria: 'TI',
    local: 'Curitiba, PR',
    descricao:
      'Configuração de novos pontos de acesso Wi-Fi 6 no andar térreo.',
  },
  // ... adicione mais conforme necessário
]

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
