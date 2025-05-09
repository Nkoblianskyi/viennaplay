import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { TableIcon as TableTennis, Target, Trophy, Users } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center animate-fadeIn">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Warum ViennaPlay?</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Wir bieten Ihnen erstklassige Tischspiele mit Sportakzent für jedes Alter und jeden Anlass.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-4">
          <Card className="animate-slideInLeft delay-100">
            <CardHeader className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-primary/20 p-3">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-center">Höchste Qualität</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-500">
                Unsere Tischspiele werden aus hochwertigen Materialien gefertigt und bieten langanhaltenden Spielspaß.
              </p>
            </CardContent>
          </Card>
          <Card className="animate-slideInLeft delay-200">
            <CardHeader className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-primary/20 p-3">
                <TableTennis className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-center">Vielfältige Auswahl</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-500">
                Von Airhockey über Tischtennis bis hin zu Tischfußball - wir haben für jeden Geschmack das passende
                Spiel.
              </p>
            </CardContent>
          </Card>
          <Card className="animate-slideInRight delay-200">
            <CardHeader className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-primary/20 p-3">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-center">Professionelle Beratung</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-500">
                Unser Team berät Sie gerne bei der Auswahl des perfekten Tischspiels für Ihre Bedürfnisse.
              </p>
            </CardContent>
          </Card>
          <Card className="animate-slideInRight delay-100">
            <CardHeader className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-primary/20 p-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-center">Für jeden Anlass</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-500">
                Ob für Zuhause, Büro oder Veranstaltungen - unsere Tischspiele sorgen überall für Unterhaltung und Spaß.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
