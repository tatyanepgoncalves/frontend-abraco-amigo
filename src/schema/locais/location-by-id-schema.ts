import { z } from 'zod'

export const locationByIdSchema = z.object({
  id: z.string().uuid(),
  nome: z.string(),
  endereco: z.string(),
  telefone: z.string().nullable(),
  email: z.string().nullable(),
  tipoLocal: z.enum([
    'ABRIGO',
    'CENTRO_COMUNITARIO',
    'ESCOLA',
    'HOSPITAL',
    'ONG',
  ]),
  imagem: z.string().nullable(),
  gestor: z.object({
    nome: z.string(),
  }),
  demandas: z.array(
    z.object({
      id: z.string().uuid(),
      titulo: z.string(),
      descricao: z.string().nullable(),
      status: z.enum(['ABERTA', 'COMPLETA', 'CANCELADA']),
      tipo: z.enum(['INSUMO', 'VOLUNTARIADO']),
      prioridade: z.enum(['BAIXA', 'MEDIA', 'ALTA', 'CRITICA']),
    })
  ),
  vagasTotais: z.number(),
  vagasPreenchidas: z.number(),
  possuiUrgenciaAlta: z.boolean(),
})

export type LocationByIdData = z.infer<typeof locationByIdSchema>
