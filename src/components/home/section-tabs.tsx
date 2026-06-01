import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import DemandasTabs from './section-demandas-tabs/demandas-tabs'
import LocaisTabs from './section-locais-tabs/locais-tabs'

export default function SectionTabs() {
  return (
    <Tabs className="gap-8" defaultValue="demandas">
      <div className="flex w-full items-center justify-center">
        <TabsList className="w-full sm:max-w-100">
          <TabsTrigger value="demandas">Demandas</TabsTrigger>
          <TabsTrigger value="locais">Locais</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="demandas">
        <DemandasTabs />
      </TabsContent>
      <TabsContent value="locais">
        <LocaisTabs />
      </TabsContent>
    </Tabs>
  )
}
