import type { Metadata } from 'next'
import FormEntrar from '@/components/entrar/form-entrar'
import ImageEntrar from '@/components/entrar/image-entrar'

export const metadata: Metadata = {
  title: 'Entrar | Abraco Amigo',
  description: 'Acesse sua conta na Central de Coordenação de Apoio.',
}

export default function Entrar() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex h-fit w-full max-w-130 items-center justify-center rounded-2xl border bg-card shadow-md md:max-w-3xl md:justify-between">
        <ImageEntrar />
        <FormEntrar />
      </div>
    </div>
  )
}
