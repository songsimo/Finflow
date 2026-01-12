"use client"

import { Card } from "@/components/ui/card"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

const data = [
  { name: "부동산", value: 65, color: "hsl(var(--chart-1))" },
  { name: "주식", value: 20, color: "hsl(var(--chart-2))" },
  { name: "현금", value: 10, color: "hsl(var(--chart-3))" },
  { name: "기타", value: 5, color: "hsl(var(--chart-4))" },
]

export function AssetAllocationChart() {
  return (
    <Card className="p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">자산 배분</h3>
        <p className="text-sm text-muted-foreground">카테고리별 비중</p>
      </div>

      <div className="flex items-center gap-8">
        <div className="relative flex-1">
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={80} outerRadius={110} paddingAngle={2} dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-sm text-muted-foreground">TOP ASSET</p>
            <p className="text-3xl font-bold">65%</p>
            <p className="text-sm font-medium text-primary">부동산</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
              <div className="flex-1">
                <p className="text-sm font-medium">{item.name}</p>
              </div>
              <p className="text-sm font-semibold">{item.value}%</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
