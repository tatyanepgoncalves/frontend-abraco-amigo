import { z } from 'zod'

export const categorySchema = z.object({
  quantidadeDemandas: z.number(),
  id: z.string().uuid(),
  nome: z.string(),
  descricao: z.string().optional(),
  criadoEm: z.string(),
  atualizadoEm: z.string().optional(),
})

export type CategoryData = z.infer<typeof categorySchema>
