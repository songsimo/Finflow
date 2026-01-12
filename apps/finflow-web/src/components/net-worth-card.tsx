import { Building2, TrendingUp, Eye } from "lucide-react"
import { Card } from "@/components/ui/card"

export function NetWorthCard() {
  return (
    <Card className="relative h-full overflow-hidden border-none bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] p-6 text-white shadow-lg">
      <button className="absolute right-6 top-6 text-white/80 hover:text-white">
        <Eye className="h-5 w-5" />
      </button>

      <div className="relative z-10 flex h-full flex-col justify-center">
        <div className="mb-3 flex items-center gap-2 text-white/90">
          <Building2 className="h-5 w-5" />
          <span className="text-sm font-medium uppercase tracking-wide">Total Net Worth</span>
        </div>

        <div className="mb-8">
          <h2 className="mb-3 text-5xl font-bold leading-none tracking-tight">₩1,250,000,000</h2>
          <div className="flex items-center gap-2 text-white/90">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-medium">+2.4%</span>
            <span className="text-sm">vs last month</span>
          </div>
        </div>

        <div className="border-t border-white/20 pt-5">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="mb-2 text-sm text-white/70">Liquid Assets</p>
              <p className="text-xl font-semibold">₩145,000,000</p>
            </div>
            <div>
              <p className="mb-2 text-sm text-white/70">Illiquid Assets</p>
              <p className="text-xl font-semibold">₩1,105,000,000</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
