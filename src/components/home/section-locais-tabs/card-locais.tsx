import { ImageOff } from 'lucide-react'
import Image from 'next/image'
import type { Location } from '@/types/location'

interface CardLocaisProps {
  locais: Location
}

export default function CardLocais({ locais }: CardLocaisProps) {
  return (
    <article className="flex h-80 flex-col justify-between rounded-xl bg-card shadow-sm transition-all hover:shadow-md dark:bg-zinc-800">
      <div className="relative h-44 w-full bg-zinc-100 dark:bg-zinc-700">
        {locais.imagem ? (
          <Image
            alt={locais.nome}
            className="h-48 w-full rounded-md object-cover"
            height={176}
            src={locais.imagem}
            width={400}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center text-zinc-400">
            <ImageOff className="h-8 w-8 stroke-[1.2]" />
            <span className="mt-1 text-xs">Sem imagem disponível</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg">{locais.nome}</h3>
        <p className="text-muted-foreground text-sm">{locais.endereco}</p>
        <p className="text-muted-foreground text-sm">{locais.telefone}</p>
      </div>
    </article>
  )
}
