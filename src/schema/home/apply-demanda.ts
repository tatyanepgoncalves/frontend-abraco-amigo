import { z } from 'zod'

// Base schema for user information shared across both actions
export const baseSchema = z.object({
  nome: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('E-mail inválido'),
  telefone: z.string().min(10, 'O telefone deve ter pelo menos 10 dígitos'),
  endereco: z.string().optional(),
})

// Formulário para quando a demanda for do tipo VOLUNTARIADO
export const candidaturaVoluntarioSchema = z.object({
  nomeVoluntario: z.string().min(3, 'O nome deve ter pelo menos 3 caracteres'),
  telefoneVoluntario: z
    .string()
    .min(10, 'Informe um telefone válido para contato'),
  disponibilidade: z
    .string()
    .min(5, 'Informe brevemente seus dias/horários disponíveis'),
})

// Extended schema to handle the optional resource field safely
export const formSchema = baseSchema.extend({
  quantidade: z.coerce
    .number()
    .positive('A quantidade deve ser maior que zero')
    .optional(),
  unidadeMedida: z.enum(['KG', 'LITROS', 'UNIDADES', 'PACOTES']),
})

export type ApplyFormData = z.infer<typeof formSchema>
