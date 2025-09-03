"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Car } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Car className="h-8 w-8" />
            <span className="text-xl font-bold">RideEasy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/rides" className="hover:text-accent transition-colors">
              Rides
            </Link>
            <Link href="/about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
            <Button variant="secondary" size="sm" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-accent text-accent-foreground border-accent hover:bg-accent/90"
              asChild
            >
              <Link href="/book">Book a Ride</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-foreground hover:text-accent"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-primary/95 backdrop-blur-sm">
              <Link
                href="/"
                className="block px-3 py-2 text-primary-foreground hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/rides"
                className="block px-3 py-2 text-primary-foreground hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Rides
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-primary-foreground hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-primary-foreground hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 px-3 py-2">
                <Button variant="secondary" size="sm" asChild>
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-accent text-accent-foreground border-accent hover:bg-accent/90"
                  asChild
                >
                  <Link href="/book">Book a Ride</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
