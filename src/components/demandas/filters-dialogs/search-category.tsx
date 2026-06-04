import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { CategoryData } from '@/schema/category-schema'

interface SearchCategoryProps {
  category: CategoryData[]
  onValueChange?: () => void
}

export default function SearchCategory({
  category,
  onValueChange,
}: SearchCategoryProps) {
  if (!category || category.length === 0) {
    return (
      <Select disabled>
        <SelectTrigger className="w-45">
          <SelectValue placeholder="Nenhuma categoria encontrada" />
        </SelectTrigger>
      </Select>
    )
  }

  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger>
        <SelectValue placeholder="Busca por categoria..." />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="*">Todas as categorias</SelectItem>

        {category.map((cat) => (
          <SelectItem key={cat.id} value={cat.id}>
            {cat.nome}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
