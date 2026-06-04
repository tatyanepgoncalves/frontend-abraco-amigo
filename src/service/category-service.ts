import { api } from '@/lib/axios'
import type { CreateCategoryInput } from '@/schema/voluntariado/create-category-schema'

export async function getCategory() {
  try {
    const response = await api.get('/categorias')
    return response.data?.categorias ?? []
  } catch (error) {
    console.error('Erro ao buscar categorias:', error)
    return []
  }
}

export async function createCategory(data: CreateCategoryInput) {
  try {
    console.log('Payload enviado:', JSON.stringify(data, null, 2))
    const response = await api.post('/categorias', data)
    return response.data
    // biome-ignore lint/suspicious/noExplicitAny: it's necessary for the message
  } catch (error: any) {
    console.error('Status:', error.response?.status)
    console.error(
      'Data completa:',
      JSON.stringify(error.response?.data, null, 2)
    )
    console.error('Payload que causou erro:', JSON.stringify(data, null, 2))

    // Captura o erro detalhado do Zod do backend se houver
    const apiMessage =
      error.response?.data?.mensagem || error.response?.data?.message

    console.error(
      'Erro completo ao cadastrar categoria:',
      error.response?.data || error
    )

    throw new Error(apiMessage || 'Erro ao cadastrar  categorias no servidor.')
  }
}
