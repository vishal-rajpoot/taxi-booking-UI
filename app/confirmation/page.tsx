"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { RideSummary } from "@/components/ride-summary"
import { PaymentForm } from "@/components/payment-form"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function ConfirmationPage() {
  const [isConfirmed, setIsConfirmed] = useState(false)
  const router = useRouter()

  // Mock data - in a real app, this would come from state management or URL params
  const rideData = {
    pickup: "123 Main Street, Downtown",
    dropoff: "456 Oak Avenue, Uptown",
    date: "Dec 15, 2024",
    time: "2:30 PM",
    passengers: 2,
    vehicleType: "Comfort Sedan",
    vehicleImage: "/mid-size-sedan-car.jpg",
    estimatedDuration: "15 minutes",
    distance: "8.5 miles",
    driverName: "Michael Johnson",
    driverRating: 4.9,
    price: 18.0,
  }

  const handleConfirmBooking = () => {
    setIsConfirmed(true)
    // In a real app, you would make an API call to confirm the booking
    setTimeout(() => {
      router.push("/dashboard")
    }, 3000)
  }

  if (isConfirmed) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="py-16 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-accent/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-accent" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">Booking Confirmed!</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Your ride has been successfully booked. Your driver will arrive in approximately 3-5 minutes.
            </p>
            <div className="bg-card p-6 rounded-lg border border-border mb-6">
              <h3 className="font-semibold text-card-foreground mb-2">Booking Details</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>Booking ID: #RDE-2024-001234</div>
                <div>Driver: {rideData.driverName}</div>
                <div>Vehicle: {rideData.vehicleType}</div>
                <div>Total: ${rideData.price.toFixed(2)}</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Redirecting to your dashboard in a few seconds...</p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/rides" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Ride Options
                </Link>
              </Button>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Confirm Your Booking</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Review your ride details and complete your payment to confirm your booking.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Ride Summary */}
            <div>
              <RideSummary {...rideData} />
            </div>

            {/* Right Column - Payment Form */}
            <div>
              <PaymentForm totalAmount={rideData.price} onConfirm={handleConfirmBooking} />
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="mt-8 p-4 bg-secondary/20 rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              By confirming this booking, you agree to our{" "}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              . Cancellation is free up to 5 minutes before pickup.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
