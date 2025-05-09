import Link from "next/link"
import Image from "next/image"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion"
import articlesData from "../../data/articles.json"
import type { Metadata } from "next"
import { PopularGamesSection } from "@/components/home/popular-games-section"

export const metadata: Metadata = {
  title: "Artikel & FAQ | ViennaPlay",
  description: "Informative Artikel und häufig gestellte Fragen zu Tischspielen mit Sportakzent bei ViennaPlay.",
}

export default function ArticlesAndFAQPage() {
  return (
    <>
      <section className="bg-secondary py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Artikel & FAQ</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Informative Artikel und Antworten auf häufig gestellte Fragen zu unseren Tischspielen
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Neueste Artikel</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {articlesData.map((article) => (
              <Card key={article.id} className="overflow-hidden">
                <div className="aspect-h-2 aspect-w-3 relative h-48 w-full">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary">{article.category}</span>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <CardTitle>{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href={`/artikel/${article.id}`}>Weiterlesen</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-10">
              Häufig gestellte Fragen
            </h2>
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
                  Lieferkosten hängen von der Entfernung und der Größe des Tischspiels ab. Für detaillierte
                  Informationen kontaktieren Sie uns bitte.
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
            </Accordion>
          </div>
        </div>
        <PopularGamesSection />
      </section>
    </>
  )
}
