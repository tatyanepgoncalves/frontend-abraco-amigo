import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { api } from '@/lib/axios'
import type { Demanda } from '@/schema/demadas-schema'
import { type ApplyFormData, formSchema } from '@/schema/home/apply-demanda'

interface UseApplyDemandaProps {
  demanda: Demanda
  onSuccess?: () => void
  tipoDemanda: 'INSUMO' | 'VOLUNTARIADO'
}

export function useApplyDemanda({
  demanda,
  onSuccess,
  tipoDemanda,
}: UseApplyDemandaProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const form = useForm<ApplyFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: '',
      email: '',
      telefone: '',
      endereco: '',
      quantidade: tipoDemanda === 'INSUMO' ? 1 : undefined,
      unidadeMedida: tipoDemanda === 'INSUMO' ? 'KG' : undefined,
    },
  })

  const onSubmit = async (data: ApplyFormData) => {
    setIsSubmitting(true)
    try {
      const endpoints =
        tipoDemanda === 'INSUMO'
          ? `/demandas/${demanda.id}/doar`
          : `/demandas/${demanda.id}/candidatar`

      const body =
        tipoDemanda === 'INSUMO'
          ? {
              nome: data.nome,
              email: data.email,
              telefone: data.telefone,
              endereco: data.endereco || undefined,
              quantidade: data.quantidade,
              unidadeMedida: data.unidadeMedida,
            }
          : {
              nome: data.nome,
              email: data.email,
              telefone: data.telefone,
              endereco: data.endereco || undefined,
            }

      const response = await api.post(endpoints, body)

      if (response.status === 201 || response.status === 200) {
        toast.success('Aplicação enviada com sucesso!')
        form.reset()
        router.refresh()

        setIsOpen(false)

        if (onSuccess) {
          onSuccess()
        }
      }

      if (response.status !== 201 && response.status !== 200) {
        toast.error(response.data?.mensagem || 'Erro ao enviar a aplicação.')
      }

      // biome-ignore lint/suspicious/noExplicitAny: it's necessary
    } catch (error: any) {
      toast.error(
        error.response?.data?.mensagem || 'Erro ao enviar a aplicação.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    form,
    isOpen,
    setIsOpen,
    isSubmitting,
    onSubmit: form.handleSubmit(onSubmit),
  }
}
