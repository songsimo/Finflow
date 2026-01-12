import { Header } from "@/components/header"
import { NetWorthCard } from "@/components/net-worth-card"
import { SummaryCards } from "@/components/summary-cards"
import { ViewToggle } from "@/components/view-toggle"
import { NetWorthChart } from "@/components/net-worth-chart"
import { AssetAllocationChart } from "@/components/asset-allocation-chart"

export default function DashboardPage() {
  return (
      <div className="min-h-screen">
        <Header />

        <main className="container px-4 py-8 md:px-6">
          <div className="mb-8">
            <h1 className="mb-2 text-4xl font-bold">Overview</h1>
            <p className="text-muted-foreground">Your joint financial health at a glance.</p>

            <ViewToggle />
          </div>

          <div className="mb-8 grid gap-6 lg:grid-cols-3 lg:items-stretch">
            <div className="lg:col-span-2">
              <NetWorthCard />
            </div>
            <div>
              <SummaryCards />
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <NetWorthChart />
            <AssetAllocationChart />
          </div>
        </main>
      </div>
  )
}
