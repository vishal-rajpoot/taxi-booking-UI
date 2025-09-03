import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HelpCircle, Search, Phone, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

const faqData = [
  {
    category: "Booking & Rides",
    questions: [
      {
        q: "How do I book a ride?",
        a: "Simply enter your pickup and drop-off locations on our homepage, select your preferred vehicle type, and confirm your booking.",
      },
      {
        q: "Can I cancel my ride?",
        a: "Yes, you can cancel your ride up to 5 minutes before the driver arrives without any cancellation fee.",
      },
      {
        q: "How do I track my driver?",
        a: "Once your ride is confirmed, you'll receive real-time tracking information and your driver's contact details.",
      },
    ],
  },
  {
    category: "Payment & Pricing",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards, digital wallets (Apple Pay, Google Pay, PayPal), and cash payments.",
      },
      {
        q: "Are there any hidden fees?",
        a: "No, we believe in transparent pricing. The price you see when booking is exactly what you'll pay.",
      },
      {
        q: "How is the fare calculated?",
        a: "Fares are calculated based on distance, time, and vehicle type. There's no surge pricing during peak hours.",
      },
    ],
  },
  {
    category: "Safety & Security",
    questions: [
      {
        q: "How do you ensure driver safety?",
        a: "All our drivers undergo thorough background checks, vehicle inspections, and safety training before joining our platform.",
      },
      {
        q: "What should I do if I feel unsafe?",
        a: "Contact our 24/7 support immediately at +1 (555) 123-4567. We take all safety concerns seriously.",
      },
      {
        q: "Can I share my ride details with someone?",
        a: "Yes, you can share your ride details and real-time location with trusted contacts through our app.",
      },
    ],
  },
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Help Center</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Find answers to common questions or get in touch with our support team.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Search for help articles..." className="pl-12 h-12 text-lg bg-input border-border" />
            </div>
          </div>

          {/* Quick Contact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-card border-border text-center hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Call Us</h3>
                <p className="text-muted-foreground text-sm mb-4">24/7 phone support for urgent matters</p>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">+1 (555) 123-4567</Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Email Us</h3>
                <p className="text-muted-foreground text-sm mb-4">We respond within 2 hours</p>
                <Button variant="outline" className="bg-transparent" asChild>
                  <Link href="/contact">Send Email</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">Live Chat</h3>
                <p className="text-muted-foreground text-sm mb-4">Chat with our support team</p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Start Chat</Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-foreground text-center">Frequently Asked Questions</h2>

            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-semibold text-foreground mb-6">{category.category}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.questions.map((faq, faqIndex) => (
                    <Card key={faqIndex} className="bg-card border-border">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-start gap-3">
                          <HelpCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          {faq.q}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{faq.a}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Still Need Help */}
          <div className="mt-16 text-center bg-secondary/20 rounded-lg p-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Still Need Help?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Call +1 (555) 123-4567
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
