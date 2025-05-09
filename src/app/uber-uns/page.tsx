import Image from "next/image"
import type { Metadata } from "next"
import { PopularGamesSection } from "@/components/home/popular-games-section"

export const metadata: Metadata = {
  title: "Über uns | ViennaPlay",
  description:
    "Erfahren Sie mehr über ViennaPlay, Ihren Spezialisten für hochwertige Tischspiele mit Sportakzent in Wien.",
}

export default function AboutUsPage() {
  return (
    <>
      <section className="bg-secondary py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Über ViennaPlay</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Ihr Spezialist für hochwertige Tischspiele mit Sportakzent in Wien
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Unsere Geschichte</h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-gray-600">
                <p>
                  ViennaPlay wurde 2015 in Wien gegründet, mit dem Ziel, hochwertige Tischspiele mit Sportakzent für
                  Privatkunden und Unternehmen anzubieten. Was als kleine Leidenschaft begann, hat sich zu einem
                  führenden Anbieter in Österreich entwickelt.
                </p>
                <p>
                  Unser Gründer, Max Mustermann, war schon immer begeistert von Tischspielen und deren Fähigkeit,
                  Menschen zusammenzubringen. Nach jahrelanger Erfahrung in der Branche beschloss er, sein eigenes
                  Unternehmen zu gründen, das sich auf qualitativ hochwertige Tischspiele spezialisiert.
                </p>
                <p>
                  Heute sind wir stolz darauf, eine breite Palette an Tischspielen anzubieten, die Spaß,
                  Geschicklichkeit und soziale Interaktion fördern. Unser Engagement für Qualität und
                  Kundenzufriedenheit hat uns zu einem vertrauenswürdigen Namen in der Branche gemacht.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/modern-game-store.png"
                alt="ViennaPlay Showroom"
                width={800}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Unsere Mission</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Unsere Mission ist es, hochwertige Tischspiele anzubieten, die Freude, Geschicklichkeit und soziale
              Interaktion fördern. Wir glauben an die Kraft des Spiels, Menschen zusammenzubringen und unvergessliche
              Momente zu schaffen.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Besuchen Sie unseren Showroom</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              In unserem Showroom in Wien können Sie alle unsere Tischspiele testen und ausprobieren. Unser freundliches
              Team berät Sie gerne und hilft Ihnen, das perfekte Tischspiel für Ihre Bedürfnisse zu finden.
            </p>
            <div className="mt-10">
              <p className="text-xl font-semibold text-gray-900">Öffnungszeiten:</p>
              <p className="mt-2 text-gray-600">Montag - Freitag: 10:00 - 18:00 Uhr</p>
              <p className="text-gray-600">Samstag: 10:00 - 14:00 Uhr</p>
              <p className="text-gray-600">Sonntag: Geschlossen</p>
            </div>
          </div>
        </div>
        <PopularGamesSection />
      </section>
    </>
  )
}
