'use client'

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface VolunteerContextType {
  addSubscription: (id: string) => void
  removeSubscription: (id: string) => void
  subscriptions: string[]
}

const VolunteerContext = createContext<VolunteerContextType | undefined>(
  undefined
)

export function VolunteerProvider({ children }: { children: ReactNode }) {
  const [subscriptions, setSubscriptions] = useState<string[]>([])

  // Carrega do localStorage apenas uma vez ao montar
  useEffect(() => {
    const saved = localStorage.getItem('my-subscriptions')
    if (saved) {
      setSubscriptions(JSON.parse(saved))
    }
  }, [])

  const addSubscription = (id: string) => {
    const updated = [...subscriptions, id]
    setSubscriptions(updated)
    localStorage.setItem('my-subscriptions', JSON.stringify(updated))
  }

  const removeSubscription = (id: string) => {
    const updated = subscriptions.filter((sId) => sId !== id)
    setSubscriptions(updated)
    localStorage.setItem('my-subscriptions', JSON.stringify(updated))
  }

  return (
    <VolunteerContext.Provider
      value={{ subscriptions, addSubscription, removeSubscription }}
    >
      {children}
    </VolunteerContext.Provider>
  )
}

export const useVolunteer = () => {
  const context = useContext(VolunteerContext)
  if (!context) {
    throw new Error(
      'useVolunteer deve ser usado dentro de um VolunteerProvider'
    )
  }

  return context
}
