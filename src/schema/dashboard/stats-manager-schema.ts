import { z } from 'zod'

export const statsManagerSchema = z.object({
  usuarios: z.object({
    totalCadastrados: z.number(),
    totalVoluntariosCadastrados: z.number(),
    totalGestores: z.number(),
  }),
  voluntariado: z.object({
    totalVagasAbertas: z.number(),
    totalVagasPreenchidas: z.number(),
    totalCandidaturasRealizadas: z.number(),
  }),
  doacoesInsumos: z.object({
    totalItensArrecadados: z.number(),
    totalRegistrosDoacoes: z.number(),
    doacoesAnonimas: z.number(),
    doacoesLogadas: z.number(),
  }),
  demandasStatus: z.object({
    totalAbertas: z.number(),
    totalCompletas: z.number(),
    totalCanceladas: z.number(),
    criticasPreocupantes: z.number(),
  }),
})

export type StatsManagerData = z.infer<typeof statsManagerSchema>
