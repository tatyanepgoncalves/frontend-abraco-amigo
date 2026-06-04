import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import {
  type CreateCategoryInput,
  createCategorySchema,
} from '@/schema/voluntariado/create-category-schema'
import { createCategory } from '@/service/category-service'

export default function useCreateCategory(onSucess?: () => void) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isEditting, setIsEditing] = useState(false)
  const router = useRouter()

  const form = useForm<CreateCategoryInput>({
    resolver: zodResolver(createCategorySchema),
    defaultValues: {
      nome: '',
      descricao: '',
    },
  })

  // Função de submitting
  const onSubmit = async (data: CreateCategoryInput) => {
    setIsSubmitting(true)

    try {
      const response = await createCategory(data)
      setIsEditing(false)

      toast.success(`Categoria ${data.nome} criada com sucesso!`)
      form.reset()

      if (onSucess) {
        onSucess()
      }

      router.refresh()
      return response.data
      // biome-ignore lint/suspicious/noExplicitAny: it's necessary
    } catch (error: any) {
      console.log(error)
      toast.error(`Error: ${error.message}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Função de limpeza
  const clearForm = () => {
    form.reset({
      nome: '',
      descricao: '',
    })
  }

  return {
    isOpen,
    setIsOpen,
    isSubmitting,
    setIsSubmitting,
    isEditting,
    setIsEditing,

    form,
    onSubmit,
    clearForm,
  }
}
