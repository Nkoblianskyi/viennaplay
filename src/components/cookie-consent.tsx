"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "./ui/button"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white p-4 shadow-lg md:flex md:items-center md:justify-between">
      <div className="mb-4 max-w-3xl md:mb-0">
        <p className="text-sm text-gray-700">
          Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Durch die weitere
          Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu. Weitere Informationen finden Sie in unserer{" "}
          <Link href="/datenschutz" className="text-primary hover:underline">
            Datenschutzerklärung
          </Link>{" "}
          und{" "}
          <Link href="/cookies" className="text-primary hover:underline">
            Cookie-Richtlinie
          </Link>
          .
        </p>
      </div>
      <div className="flex space-x-4">
        <Button
          variant="outline"
          size="sm"
          onClick={declineCookies}
          className="border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          Ablehnen
        </Button>
        <Button size="sm" onClick={acceptCookies}>
          Akzeptieren
        </Button>
      </div>
    </div>
  )
}
