import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { BookingForm } from "@/components/booking-form"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <HeroSection />

        {/* Booking Section */}
        <section id="booking" className="py-16 px-4 bg-secondary/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Go?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below to find available rides and get an instant quote for your journey.
              </p>
            </div>
            <BookingForm />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">50K+</div>
                <div className="text-lg text-muted-foreground">Happy Customers</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-accent">24/7</div>
                <div className="text-lg text-muted-foreground">Service Available</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="text-lg text-muted-foreground">Professional Drivers</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
