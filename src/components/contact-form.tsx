"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Checkbox } from "./ui/checkbox"
import { Label } from "./ui/label"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog"
import Link from "next/link"

export function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!name.trim()) {
      newErrors.name = "Name ist erforderlich"
    }

    if (!email.trim()) {
      newErrors.email = "E-Mail ist erforderlich"
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Ungültige E-Mail-Adresse"
    }

    if (!message.trim()) {
      newErrors.message = "Nachricht ist erforderlich"
    }

    if (!acceptTerms) {
      newErrors.acceptTerms = "Sie müssen den Datenschutzbestimmungen zustimmen"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Reset form and show confirmation
    setName("")
    setEmail("")
    setPhone("")
    setMessage("")
    setAcceptTerms(false)
    setIsSubmitting(false)
    setShowConfirmation(true)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">
            Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            E-Mail <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Telefon</Label>
          <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">
            Nachricht <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={errors.message ? "border-red-500" : ""}
          />
          {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox
            id="terms"
            checked={acceptTerms}
            onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
          />
          <div className="grid gap-1.5 leading-none">
            <Label htmlFor="terms" className={`text-sm font-normal ${errors.acceptTerms ? "text-red-500" : ""}`}>
              Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
              <Link href="/datenschutz" className="text-primary hover:underline">
                Datenschutzerklärung
              </Link>{" "}
              zu. <span className="text-red-500">*</span>
            </Label>
            {errors.acceptTerms && <p className="text-sm text-red-500">{errors.acceptTerms}</p>}
          </div>
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
        </Button>
      </form>

      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nachricht gesendet</DialogTitle>
            <DialogDescription>
              Vielen Dank für Ihre Nachricht. Wir werden uns so schnell wie möglich bei Ihnen melden.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setShowConfirmation(false)}>Schließen</Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
