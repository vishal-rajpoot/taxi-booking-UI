import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Calendar, Star, Phone, MessageCircle } from "lucide-react"

interface BookingCardProps {
  id: string
  pickup: string
  dropoff: string
  date: string
  time: string
  vehicleType: string
  driverName: string
  driverRating: number
  price: number
  status: "upcoming" | "in-progress" | "completed" | "cancelled"
  estimatedArrival?: string
}

export function BookingCard({
  id,
  pickup,
  dropoff,
  date,
  time,
  vehicleType,
  driverName,
  driverRating,
  price,
  status,
  estimatedArrival,
}: BookingCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-accent/10 text-accent"
      case "in-progress":
        return "bg-primary/10 text-primary"
      case "completed":
        return "bg-green-100 text-green-700"
      case "cancelled":
        return "bg-destructive/10 text-destructive"
      default:
        return "bg-secondary text-secondary-foreground"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "upcoming":
        return "Upcoming"
      case "in-progress":
        return "In Progress"
      case "completed":
        return "Completed"
      case "cancelled":
        return "Cancelled"
      default:
        return status
    }
  }

  return (
    <Card className="bg-card border-border hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="text-sm text-muted-foreground">Booking #{id}</div>
            <Badge className={getStatusColor(status)}>{getStatusText(status)}</Badge>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-primary">₹{price}</div>
            <div className="text-xs text-muted-foreground">{vehicleType}</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Route */}
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="bg-primary/10 rounded-full p-1.5 mt-0.5">
              <MapPin className="h-3 w-3 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-muted-foreground">From</div>
              <div className="text-sm font-medium text-card-foreground truncate">{pickup}</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-accent/10 rounded-full p-1.5 mt-0.5">
              <MapPin className="h-3 w-3 text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-muted-foreground">To</div>
              <div className="text-sm font-medium text-card-foreground truncate">{dropoff}</div>
            </div>
          </div>
        </div>

        {/* Date & Time */}
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">{time}</span>
          </div>
        </div>

        {/* Driver Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/professional-driver-avatar.jpg" alt={driverName} className="w-8 h-8 rounded-full object-cover" />
            <div>
              <div className="text-sm font-medium text-card-foreground">{driverName}</div>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 text-accent fill-current" />
                <span className="text-xs text-muted-foreground">{driverRating}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          {status === "upcoming" && (
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="h-8 w-8 p-0 bg-transparent">
                <Phone className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="h-8 w-8 p-0 bg-transparent">
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          )}

          {status === "in-progress" && estimatedArrival && (
            <div className="text-right">
              <div className="text-xs text-muted-foreground">Arrives in</div>
              <div className="text-sm font-medium text-accent">{estimatedArrival}</div>
            </div>
          )}
        </div>

        {/* Cancel Button for Upcoming Rides */}
        {status === "upcoming" && (
          <Button
            variant="outline"
            size="sm"
            className="w-full text-destructive border-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
          >
            Cancel Ride
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
