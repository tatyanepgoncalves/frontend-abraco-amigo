export type UrgencyLevel = 'Alta' | 'Média' | 'Baixa'

export interface Need {
  description: string
  id: string
  quantityNeeded: number
  quantityReceived: number
  urgency: UrgencyLevel
}

export interface Location {
  address: string
  contact: string
  coordinator: string
  currentVolunteers: number
  id: string
  maxVolunteers: number
  name: string
  needs: Need[]
}
