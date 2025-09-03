import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Star, Calendar } from "lucide-react"

interface RideSummaryProps {
  pickup: string
  dropoff: string
  date: string
  time: string
  passengers: number
  vehicleType: string
  vehicleImage: string
  estimatedDuration: string
  distance: string
  driverName: string
  driverRating: number
  price: number
}

export function RideSummary({
  pickup,
  dropoff,
  date,
  time,
  passengers,
  vehicleType,
  vehicleImage,
  estimatedDuration,
  distance,
  driverName,
  driverRating,
  price,
}: RideSummaryProps) {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-card-foreground">Ride Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Trip Route */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="bg-primary/10 rounded-full p-2 mt-1">
              <MapPin className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-muted-foreground">Pickup Location</div>
              <div className="font-medium text-card-foreground">{pickup}</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-accent/10 rounded-full p-2 mt-1">
              <MapPin className="h-4 w-4 text-accent" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-muted-foreground">Drop-off Location</div>
              <div className="font-medium text-card-foreground">{dropoff}</div>
            </div>
          </div>
        </div>

        {/* Trip Details */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <div>
              <div className="text-muted-foreground">Date & Time</div>
              <div className="font-medium text-card-foreground">
                {date} at {time}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            <div>
              <div className="text-muted-foreground">Passengers</div>
              <div className="font-medium text-card-foreground">
                {passengers} passenger{passengers > 1 ? "s" : ""}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <div>
              <div className="text-muted-foreground">Duration</div>
              <div className="font-medium text-card-foreground">{estimatedDuration}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <div>
              <div className="text-muted-foreground">Distance</div>
              <div className="font-medium text-card-foreground">{distance}</div>
            </div>
          </div>
        </div>

        {/* Vehicle Info */}
        <div className="space-y-3">
          <h4 className="font-medium text-card-foreground">Selected Vehicle</h4>
          <div className="flex items-center gap-4 p-3 bg-secondary/20 rounded-lg">
            <img
              src={vehicleImage || "/placeholder.svg"}
              alt={vehicleType}
              className="w-16 h-12 object-cover rounded"
            />
            <div className="flex-1">
              <div className="font-medium text-card-foreground">{vehicleType}</div>
              <div className="text-sm text-muted-foreground">License: ABC-1234</div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-primary">₹{price}</div>
            </div>
          </div>
        </div>

        {/* Driver Info */}
        <div className="space-y-3">
          <h4 className="font-medium text-card-foreground">Your Driver</h4>
          <div className="flex items-center gap-4 p-3 bg-secondary/20 rounded-lg">
            <img src="/professional-driver-avatar.jpg" alt={driverName} className="w-12 h-12 rounded-full object-cover" />
            <div className="flex-1">
              <div className="font-medium text-card-foreground">{driverName}</div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-accent fill-current" />
                <span className="text-sm text-muted-foreground">{driverRating} rating</span>
              </div>
            </div>
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              Verified
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
