import { z } from 'zod'

export const singleDemandaSchema = z.object({
  id: z.string().uuid(),
  titulo: z.string().min(5, 'O título deve ter pelo menos 5 caracteres'),
  descricao: z.string().nullable(),
  tipo: z.enum(['VOLUNTARIADO', 'INSUMO']),
  status: z.enum(['ABERTA', 'COMPLETA', 'CANCELADA']).default('ABERTA'),
  prioridade: z.enum(['BAIXA', 'MEDIA', 'ALTA', 'CRITICA']),
  imagem: z.string().nullable(),

  voluntariosNecessarios: z.coerce.number().nullable(),
  voluntariosConfirmados: z.coerce.number().nullable(),

  quantidade: z.coerce.number().nullable(),
  quantidadeArrecadada: z.coerce.number().nullable(),

  criadoEm: z.string(),

  categoria: z.object({
    id: z.string().uuid(),
    nome: z.string(),
  }),
  local: z.object({
    id: z.string().uuid(),
    nome: z.string(),
    endereco: z.string().nullable(),
    tipoLocal: z
      .enum(['ABRIGO', 'CENTRO_COMUNITARIO', 'ESCOLA', 'HOSPITAL'])
      .default('ABRIGO'),
    imagem: z.string().nullable(),
  }),
})

export const demandaSchema = z.object({
  demandas: z.array(singleDemandaSchema),
})

export type Demanda = z.infer<typeof singleDemandaSchema>
export type DemandaData = z.infer<typeof demandaSchema>
