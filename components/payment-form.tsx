"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Wallet, Smartphone, Shield } from "lucide-react"

interface PaymentFormProps {
  totalAmount: number
  onConfirm: () => void
}

export function PaymentForm({ totalAmount, onConfirm }: PaymentFormProps) {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [cardData, setCardData] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onConfirm()
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-card-foreground">
          <CreditCard className="h-5 w-5 text-primary" />
          Payment Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Payment Method Selection */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-card-foreground">Payment Method</Label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <button
              type="button"
              onClick={() => setPaymentMethod("card")}
              className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                paymentMethod === "card"
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <CreditCard className="h-5 w-5" />
              <span className="text-sm font-medium">Credit Card</span>
            </button>
            <button
              type="button"
              onClick={() => setPaymentMethod("wallet")}
              className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                paymentMethod === "wallet"
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <Wallet className="h-5 w-5" />
              <span className="text-sm font-medium">Digital Wallet</span>
            </button>
            <button
              type="button"
              onClick={() => setPaymentMethod("cash")}
              className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                paymentMethod === "cash"
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border hover:border-primary/50"
              }`}
            >
              <Smartphone className="h-5 w-5" />
              <span className="text-sm font-medium">Pay in Cash</span>
            </button>
          </div>
        </div>

        {/* Card Details Form */}
        {paymentMethod === "card" && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cardName" className="text-sm font-medium">
                Cardholder Name
              </Label>
              <Input
                id="cardName"
                placeholder="John Doe"
                value={cardData.name}
                onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                className="bg-input border-border focus:ring-ring"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cardNumber" className="text-sm font-medium">
                Card Number
              </Label>
              <Input
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={cardData.number}
                onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
                className="bg-input border-border focus:ring-ring"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry" className="text-sm font-medium">
                  Expiry Date
                </Label>
                <Input
                  id="expiry"
                  placeholder="MM/YY"
                  value={cardData.expiry}
                  onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                  className="bg-input border-border focus:ring-ring"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv" className="text-sm font-medium">
                  CVV
                </Label>
                <Input
                  id="cvv"
                  placeholder="123"
                  value={cardData.cvv}
                  onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                  className="bg-input border-border focus:ring-ring"
                />
              </div>
            </div>
          </form>
        )}

        {/* Digital Wallet Options */}
        {paymentMethod === "wallet" && (
          <div className="space-y-3">
            <div className="grid grid-cols-1 gap-3">
              <Button variant="outline" className="justify-start h-12 bg-transparent">
                <img src="/apple-pay-logo.png" alt="Apple Pay" className="h-6 w-6 mr-3" />
                Apple Pay
              </Button>
              <Button variant="outline" className="justify-start h-12 bg-transparent">
                <img src="/google-pay-logo.jpg" alt="Google Pay" className="h-6 w-6 mr-3" />
                Google Pay
              </Button>
              <Button variant="outline" className="justify-start h-12 bg-transparent">
                <img src="/paypal-logo.png" alt="PayPal" className="h-6 w-6 mr-3" />
                PayPal
              </Button>
            </div>
          </div>
        )}

        {/* Cash Payment Info */}
        {paymentMethod === "cash" && (
          <div className="bg-secondary/20 p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <Smartphone className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-medium text-card-foreground mb-1">Pay with Cash</h4>
                <p className="text-sm text-muted-foreground">
                  You can pay your driver directly with cash when you reach your destination. Please have the exact
                  amount ready.
                </p>
              </div>
            </div>
          </div>
        )}

        <Separator />

        {/* Price Breakdown */}
        <div className="space-y-3">
          <h4 className="font-medium text-card-foreground">Price Breakdown</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Base fare</span>
              <span className="text-card-foreground">₹{(totalAmount * 0.8).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Service fee</span>
              <span className="text-card-foreground">₹{(totalAmount * 0.15).toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tax</span>
              <span className="text-card-foreground">₹{(totalAmount * 0.05).toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-semibold text-base">
              <span className="text-card-foreground">Total</span>
              <span className="text-primary">₹{totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground bg-secondary/20 p-3 rounded-lg">
          <Shield className="h-4 w-4 text-primary" />
          <span>Your payment information is encrypted and secure</span>
        </div>

        {/* Confirm Button */}
        <Button
          onClick={onConfirm}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 text-lg"
          size="lg"
        >
          Confirm Booking - ₹{totalAmount.toFixed(2)}
        </Button>
      </CardContent>
    </Card>
  )
}
