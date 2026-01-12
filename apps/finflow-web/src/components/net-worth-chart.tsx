"use client"

import { Card } from "@/components/ui/card"
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Mar", value: 1100 },
  { month: "Apr", value: 1150 },
  { month: "May", value: 1180 },
  { month: "Jun", value: 1195 },
  { month: "Jul", value: 1220 },
  { month: "Aug", value: 1250 },
]

export function NetWorthChart() {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">순자산 성과</h3>
          <p className="text-sm text-muted-foreground">최근 6개월 추이</p>
        </div>
        <div className="rounded-lg bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">₩1.25B</div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="month" className="text-xs" tick={{ fill: "hsl(var(--muted-foreground))" }} />
          <YAxis
            className="text-xs"
            tick={{ fill: "hsl(var(--muted-foreground))" }}
            tickFormatter={(value) => `${value}M`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "0.5rem",
            }}
            formatter={(value: number) => [`₩${value}M`, "순자산"]}
          />
          <Area type="monotone" dataKey="value" stroke="hsl(var(--chart-1))" strokeWidth={2} fill="url(#colorValue)" />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  )
}
