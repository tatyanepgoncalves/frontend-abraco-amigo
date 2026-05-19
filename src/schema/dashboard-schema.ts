import z from 'zod'

export const statsPublicSchema = z.object({
  totalVoluntariosEngajados: z.number(),
  totalItensArrecadados: z.number(),
  demandasAtendidas: z.number(),
  demandasAbertas: z.number(),
  demandasCriticas: z.number(),
  demandasAltas: z.number(),
})

export type statsPublicData = z.infer<typeof statsPublicSchema>
