import { Skeleton } from '@/components/ui/skeleton'

export default function PublicLoading() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 md:p-8">
      {/* Container Principal Simulado */}
      <div className="w-full max-w-4xl animate-pulse space-y-6">
        {/* Topo / Header do Dashboard ou Formulário */}
        <div className="flex flex-col items-start justify-between gap-4 border-b pb-6 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <Skeleton className="h-8 w-48 rounded-md" />{' '}
            {/* Título da Página */}
            <Skeleton className="h-4 w-64 rounded-md" /> {/* Subtítulo */}
          </div>
          <Skeleton className="h-10 w-28 rounded-md" />{' '}
          {/* Botão de ação ou Avatar */}
        </div>

        {/* Corpo Variável (Simula Grid de Dashboard ou Caixa de Login/Cadastro) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1 ou Área Lateral do Formulário */}
          <div className="space-y-4 rounded-xl border p-4 md:col-span-1">
            <Skeleton className="h-6 w-1/2 rounded" />
            <Skeleton className="h-24 w-full rounded-lg" />
            <Skeleton className="h-10 w-full rounded-md" />
          </div>

          {/* Card 2 ou Inputs de Formulário */}
          <div className="space-y-4 rounded-xl border p-6 md:col-span-2">
            <div className="space-y-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
            <div className="pt-2">
              <Skeleton className="h-11 w-full rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
