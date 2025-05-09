import { PopularGamesSection } from "@/components/home/popular-games-section"
import { ContactForm } from "../../components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kontakt | ViennaPlay",
  description:
    "Kontaktieren Sie ViennaPlay für Fragen zu unseren Tischspielen oder vereinbaren Sie einen Termin in unserem Showroom.",
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-secondary py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Kontakt</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Wir freuen uns, von Ihnen zu hören. Kontaktieren Sie uns für Fragen, Beratung oder um einen Termin zu
              vereinbaren.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Schreiben Sie uns</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Füllen Sie das Formular aus und wir werden uns so schnell wie möglich bei Ihnen melden.
              </p>
              <ContactForm />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Kontaktinformationen</h2>
              <div className="mt-6 space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Adresse</h3>
                  <p className="mt-2 text-lg text-gray-600">
                    ViennaPlay GmbH
                    <br />
                    Mariahilfer Straße 45
                    <br />
                    1060 Wien, Österreich
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Telefon</h3>
                  <p className="mt-2 text-lg text-gray-600">+43 5 224 46 18</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">E-Mail</h3>
                  <p className="mt-2 text-lg text-gray-600">info@viennaplay.com</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Öffnungszeiten</h3>
                  <p className="mt-2 text-lg text-gray-600">
                    Montag - Freitag: 10:00 - 18:00 Uhr
                    <br />
                    Samstag: 10:00 - 14:00 Uhr
                    <br />
                    Sonntag: Geschlossen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <PopularGamesSection />
    </>
  )
}
