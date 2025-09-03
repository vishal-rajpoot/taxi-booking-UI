"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, Wifi, Snowflake, Shield } from "lucide-react"
import React from "react"

interface RideOptionProps {
  id: string
  name: string
  description: string
  image: string
  price: number
  estimatedTime: string
  capacity: number
  rating: number
  features: string[]
  popular?: boolean
  onSelect: (id: string) => void
}

export function RideOptionCard({
  id,
  name,
  description,
  image,
  price,
  estimatedTime,
  capacity,
  rating,
  features,
  popular = false,
  onSelect,
}: RideOptionProps) {
  const getFeatureIcon = (feature: string) => {
    switch (feature.toLowerCase()) {
      case "wifi":
        return <Wifi className="h-4 w-4" />
      case "ac":
      case "air conditioning":
        return <Snowflake className="h-4 w-4" />
      case "safety":
        return <Shield className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <Card
      className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
        popular ? "ring-2 ring-accent border-accent" : "hover:border-primary/50"
      }`}
    >
      {popular && <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground z-10">Most Popular</Badge>}

      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl font-bold text-card-foreground">{name}</CardTitle>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">₹{price}</div>
            <div className="text-xs text-muted-foreground">per ride</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Vehicle Image */}
        <div className="relative h-32 bg-secondary/20 rounded-lg overflow-hidden">
          <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        </div>

        {/* Details */}
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">{estimatedTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">{capacity} seats</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-accent fill-current" />
            <span className="text-muted-foreground">{rating}</span>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-card-foreground">Features:</h4>
          <div className="flex flex-wrap gap-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-1 text-xs bg-secondary/50 px-2 py-1 rounded-full">
                {getFeatureIcon(feature)}
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Select Button */}
        <Button
          onClick={() => onSelect(id)}
          className={`w-full ${
            popular
              ? "bg-accent hover:bg-accent/90 text-accent-foreground"
              : "bg-primary hover:bg-primary/90 text-primary-foreground"
          }`}
        >
          Select This Ride
        </Button>
      </CardContent>
    </Card>
  )
}
