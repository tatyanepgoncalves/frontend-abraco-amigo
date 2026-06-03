import type { Metadata } from 'next'
import FormCadastrar from '@/components/cadastrar/form-cadastrar'
import ImageCadastrar from '@/components/cadastrar/image-cadastrar'

export const metadata: Metadata = {
  title: 'Cadastrar | Abraco Amigo',
  description: 'Crie sua conta na Central de Coordenação de Apoio.',
}

export default function Cadastrar() {
  return (
    <section className="flex w-full items-center justify-center">
      <section className="flex w-full max-w-130 items-center justify-center rounded-2xl border bg-card shadow-md md:max-w-3xl md:justify-between">
        <ImageCadastrar />
        <FormCadastrar />
      </section>
    </section>
  )
}
