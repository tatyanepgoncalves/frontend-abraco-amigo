import { Loader2 } from 'lucide-react'

export default function DashboardLoading() {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center text-black dark:text-white'>
      <p className='text-2xl animate-pulse'>Carregando...</p>
      <Loader2  className="h-10 w-10 animate-spin"/>
    </div>
  )
}
