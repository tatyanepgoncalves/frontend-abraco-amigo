import { api } from '@/lib/axios'
import type { LoginFormData } from '@/schema/login-schema'
import type { RegisterFormData } from '@/schema/register-schema'

export async function registerUser(data: RegisterFormData) {
  try {
    const response = await api.post('/usuarios', data)
    return response.data
    // biome-ignore lint/suspicious/noExplicitAny: it's necessary
  } catch (error: any) {
    const message = error.response?.data?.message || 'Erro ao cadastrar usuário'
    console.error('Erro ao registrar usuário:', error.response?.data?.message)
    throw new Error(message)
  }
}

export async function loginUser(data: LoginFormData) {
  try {
    const response = await api.post('/login', data)
    return response.data
    // biome-ignore lint/suspicious/noExplicitAny: it's necessary
  } catch (error: any) {
    const message = error.response?.data?.message || 'Erro ao fazer login'
    throw new Error(message)
  }
}

export async function logoutUser() {
  try {
    const response = await api.post('/logout')
    return response.data
    // biome-ignore lint/suspicious/noExplicitAny: it's necessary
  } catch (error: any) {
    const message =
      error.response?.data?.message || 'Erro ao fazer sair do sistema.'
    throw new Error(message)
  }
}
