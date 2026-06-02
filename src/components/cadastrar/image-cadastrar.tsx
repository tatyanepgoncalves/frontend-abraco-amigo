import { HandHeart, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import ImageCadastro from '@/images/cadastro-image.png'
import ImageCadastroDark from '@/images/cadastro-image-dark.png'

export default function ImageCadastrar() {
  return (
    <div className="relative hidden md:block">
      <Image
        alt="Imagem de cadastro"
        className="block rounded-tl-2xl rounded-bl-2xl dark:hidden"
        height={512}
        src={ImageCadastro}
        width={400}
      />
      <Image
        alt="Imagem de cadastro"
        className="hidden rounded-tl-2xl rounded-bl-2xl dark:block"
        height={512}
        src={ImageCadastroDark}
        width={400}
      />

      <div className="absolute space-y-8 md:bottom-40 md:left-8 lg:bottom-60 lg:left-12">
        <section className="space-y-2">
          <h1 className="font-bold text-3xl text-zinc-800 dark:text-zinc-200">
            Fortaleça <br className="lg:hidden" /> sua comunidade
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Junte-se a uma rede de mais de <br className="lg:hidden" /> 10.000
            voluntários que causam um <br className="lg:hidden" />
            impacto real no mundo todos os dias.
          </p>
        </section>
        <div className="flex w-fit gap-2 rounded-lg bg-card px-4 py-2 shadow-md">
          <HandHeart className="h-4 w-4 text-cyan-500" />
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Fortaleça sua comunidade
          </p>
        </div>
        <div className="absolute left-18 flex w-fit gap-2 rounded-lg bg-card px-4 py-2 shadow-md">
          <ShieldCheck className="h-4 w-4 text-cyan-500" />
          <p className="w-full border text-xs text-zinc-600 dark:text-zinc-400">
            Seguro e verificado
          </p>
        </div>
      </div>
    </div>
  )
}
