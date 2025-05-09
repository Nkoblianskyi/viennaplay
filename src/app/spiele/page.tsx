import Link from "next/link"
import Image from "next/image"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import gamesData from "../../data/games.json"
import type { Metadata } from "next"
import { ArticlesSection } from "@/components/home/articles-section"

export const metadata: Metadata = {
  title: "Alle Tischspiele | ViennaPlay",
  description:
    "Entdecken Sie unser komplettes Angebot an hochwertigen Tischspielen mit Sportakzent wie Airhockey, Tischtennis, Tischfußball und mehr bei ViennaPlay in Wien.",
}

export default function GamesPage() {
  return (
    <>
      <section className="bg-secondary py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Unsere Tischspiele</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Entdecken Sie unser komplettes Angebot an hochwertigen Tischspielen mit Sportakzent für jeden Geschmack
              und jede Gelegenheit.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {gamesData.map((game) => (
              <Card key={game.id} className="overflow-hidden">
                <div className="aspect-h-2 aspect-w-3 relative h-48 w-full">
                  <Image src={game.image || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{game.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{game.shortDescription}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href={`/spiele/${game.id}`}>Mehr erfahren</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Maßgeschneiderte Lösungen</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Wir bieten individuelle Lösungen für Privatkunden, Unternehmen, Hotels, Schulen und Veranstaltungen.
              Kontaktieren Sie uns für eine persönliche Beratung.
            </p>
            <div className="mt-10">
              <Button asChild size="lg">
                <Link href="/kontakt">Jetzt anfragen</Link>
              </Button>
            </div>
          </div>
        </div>
        <ArticlesSection />
      </section>
    </>
  )
}
