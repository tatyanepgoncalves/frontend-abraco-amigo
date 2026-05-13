import Footer from '@/components/layout/system-layout/footer'
import MenuMobile from '@/components/layout/system-layout/menu-mobile'
import Sidebar from '@/components/layout/system-layout/sidebar'

export default function SystemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen min-h-screen w-full">
      <MenuMobile />

      <main className="flex">
        <Sidebar />

        <section className="flex h-screen min-h-screen w-full flex-col justify-between">
          <div className="h-fit w-full px-6 py-4">{children}</div>
          <Footer />
        </section>
      </main>
    </div>
  )
}
