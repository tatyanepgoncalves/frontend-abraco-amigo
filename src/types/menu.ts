import {
  HandHeart,
  History,
  LayoutDashboard,
  MapIcon,
  Settings,
  User,
} from 'lucide-react'

export const menuItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Voluntariado', href: '/voluntariado', icon: HandHeart },
  { name: 'Instituições', href: '/instituicoes', icon: MapIcon },
  { name: 'Minhas demandas', href: '/minhas-demandas', icon: History },
]

export const menuItemsGestor = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Voluntariado', href: '/voluntariado', icon: HandHeart },
  { name: 'Instituições', href: '/instituicoes', icon: MapIcon },
  { name: 'Minhas demandas', href: '/minhas-demandas', icon: History },
]

export const dropdownItens = [
  { name: 'Perfil', href: '/perfil', icon: User },
  { name: 'Configurações', href: '/configuracoes', icon: Settings },
]
