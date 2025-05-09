import type React from "react"
import type { Metadata } from "next"
import { Fahkwang  } from "next/font/google"
import "./globals.css"
import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { CookieConsent } from "../components/cookie-consent"
import { ThemeProvider } from "../components/theme-provider"

const inter = Fahkwang ({ weight: "400" , subsets: ["latin"] })
export const metadata: Metadata = {
  title: {
    default: "ViennaPlay | Tischspiele mit Sportakzent",
    template: "%s | ViennaPlay",
  },
  description:
    "Entdecken Sie hochwertige Tischspiele mit Sportakzent wie Airhockey, Tischtennis und Tischfußball bei ViennaPlay in Wien, Österreich.",
  keywords: ["Tischspiele", "Airhockey", "Tischtennis", "Tischfußball", "Wien", "Österreich", "ViennaPlay"],
  authors: [{ name: "ViennaPlay" }],
  creator: "ViennaPlay",
  publisher: "ViennaPlay",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://viennaplay.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ViennaPlay | Tischspiele mit Sportakzent",
    description:
      "Entdecken Sie hochwertige Tischspiele mit Sportakzent wie Airhockey, Tischtennis und Tischfußball bei ViennaPlay in Wien, Österreich.",
    url: "https://viennaplay.com",
    siteName: "ViennaPlay",
    locale: "de_AT",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="light" style={{ colorScheme: "light" }}>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
