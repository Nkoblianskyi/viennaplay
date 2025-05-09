import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "../../../components/ui/button"
import { CheckCircle } from "lucide-react"
import gamesData from "../../../data/games.json"
import type { Metadata } from "next"

interface GamePageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const game = gamesData.find((game) => game.id === params.id)

  if (!game) {
    return {
      title: "Spiel nicht gefunden",
    }
  }

  return {
    title: `${game.title} | ViennaPlay`,
    description: game.shortDescription,
  }
}

export async function generateStaticParams() {
  return gamesData.map((game) => ({
    id: game.id,
  }))
}

export default function GamePage({ params }: GamePageProps) {
  const game = gamesData.find((game) => game.id === params.id)

  if (!game) {
    notFound()
  }

  return (
    <>
      <section className="bg-secondary py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{game.title}</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">{game.shortDescription}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Über {game.title}</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">{game.description}</p>
              <div className="mt-10">
                <h3 className="text-xl font-semibold text-gray-900">Eigenschaften & Vorteile</h3>
                <ul className="mt-6 space-y-4">
                  {game.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10">
                <Button asChild size="lg">
                  <Link href="/kontakt">Jetzt anfragen</Link>
                </Button>
              </div>
            </div>
            <div className="space-y-8">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={game.image || "/placeholder.svg"}
                  alt={game.title}
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {game.gallery.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${game.title} Bild ${index + 1}`}
                      width={600}
                      height={400}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Interesse an {game.title}?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Kontaktieren Sie uns für eine persönliche Beratung und ein individuelles Angebot.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/kontakt">Kontakt aufnehmen</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/spiele">Alle Tischspiele</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
