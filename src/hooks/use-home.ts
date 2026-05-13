import { useEffect, useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { getLocations } from '@/services/location-service'

export default function useHome() {
  const { user, loading: authLoading } = useAuth()
  const [locations, setLocations] = useState<any[]>([])
  const [loadingLocations, setLoadingLocations] = useState(true)

  useEffect(() => {
    async function loadData() {
      const data = await getLocations()
      setLocations(data)
      setLoadingLocations(false)
    }
    loadData()
  }, [])

  return {
    user,
    locations,
    setLocations,
    loadingLocations,
    setLoadingLocations,
    loading: authLoading,
  }
}
