"use client"

import { useState } from "react"
import { Users, User } from "lucide-react"

export function ViewToggle() {
  const [view, setView] = useState<"joint" | "minjun" | "seoyeon">("joint")

  return (
    <div className="flex justify-end">
      <div className="inline-flex items-center rounded-lg border bg-card p-1 shadow-sm">
        <button
          onClick={() => setView("joint")}
          className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            view === "joint"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Users className="h-4 w-4" />
          Joint
        </button>
        <button
          onClick={() => setView("minjun")}
          className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            view === "minjun"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <User className="h-4 w-4" />
          Min-jun
        </button>
        <button
          onClick={() => setView("seoyeon")}
          className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            view === "seoyeon"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <User className="h-4 w-4" />
          Seo-yeon
        </button>
      </div>
    </div>
  )
}
