import HeaderDesktop from '@/components/layout/private/header-desktop'
import HeaderMobile from '@/components/layout/private/header-mobile'
import ThemeToggle from '@/components/layout/theme-toggle'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

interface LayoutPrivateProps {
  children: React.ReactNode
}

export default function LayoutPrivate({ children }: LayoutPrivateProps) {
  return (
    <SidebarProvider>
      <section className="min-h-screen w-full space-y-8">
        <HeaderMobile />
        <section className="flex h-screen w-full gap-8">
          <HeaderDesktop />
          <div className="hidden md:block">
            <SidebarTrigger />
          </div>

          <div className="absolute top-6 right-6 hidden md:block">
            <ThemeToggle />
          </div>
          {/* className="flex h-full max-h-screen min-h-[80vh] items-center px-6" */}
          <section>{children}</section>
        </section>
      </section>
    </SidebarProvider>
  )
}
