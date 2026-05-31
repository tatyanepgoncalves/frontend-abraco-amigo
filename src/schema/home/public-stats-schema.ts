import { z } from 'zod'

export const statsPublicSchema = z.object({
  totalVoluntariosEngajados: z.number(),
  totalItensArrecadados: z.number(),
  vagasPreenchidas: z.number(),
  demandasAtendidas: z.number(),
  demandasAbertas: z.number(),
  demandasCriticas: z.number(),
  demandasAltas: z.number(),
})

export type StatsPublicData = z.infer<typeof statsPublicSchema>
