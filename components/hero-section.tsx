import { Button } from "@/components/ui/button"
import { Car, Shield, Clock, Star } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background via-secondary/30 to-background py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Your Reliable Ride,
            <span className="text-primary"> Anytime</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Experience safe, comfortable, and affordable transportation with RideEasy. Book your ride in seconds and get
            where you need to go.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
              asChild
            >
              <Link href="#booking">Book Now</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              asChild
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="bg-card rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Car className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Modern Fleet</h3>
            <p className="text-muted-foreground text-sm">
              Clean, comfortable vehicles maintained to the highest standards
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Safe & Secure</h3>
            <p className="text-muted-foreground text-sm">
              Licensed drivers with background checks and real-time tracking
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">24/7 Available</h3>
            <p className="text-muted-foreground text-sm">Round-the-clock service whenever you need a ride</p>
          </div>

          <div className="bg-card rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">Top Rated</h3>
            <p className="text-muted-foreground text-sm">
              Consistently rated 5 stars by thousands of satisfied customers
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
