import z from 'zod'

export const singleLocation = z.object({
  id: z.string().uuid(),
  nome: z.string(),
  endereco: z.string(),
  telefone: z.string(),
  email: z.string().nullable(),
  gestor: z.object({
    id: z.string().uuid(),
    nome: z.string(),
  }),
  imagem: z.string().nullable(),
  tipoLocal: z.enum([
    'ABRIGO',
    'CENTRO_COMUNITARIO',
    'ESCOLA',
    'HOSPITAL',
    'ONG',
  ]),
  criadoEm: z.string(),
  atualizadoEm: z.string().optional().nullable(),
  deletadoEm: z.string().optional().nullable(),

  doacoesAbertas: z.number(),
  doacoesNecessarias: z.number(),
  doacoesRecebidas: z.number(),

  vagasVoluntariadoAbertas: z.number(),
  vagasTotais: z.number(),
  vagasPreenchidas: z.number(),
  possuiUrgenciaAlta: z.boolean(),
})

export const locationsSchema = z.object({
  locais: z.array(singleLocation),
})

export type Location = z.infer<typeof singleLocation>
export type LocationsData = z.infer<typeof locationsSchema>
