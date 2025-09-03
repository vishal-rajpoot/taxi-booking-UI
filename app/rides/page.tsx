"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { RideOptionCard } from "@/components/ride-option-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, ArrowLeft, Clock, Users } from "lucide-react"
import Link from "next/link"

const rideOptions = [
  {
    id: "economy",
    name: "Economy",
    description: "Affordable rides for everyday travel",
    image: "/compact-sedan.png",
    price: 12,
    estimatedTime: "3-5 min",
    capacity: 4,
    rating: 4.8,
    features: ["AC", "Safety", "Clean"],
  },
  {
    id: "comfort",
    name: "Comfort",
    description: "More space and premium features",
    image: "/mid-size-sedan-car.jpg",
    price: 18,
    estimatedTime: "2-4 min",
    capacity: 4,
    rating: 4.9,
    features: ["AC", "WiFi", "Safety", "Premium Interior"],
    popular: true,
  },
  {
    id: "premium",
    name: "Premium",
    description: "Luxury vehicles for special occasions",
    image: "/luxury-sedan.png",
    price: 28,
    estimatedTime: "4-6 min",
    capacity: 4,
    rating: 5.0,
    features: ["AC", "WiFi", "Safety", "Leather Seats", "Premium Sound"],
  },
  {
    id: "suv",
    name: "SUV",
    description: "Spacious rides for groups and families",
    image: "/silver-suv.png",
    price: 24,
    estimatedTime: "5-7 min",
    capacity: 6,
    rating: 4.7,
    features: ["AC", "Safety", "Extra Space", "Luggage Room"],
  },
]

export default function RidesPage() {
  const [selectedRide, setSelectedRide] = useState<string | null>(null)
  const [bookingData, setBookingData] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    passengers: "1",
  })

  const searchParams = useSearchParams()

  useEffect(() => {
    const pickup = searchParams.get("pickup") || ""
    const dropoff = searchParams.get("dropoff") || ""
    const date = searchParams.get("date") || ""
    const time = searchParams.get("time") || ""
    const passengers = searchParams.get("passengers") || "1"

    setBookingData({ pickup, dropoff, date, time, passengers })
  }, [searchParams])

  const handleRideSelect = (rideId: string) => {
    setSelectedRide(rideId)

    const confirmationParams = new URLSearchParams({
      pickup: bookingData.pickup,
      dropoff: bookingData.dropoff,
      date: bookingData.date,
      time: bookingData.time,
      passengers: bookingData.passengers,
      rideType: rideId,
    })

    window.location.href = `/confirmation?${confirmationParams.toString()}`
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="py-4 sm:py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">Back to Home</span>
                  <span className="sm:hidden">Back</span>
                </Link>
              </Button>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Choose Your Ride</h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
              Select from our range of vehicles to find the perfect ride for your journey.
            </p>
          </div>

          {/* Trip Summary Card */}
          <Card className="mb-6 sm:mb-8 bg-card border-border">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-card-foreground">Trip Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-muted-foreground">From</div>
                    <div className="font-medium text-card-foreground truncate">
                      {bookingData.pickup || "123 Main Street"}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-accent/10 rounded-full p-2 flex-shrink-0">
                    <MapPin className="h-4 w-4 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-muted-foreground">To</div>
                    <div className="font-medium text-card-foreground truncate">
                      {bookingData.dropoff || "456 Oak Avenue"}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                    <Clock className="h-4 w-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-muted-foreground">When</div>
                    <div className="font-medium text-card-foreground">
                      {bookingData.date && bookingData.time
                        ? `${bookingData.date} at ${bookingData.time}`
                        : bookingData.date || bookingData.time || "Now"}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-accent/10 rounded-full p-2 flex-shrink-0">
                    <Users className="h-4 w-4 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-muted-foreground">Passengers</div>
                    <div className="font-medium text-card-foreground">
                      {bookingData.passengers} {Number.parseInt(bookingData.passengers) === 1 ? "person" : "people"}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ride Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {rideOptions.map((ride) => (
              <RideOptionCard key={ride.id} {...ride} onSelect={handleRideSelect} />
            ))}
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <Card className="bg-card border-border">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">Real-time Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  Track your driver's location and estimated arrival time in real-time.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Badge className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">Fixed Pricing</h3>
                <p className="text-sm text-muted-foreground">
                  No surge pricing or hidden fees. The price you see is what you pay.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <Button className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">Easy Cancellation</h3>
                <p className="text-sm text-muted-foreground">
                  Cancel your ride anytime before pickup with no cancellation fee.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
