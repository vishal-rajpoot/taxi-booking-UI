"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookingCard } from "@/components/booking-card"
import { Car, Clock, Star, TrendingUp, Plus } from "lucide-react"
import Link from "next/link"

const mockUpcomingRides = [
  {
    id: "RDE-001",
    pickup: "123 Main Street, Downtown",
    dropoff: "456 Oak Avenue, Uptown",
    date: "Today",
    time: "2:30 PM",
    vehicleType: "Comfort",
    driverName: "Michael Johnson",
    driverRating: 4.9,
    price: 18,
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
    price: 35,
    status: "upcoming" as const,
  },
]

const mockRecentRides = [
  {
    id: "RDE-098",
    pickup: "Office Building, 5th Ave",
    dropoff: "Central Park West",
    date: "Dec 10",
    time: "6:45 PM",
    vehicleType: "Economy",
    driverName: "David Chen",
    driverRating: 4.8,
    price: 12,
    status: "completed" as const,
  },
]

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back, John!</h1>
          <p className="text-muted-foreground">Here's what's happening with your rides today.</p>
        </div>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
          <Link href="/">
            <Plus className="h-4 w-4 mr-2" />
            Book New Ride
          </Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">Total Rides</CardTitle>
            <Car className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">127</div>
            <p className="text-xs text-muted-foreground">+12 from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">This Month</CardTitle>
            <Clock className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">23</div>
            <p className="text-xs text-muted-foreground">+8 from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">Average Rating</CardTitle>
            <Star className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">4.9</div>
            <p className="text-xs text-muted-foreground">Excellent service</p>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">Total Spent</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">₹1,247</div>
            <p className="text-xs text-muted-foreground">This year</p>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Rides */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">Upcoming Rides</h2>
          <Button variant="outline" size="sm" asChild>
            <Link href="#" onClick={(e) => e.preventDefault()}>
              View All
            </Link>
          </Button>
        </div>

        {mockUpcomingRides.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {mockUpcomingRides.map((ride) => (
              <BookingCard key={ride.id} {...ride} />
            ))}
          </div>
        ) : (
          <Card className="bg-card border-border">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Car className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium text-card-foreground mb-2">No upcoming rides</h3>
              <p className="text-muted-foreground text-center mb-4">
                You don't have any rides scheduled. Book your next ride now!
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/">Book a Ride</Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Recent Rides */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">Recent Rides</h2>
          <Button variant="outline" size="sm" asChild>
            <Link href="#" onClick={(e) => e.preventDefault()}>
              View All
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {mockRecentRides.map((ride) => (
            <BookingCard key={ride.id} {...ride} />
          ))}
        </div>
      </div>
    </div>
  )
}
