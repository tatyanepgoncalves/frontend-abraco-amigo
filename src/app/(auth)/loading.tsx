import { Loader2 } from 'lucide-react'

export default function AuthLoading() {
  return (
    <div className='h-screen w-full flex items-center justify-center text-black dark:text-white'>
      <p className='text-2xl animate-pulse'>Carregando...</p>
      <Loader2 className="h-10 w-10 animate-spin" />
    </div>
  )
}
