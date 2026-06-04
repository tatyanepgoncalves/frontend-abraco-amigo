import { z } from 'zod'

export const createCategorySchema = z.object({
  nome: z
    .string()
    .min(1, 'O nome da categoria deve ter no mínimo 1 caracteres'),
  descricao: z.string().optional(),
})

export type CreateCategoryInput = z.infer<typeof createCategorySchema>
