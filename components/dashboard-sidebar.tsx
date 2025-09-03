"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Home, Calendar, History, CreditCard, Settings, User, LogOut, Menu, X, Car } from "lucide-react"

interface DashboardSidebarProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function DashboardSidebar({ activeSection, onSectionChange }: DashboardSidebarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const menuItems = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "upcoming", label: "Upcoming Rides", icon: Calendar },
    { id: "history", label: "Ride History", icon: History },
    { id: "payment", label: "Payment Methods", icon: CreditCard },
    { id: "profile", label: "Profile", icon: User },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-sidebar border-r border-sidebar-border">
      {/* Header */}
      <div className="p-6 border-b border-sidebar-border">
        <Link href="/" className="flex items-center space-x-2 mb-4">
          <Car className="h-8 w-8 text-sidebar-primary" />
          <span className="text-xl font-bold text-sidebar-foreground">RideEasy</span>
        </Link>

        {/* User Info */}
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/professional-driver-avatar.jpg" alt="User" />
            <AvatarFallback className="bg-sidebar-accent text-sidebar-accent-foreground">JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="font-medium text-sidebar-foreground truncate">Vishal Rajput</div>
            <div className="text-sm text-sidebar-foreground/70">VishalRajpoot@email.com</div>
          </div>
          <Badge variant="secondary" className="bg-sidebar-accent/20 text-sidebar-accent">
            Gold
          </Badge>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id

          return (
            <button
              key={item.id}
              onClick={() => {
                onSectionChange(item.id)
                setIsMobileOpen(false)
              }}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <Button
          variant="ghost"
          className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent/50"
          asChild
        >
          <Link href="/">
            <LogOut className="h-5 w-5 mr-3" />
            Sign Out
          </Link>
        </Button>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button variant="outline" size="sm" onClick={() => setIsMobileOpen(!isMobileOpen)} className="bg-background">
          {isMobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-80 h-screen sticky top-0">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[80vw]">
            <SidebarContent />
          </div>
        </div>
      )}
    </>
  )
}
