import { Loader2 } from 'lucide-react'

export default function SystemLoading() {
  return (
    <div className='h-[50vh] w-full text-black dark:text-white flex flex-col items-center justify-center'>
      <Loader2 className="h-10 w-10 animate-spin" />
      <p className="animate-pulse text-2xl">Carregando...</p>
    </div>
  )
}
