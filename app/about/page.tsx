import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Users, Clock, Star, Award, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About RideEasy</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We're revolutionizing urban transportation by connecting riders with reliable, safe, and affordable rides.
              Our mission is to make every journey comfortable and stress-free.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500K+</div>
              <div className="text-muted-foreground">Happy Riders</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">1000+</div>
              <div className="text-muted-foreground">Professional Drivers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Cities Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">4.9</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-card border-border text-center">
                <CardContent className="p-8">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">Safety First</h3>
                  <p className="text-muted-foreground">
                    Every driver is thoroughly vetted with background checks and vehicle inspections to ensure your
                    safety.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border text-center">
                <CardContent className="p-8">
                  <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">Community</h3>
                  <p className="text-muted-foreground">
                    We're building a community of riders and drivers who care about making transportation better for
                    everyone.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border text-center">
                <CardContent className="p-8">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">Reliability</h3>
                  <p className="text-muted-foreground">
                    Count on us for punctual, dependable service whenever you need to get somewhere important.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border text-center">
                <CardContent className="p-8">
                  <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">Excellence</h3>
                  <p className="text-muted-foreground">
                    We strive for excellence in every ride, from clean vehicles to professional service.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border text-center">
                <CardContent className="p-8">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    We continuously innovate to make booking, tracking, and paying for rides as seamless as possible.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border text-center">
                <CardContent className="p-8">
                  <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">Care</h3>
                  <p className="text-muted-foreground">
                    We genuinely care about our riders' experience and work hard to exceed expectations every day.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-secondary/20 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Experience RideEasy?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust RideEasy for their daily transportation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/">Book Your First Ride</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
