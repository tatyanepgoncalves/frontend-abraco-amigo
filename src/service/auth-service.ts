import { api } from '@/lib/axios'
import type { LoginFormData, RegisterFormData } from '@/schema/auth-schema'

export async function registerUser(data: RegisterFormData) {
  try {
    const { confirmarSenha, ...payload } = data
    const response = await api.post('/usuarios', payload)
    return response.data

    // biome-ignore lint/suspicious/noExplicitAny: it's necessary
  } catch (error: any) {
    const message = error.response?.data?.message || 'Erro ao cadastrar usuário'
    console.log(error.response?.data)
    throw new Error(message)
  }
}

export async function loginUser(data: LoginFormData) {
  try {
    const response = await api.post('/login', data)
    return response.data

    // biome-ignore lint/suspicious/noExplicitAny: it's necessary
  } catch (error: any) {
    const message = error.response?.data?.message || 'Error ao realizar login.'
    console.log(error.response?.data)
    throw new Error(message)
  }
}

export async function logoutUser() {
  try {
    const response = await api.post('/logout')
    return response.data

    // biome-ignore lint/complexity/noUselessCatchBinding: it's necessary here
    // biome-ignore lint/correctness/noUnusedVariables: it's necessary here
  } catch (error) {
    throw new Error('Error ao sair do sistema.')
  }
}
