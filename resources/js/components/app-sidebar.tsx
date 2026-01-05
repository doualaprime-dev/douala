import { NavMain } from '@/components/nav-main'
import { NavUser } from '@/components/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { type NavItem } from '@/types'
import { Link } from '@inertiajs/react'
import {
  BookOpen,
  Diamond,
  Folder,
  LayoutGrid,
  ShoppingBag,
  TagIcon,
  User,
  Users,
} from 'lucide-react'
import AppLogo from './app-logo'

const mainNavItems: NavItem[] = [
  {
    title: 'Tableau de bord',
    href: '/dashboard',
    icon: LayoutGrid,
  },
  {
    title: 'Commandes',
    href: '/admin/orders',
    icon: ShoppingBag,
  },
  {
    title: 'Marques',
    href: '/admin/brands',
    icon: TagIcon,
  },

  {
    title: 'Catégories',
    href: '/admin/categories',
    icon: TagIcon,
  },

  {
    title: 'Produits',
    href: '/admin/products',
    icon: Diamond,
  },

  {
    title: 'Utilisateurs',
    href: '/admin/users',
    icon: Users,
  },
  {
    title: 'Administrateurs',
    href: '/admin/admins',
    icon: User,
  },
  {
    title: 'Articles',
    href: '/admin/posts',
    icon: User,
  },
  {
    title: 'Contacts',
    href: '/admin/contacts',
    icon: User,
  },
]

const footerNavItems: NavItem[] = [
  {
    title: 'Repository',
    href: 'https://github.com/laravel/react-starter-kit',
    icon: Folder,
  },
  {
    title: 'Documentation',
    href: 'https://laravel.com/docs/starter-kits',
    icon: BookOpen,
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard" prefetch>
                <AppLogo />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={mainNavItems} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  )
}
