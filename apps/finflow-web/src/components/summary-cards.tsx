import { TrendingUp, TrendingDown } from "lucide-react"
import { Card } from "@/components/ui/card"

export function SummaryCards() {
  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <Card className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-sm font-medium text-muted-foreground">총 자산</h3>
          <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-2 py-0.5 text-xs font-medium text-success">
            <TrendingUp className="h-3 w-3" />
            +1.2%
          </span>
        </div>
        <p className="text-3xl font-bold">₩1,450,000,000</p>
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-success/20">
          <div className="h-full w-full bg-success" />
        </div>
      </Card>

      <Card className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-sm font-medium text-muted-foreground">총 부채</h3>
          <span className="inline-flex items-center gap-1 rounded-full bg-destructive/10 px-2 py-0.5 text-xs font-medium text-destructive">
            <TrendingDown className="h-3 w-3" />
            -0.5%
          </span>
        </div>
        <p className="text-3xl font-bold">₩200,000,000</p>
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-destructive/20">
          <div className="h-full w-2/12 bg-destructive" />
        </div>
      </Card>
    </div>
  )
}
