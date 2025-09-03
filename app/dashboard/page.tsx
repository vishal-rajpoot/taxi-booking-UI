"use client"

import { useState } from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardOverview } from "@/components/dashboard-overview"
import { BookingCard } from "@/components/booking-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, CreditCard, Plus } from "lucide-react"
import React from "react"

const mockAllRides = [
  {
    id: "RDE-001",
    pickup: "123 Main Street, Downtown",
    dropoff: "456 Oak Avenue, Uptown",
    date: "Today",
    time: "2:30 PM",
    vehicleType: "Comfort",
    driverName: "Michael Johnson",
    driverRating: 4.9,
    price: 180,
    status: "upcoming" as const,
  },
  {
    id: "RDE-002",
    pickup: "Airport Terminal 1",
    dropoff: "Hotel Grand Plaza",
    date: "Tomorrow",
    time: "10:15 AM",
    vehicleType: "Premium",
    driverName: "Sarah Wilson",
    driverRating: 5.0,
    price: 350,
    status: "upcoming" as const,
  },
  {
    id: "RDE-098",
    pickup: "Office Building, 5th Ave",
    dropoff: "Central Park West",
    date: "Dec 10",
    time: "6:45 PM",
    vehicleType: "Economy",
    driverName: "David Chen",
    driverRating: 4.8,
    price: 120,
    status: "completed" as const,
  },
  {
    id: "RDE-097",
    pickup: "Shopping Mall",
    dropoff: "Home Address",
    date: "Dec 8",
    time: "3:20 PM",
    vehicleType: "SUV",
    driverName: "Lisa Rodriguez",
    driverRating: 4.7,
    price: 240,
    status: "completed" as const,
  },
]

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState("overview")

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <DashboardOverview />

      case "upcoming":
        return (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h1 className="text-3xl font-bold text-foreground">Upcoming Rides</h1>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Plus className="h-4 w-4 mr-2" />
                Book New Ride
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {mockAllRides
                .filter((ride) => ride.status === "upcoming")
                .map((ride) => (
                  <BookingCard key={ride.id} {...ride} />
                ))}
            </div>
          </div>
        )

      case "history":
        return (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h1 className="text-3xl font-bold text-foreground">Ride History</h1>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search rides..." className="pl-10 w-64" />
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {mockAllRides
                .filter((ride) => ride.status === "completed")
                .map((ride) => (
                  <BookingCard key={ride.id} {...ride} />
                ))}
            </div>
          </div>
        )

      case "payment":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-foreground">Payment Methods</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    Saved Cards
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-6 bg-primary rounded flex items-center justify-center">
                        <span className="text-xs text-primary-foreground font-bold">VISA</span>
                      </div>
                      <div>
                        <div className="font-medium text-card-foreground">•••• •••• •••• 4242</div>
                        <div className="text-sm text-muted-foreground">Expires 12/26</div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Default
                    </Badge>
                  </div>

                  <Button variant="outline" className="w-full bg-transparent">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Card
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Billing Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">This month</span>
                      <span className="font-medium text-card-foreground">₹127.50</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Last month</span>
                      <span className="font-medium text-card-foreground">₹89.25</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Total this year</span>
                      <span className="font-medium text-card-foreground">₹1,247.80</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full bg-transparent">
                    Download Receipt
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case "profile":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-foreground">Profile Settings</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="/professional-driver-avatar.jpg" alt="Profile" />
                      <AvatarFallback className="bg-primary/10 text-primary text-lg">JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold text-card-foreground">Vishal Rajput</h3>
                      <p className="text-muted-foreground">Gold Member</p>
                      <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                        Change Photo
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" defaultValue="Vishal Rajput" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="john.doe@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" defaultValue="+1 (555) 123-4567" />
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Save Changes
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Account Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Member since</span>
                      <span className="font-medium text-card-foreground">January 2023</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Membership level</span>
                      <Badge className="bg-accent/10 text-accent">Gold</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Total rides</span>
                      <span className="font-medium text-card-foreground">127</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Average rating</span>
                      <span className="font-medium text-card-foreground">4.9 ⭐</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case "settings":
        return (
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-foreground">Settings</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-card-foreground">Ride Updates</div>
                        <div className="text-sm text-muted-foreground">Get notified about ride status</div>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-card-foreground">Promotions</div>
                        <div className="text-sm text-muted-foreground">Receive promotional offers</div>
                      </div>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-card-foreground">SMS Alerts</div>
                        <div className="text-sm text-muted-foreground">Text message notifications</div>
                      </div>
                      <input type="checkbox" className="rounded" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Privacy & Security</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    Change Password
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    Two-Factor Authentication
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent">
                    Privacy Settings
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
                  >
                    Delete Account
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      default:
        return <DashboardOverview />
    }
  }

  return (
    <div className="min-h-screen bg-background flex">
      <DashboardSidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      <main className="flex-1 lg:ml-0 p-6 lg:p-8">{renderContent()}</main>
    </div>
  )
}
