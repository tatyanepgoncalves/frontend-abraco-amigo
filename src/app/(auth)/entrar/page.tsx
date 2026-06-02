import FormEntrar from '@/components/entrar/form-entrar'
import ImageEntrar from '@/components/entrar/image-entrar'

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
