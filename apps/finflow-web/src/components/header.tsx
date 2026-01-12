"use client"

import Link from "next/link"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">F</span>
            </div>
            <span className="text-xl font-bold">Finflow</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-primary transition-colors hover:text-primary/80">
              Dashboard
            </Link>
            <Link
              href="/assets"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Assets
            </Link>
            <Link
              href="/liabilities"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Liabilities
            </Link>
            <Link
              href="/reports"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Reports
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="sr-only">알림</span>
          </Button>

          <div className="flex items-center gap-2 rounded-full bg-primary px-3 py-1.5">
            <Avatar className="h-6 w-6">
              <AvatarFallback className="bg-primary-foreground text-primary text-xs font-semibold">MS</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium text-primary-foreground">Min-jun & Seo-yeon</span>
          </div>
        </div>
      </div>
    </header>
  )
}
