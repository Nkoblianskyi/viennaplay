import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import gamesData from "../../data/games.json"

export function PopularGamesSection() {
  // Получаем только 3 популярные игры для отображения
  const popularGames = gamesData.slice(0, 3)

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center animate-fadeIn">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Unsere beliebtesten Tischspiele
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Entdecken Sie unsere meistverkauften Tischspiele mit Sportakzent
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {popularGames.map((game, index) => (
            <Card key={game.id} className={`overflow-hidden animate-fadeIn delay-${(index + 1) * 100}`}>
              <div className="aspect-h-2 aspect-w-3 relative h-48 w-full">
                <Image src={game.image || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{game.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-500">{game.shortDescription}</p>
                <Link
                  href={`/spiele/${game.id}`}
                  className="btn inline-block rounded-md px-4 py-2 text-sm font-semibold"
                >
                  Mehr erfahren
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center animate-fadeIn delay-500">
          <Link href="/spiele" className="btn rounded-md px-8 py-3 text-base font-semibold">
            Alle Tischspiele ansehen
          </Link>
        </div>
      </div>
    </section>
  )
}
