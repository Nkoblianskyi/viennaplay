import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "../../components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ | ViennaPlay",
  description:
    "Häufig gestellte Fragen zu unseren Tischspielen mit Sportakzent wie Airhockey, Tischtennis und Tischfußball bei ViennaPlay in Wien.",
}

export default function FAQPage() {
  return (
    <>
      <section className="bg-secondary py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Häufig gestellte Fragen</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Tischspielen und Dienstleistungen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
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
            <AccordionItem value="item-5">
              <AccordionTrigger>Wie pflege ich mein Tischspiel richtig?</AccordionTrigger>
              <AccordionContent>
                Die richtige Pflege ist wichtig, um die Lebensdauer und die Spieleigenschaften Ihres Tischspiels zu
                erhalten. Wir bieten detaillierte Pflegeanleitungen für alle unsere Tischspiele an und führen auch die
                dafür notwendigen Pflegeprodukte. Zudem bieten wir einen professionellen Wartungsservice an. Weitere
                Informationen finden Sie in unserem Blog-Artikel &quot;Pflege- und Wartungstipps für Ihren
                Tischfußball-Tisch&quot;.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Gibt es eine Garantie auf die Tischspiele?</AccordionTrigger>
              <AccordionContent>
                Ja, alle unsere Tischspiele haben eine Garantie von mindestens 2 Jahren. Bei einigen Premiummodellen
                bieten wir sogar eine erweiterte Garantie von bis zu 5 Jahren an. Die genauen Garantiebedingungen sind
                je nach Hersteller und Modell unterschiedlich und werden Ihnen beim Kauf mitgeteilt.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>Können die Tischspiele individuell angepasst werden?</AccordionTrigger>
              <AccordionContent>
                Ja, wir bieten individuelle Anpassungen für viele unserer Tischspiele an. Dies kann von der
                Farbgestaltung über das Material bis hin zu speziellen Funktionen reichen. Besonders bei Firmenaufträgen
                ist eine Individualisierung mit Firmenlogo oder speziellem Design möglich. Sprechen Sie uns an, um die
                Möglichkeiten zu besprechen.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>Wie lange dauert die Lieferung nach der Bestellung?</AccordionTrigger>
              <AccordionContent>
                Die Lieferzeit hängt vom gewählten Tischspiel und der Verfügbarkeit ab. Standardmodelle sind in der
                Regel innerhalb von 1-2 Wochen lieferbar. Bei individuell angepassten Tischspielen oder Sondermodellen
                kann die Lieferzeit länger sein. Wir informieren Sie bei der Bestellung über die voraussichtliche
                Lieferzeit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>Bieten Sie auch Ersatzteile und Zubehör an?</AccordionTrigger>
              <AccordionContent>
                Ja, wir führen ein umfangreiches Sortiment an Ersatzteilen und Zubehör für alle unsere Tischspiele. Dies
                umfasst Bälle, Schläger, Pucks, Spielfiguren, Griffe und vieles mehr. Sollte ein spezielles Ersatzteil
                einmal nicht vorrätig sein, können wir es in der Regel schnell beschaffen.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-10">
              <AccordionTrigger>Kann ich bei Ihnen auch Tischspiele für den Außenbereich erwerben?</AccordionTrigger>
              <AccordionContent>
                Ja, wir bieten spezielle Tischspiele für den Außenbereich an, die witterungsbeständig und robust sind.
                Dazu gehören Tischtennisplatten, Tischfußball-Tische und bestimmte Billard-Modelle. Diese Tischspiele
                sind aus speziellen Materialien gefertigt, die UV-beständig und wasserfest sind, um den Anforderungen im
                Freien standzuhalten.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600">Haben Sie weitere Fragen? Zögern Sie nicht, uns zu kontaktieren.</p>
            <div className="mt-6">
              <Button asChild size="lg">
                <Link href="/kontakt">Kontakt aufnehmen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
