"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Calendar, Clock, Users } from "lucide-react"

export function BookingForm() {
  const [formData, setFormData] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    passengers: "1",
  })

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.pickup || !formData.dropoff) {
      alert("Please enter both pickup and drop-off locations")
      return
    }

    const bookingParams = new URLSearchParams({
      pickup: formData.pickup,
      dropoff: formData.dropoff,
      date: formData.date || new Date().toISOString().split("T")[0],
      time: formData.time || "now",
      passengers: formData.passengers,
    })

    router.push(`/rides?${bookingParams.toString()}`)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl border-0 bg-card">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-bold text-card-foreground">Book Your Ride</CardTitle>
        <p className="text-muted-foreground">Quick and easy taxi booking in just a few clicks</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Pickup Location */}
          <div className="space-y-2">
            <Label htmlFor="pickup" className="flex items-center gap-2 text-sm font-medium">
              <MapPin className="h-4 w-4 text-primary" />
              Pickup Location
            </Label>
            <Input
              id="pickup"
              placeholder="Enter pickup address"
              value={formData.pickup}
              onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
              className="bg-input border-border focus:ring-ring"
              required
            />
          </div>

          {/* Drop-off Location */}
          <div className="space-y-2">
            <Label htmlFor="dropoff" className="flex items-center gap-2 text-sm font-medium">
              <MapPin className="h-4 w-4 text-accent" />
              Drop-off Location
            </Label>
            <Input
              id="dropoff"
              placeholder="Enter destination address"
              value={formData.dropoff}
              onChange={(e) => setFormData({ ...formData, dropoff: e.target.value })}
              className="bg-input border-border focus:ring-ring"
              required
            />
          </div>

          {/* Date and Time Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="flex items-center gap-2 text-sm font-medium">
                <Calendar className="h-4 w-4 text-primary" />
                Date
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="bg-input border-border focus:ring-ring"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time" className="flex items-center gap-2 text-sm font-medium">
                <Clock className="h-4 w-4 text-primary" />
                Time
              </Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="bg-input border-border focus:ring-ring"
              />
            </div>
          </div>

          {/* Passengers */}
          <div className="space-y-2">
            <Label htmlFor="passengers" className="flex items-center gap-2 text-sm font-medium">
              <Users className="h-4 w-4 text-primary" />
              Number of Passengers
            </Label>
            <Select
              value={formData.passengers}
              onValueChange={(value) => setFormData({ ...formData, passengers: value })}
            >
              <SelectTrigger className="bg-input border-border focus:ring-ring">
                <SelectValue placeholder="Select passengers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Passenger</SelectItem>
                <SelectItem value="2">2 Passengers</SelectItem>
                <SelectItem value="3">3 Passengers</SelectItem>
                <SelectItem value="4">4 Passengers</SelectItem>
                <SelectItem value="5">5+ Passengers</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 text-lg transition-colors"
            size="lg"
          >
            Find Available Rides
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
