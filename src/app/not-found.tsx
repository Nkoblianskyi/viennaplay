import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function NotFound() {
  return (
    <section className="py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto grid max-w-lg gap-6 text-center">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">404 - Seite nicht gefunden</h1>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Die gesuchte Seite konnte nicht gefunden werden. Vielleicht wurde sie verschoben, gelöscht oder der URL
              wurde falsch eingegeben.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-4">
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link href="/">Zurück zur Startseite</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/dienstleistungen">Unsere Tischspiele</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
