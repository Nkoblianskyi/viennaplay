import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

export function FAQSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Häufig gestellte Fragen</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Antworten auf die häufigsten Fragen zu unseren Tischspielen
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Welche Arten von Tischspielen bieten Sie an?</AccordionTrigger>
              <AccordionContent>
                Wir bieten verschiedene hochwertige Tischspiele mit Sportakzent an, darunter Airhockey, Tischtennis,
                Tischfußball, Billard, Shuffleboard und Darts. Jedes Spiel ist in verschiedenen Ausführungen und
                Preisklassen erhältlich, um den unterschiedlichen Bedürfnissen und Budgets unserer Kunden gerecht zu
                werden.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Kann ich die Tischspiele vor dem Kauf testen?</AccordionTrigger>
              <AccordionContent>
                Ja, in unserem Showroom in Wien können Sie alle Tischspiele testen und ausprobieren, bevor Sie eine
                Kaufentscheidung treffen. Wir empfehlen, vorab einen Termin zu vereinbaren, damit wir uns ausreichend
                Zeit für Sie nehmen können.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Wie funktioniert der Lieferservice?</AccordionTrigger>
              <AccordionContent>
                Wir bieten einen professionellen Lieferservice für alle unsere Tischspiele an. Die Lieferung erfolgt
                durch unser geschultes Personal, das die Tischspiele auch fachgerecht aufbaut und einrichtet. Die
                Lieferkosten hängen von der Entfernung und der Größe des Tischspiels ab. Für detaillierte Informationen
                kontaktieren Sie uns bitte.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Bieten Sie auch Tischspiele zur Miete an?</AccordionTrigger>
              <AccordionContent>
                Ja, wir bieten Tischspiele zur Miete für Veranstaltungen, Firmenevents oder private Feiern an. Die
                Mietdauer und die Kosten hängen vom gewählten Tischspiel und der Mietdauer ab. Wir kümmern uns um
                Lieferung, Aufbau, Abbau und Abholung. Kontaktieren Sie uns für ein individuelles Angebot.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="mt-10 text-center">
            <Link href="/artikel" className="btn rounded-md px-8 py-3 text-base font-semibold">
              Alle FAQs anzeigen
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
