import { z } from 'zod'

export const locationSchema = z.object({
  id: z.string().uuid(),
  nome: z.string().max(255),
  endereco: z.string().nullable(),
  telefone: z.string().nullable(),
  email: z.string().email().nullable(),
  gestor: z.object({
    id: z.string().uuid(),
    nome: z.string(),
  }),
  imagem: z.string().nullable(),
  tipoLocal: z.enum(['ABRIGO', 'CENTRO_COMUNITARIO', 'ESCOLA', 'HOSPITAL']),
  criadoEm: z.string(),
  vagasTotais: z.number(),
  vagasPreenchidas: z.number(),
  possuiUrgenciaAlta: z.boolean(),
})

export type LocationData = z.infer<typeof locationSchema>

export const searchLocationFilterSchema = z
  .object({
    nome: z.string().optional(),
  })
  .optional()

export type SearchLocationFilterData = z.infer<
  typeof searchLocationFilterSchema
>
