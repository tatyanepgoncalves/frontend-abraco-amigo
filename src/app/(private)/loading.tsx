// app/(private)/loading.tsx
import { Skeleton } from '@/components/ui/skeleton'

export default function LoadingPrivate() {
  return (
    <div className="h-full w-full animate-pulse space-y-6 px-6">
      {/* SEÇÃO DO TOPO: Título da Página e Subtítulo simulados */}
      <div className="space-y-2 pt-4 md:pt-0">
        <Skeleton className="h-8 w-48 bg-zinc-200 dark:bg-zinc-800" />
        <Skeleton className="h-4 w-72 bg-zinc-100 dark:bg-zinc-800/60" />
      </div>

      <hr className="border-zinc-200 dark:border-zinc-800" />

      {/* SEÇÃO DOS CARDS: Simulando perfeitamente o seu Grid de SectionStatsManagers */}
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Criamos uma array fake de 6 posições para renderizar os 6 cards simulados */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            className="space-y-4 rounded-xl border border-zinc-200 bg-card p-6 dark:border-zinc-800"
            // Usando uma key simples baseada no index já que é uma lista estática de loading
            // biome-ignore lint/suspicious/noArrayIndexKey: strictly for presentation skeleton mockup
            key={i}
          >
            {/* Header do Card (Título pequeno na esquerda, ícone na direita) */}
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-28 bg-zinc-200 dark:bg-zinc-800" />
              <Skeleton className="h-8 w-8 rounded-md bg-zinc-200 dark:bg-zinc-800" />
            </div>

            {/* Conteúdo do Card (O número grande de estatística) */}
            <div className="space-y-2">
              <Skeleton className="h-9 w-16 bg-zinc-200 dark:bg-zinc-800" />
              <Skeleton className="h-3 w-40 bg-zinc-100 dark:bg-zinc-800/60" />
            </div>
          </div>
        ))}
      </div>

      {/* SEÇÃO DE CONTEÚDO EXTRA (Simulando uma tabela ou lista abaixo dos cards) */}
      <div className="space-y-3 rounded-xl border border-zinc-200 bg-card p-6 dark:border-zinc-800">
        <Skeleton className="h-5 w-32 bg-zinc-200 dark:bg-zinc-800" />
        <Skeleton className="h-10 w-full bg-zinc-100 dark:bg-zinc-800/60" />
        <Skeleton className="h-10 w-full bg-zinc-100 dark:bg-zinc-800/60" />
        <Skeleton className="h-10 w-full bg-zinc-100 dark:bg-zinc-800/60" />
      </div>
    </div>
  )
}
