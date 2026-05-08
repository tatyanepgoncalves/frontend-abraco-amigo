export const MOCK_LOCATIONS = [
  {
    id: '1',
    name: 'Centro de Distribuição',
    address: 'Rua Exemplo, 123 - São Paulo/SP',
    coordinator: 'Maria Silva',
    contact: '(11) 99999-9999',
    currentVolunteers: 5,
    maxVolunteers: 10,
    needs: [
      {
        id: '1',
        description: 'Necessidade 1',
        quantityNeeded: 7,
        quantityReceived: 3,
        urgency: 'Alta',
      },
      {
        id: '2',
        description: 'Necessidade 2',
        quantityNeeded: 3,
        quantityReceived: 2,
        urgency: 'Média',
      },
    ],
  },
  {
    id: '2',
    name: 'Ponto de Coleta',
    address: 'Avenida Principal, 456 - Rio de Janeiro/RJ',
    coordinator: 'João Santos',
    contact: '(21) 88888-8888',
    currentVolunteers: 3,
    maxVolunteers: 7,
    needs: [
      {
        id: '3',
        description: 'Necessidade 3',
        quantityNeeded: 7,
        quantityReceived: 3,
        urgency: 'Baixa',
      },
    ],
  },
  {
    id: '3',
    name: 'Ponto de Coleta',
    address: 'Avenida Principal, 456 - Rio de Janeiro/RJ',
    coordinator: 'João Santos',
    contact: '(21) 88888-8888',
    currentVolunteers: 1,
    maxVolunteers: 10,
    needs: [
      {
        id: '3',
        description: 'Necessidade 3',
        quantityNeeded: 10,
        quantityReceived: 1,
        urgency: 'Baixa',
      },
    ],
  },
]
