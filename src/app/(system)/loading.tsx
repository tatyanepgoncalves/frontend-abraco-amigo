import { Loader2 } from 'lucide-react'

export default function loading() {
  return (
    <div>
      <Loader2 className="h-10 w-10 animate-spin" />
      <p className="animate-pulse text-2xl text-neutral-800">Carregando...</p>
    </div>
  )
}
