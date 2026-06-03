import { z } from 'zod'

export const statsGeneralSchema = z.object({
  totalAbertas: z.number(),
  totalCompletas: z.number(),
  totalCanceladas: z.number(),
  criticasPreocupantes: z.number(),
})

export type StatsGeneralData = z.infer<typeof statsGeneralSchema>
