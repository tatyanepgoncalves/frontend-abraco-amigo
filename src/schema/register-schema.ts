import { z } from 'zod'

export const registerSchema = z
  .object({
    nome: z.string().min(3, 'O nome deve ter no mínimo 3 caracteres'),
    email: z.string().email('E-mail inválido'),
    senha: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres'),
    confirmarSenha: z.string(),
    tipoUsuario: z.enum(['GESTOR', 'VOLUNTARIO']),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    message: 'As senhas não coincidem',
    path: ['confirmarSenha'],
  })

export type RegisterFormData = z.infer<typeof registerSchema>
