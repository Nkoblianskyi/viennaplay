import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "../../components/ui/button"

export const metadata: Metadata = {
  title: "Cookie-Richtlinie | ViennaPlay",
  description: "Cookie-Richtlinie von ViennaPlay - Informationen zur Verwendung von Cookies auf unserer Website.",
}

export default function CookiesPage() {
  return (
    <>
      <section className="bg-secondary py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Cookie-Richtlinie</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Informationen zur Verwendung von Cookies auf unserer Website
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>Was sind Cookies?</h2>
            <p>
              Cookies sind kleine Textdateien, die auf Ihrem Computer oder mobilen Gerät gespeichert werden, wenn Sie
              unsere Website besuchen. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen und
              bieten Ihnen ein besseres Nutzungserlebnis.
            </p>

            <h2>Wie verwenden wir Cookies?</h2>
            <p>Wir verwenden Cookies für verschiedene Zwecke, darunter:</p>
            <ul>
              <li>
                <strong>Notwendige Cookies:</strong> Diese Cookies sind für den Betrieb unserer Website unerlässlich.
                Sie ermöglichen grundlegende Funktionen wie die Seitennavigation und den Zugriff auf sichere Bereiche
                der Website. Die Website kann ohne diese Cookies nicht richtig funktionieren.
              </li>
              <li>
                <strong>Präferenz-Cookies:</strong> Diese Cookies ermöglichen es unserer Website, sich an Informationen
                zu erinnern, die das Verhalten oder das Aussehen der Website ändern, wie Ihre bevorzugte Sprache oder
                die Region, in der Sie sich befinden.
              </li>
              <li>
                <strong>Statistik-Cookies:</strong> Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer
                Website interagieren, indem sie Informationen anonym sammeln und melden. Sie helfen uns, unsere Website
                zu verbessern.
              </li>
              <li>
                <strong>Marketing-Cookies:</strong> Diese Cookies werden verwendet, um Besucher auf Websites zu
                verfolgen. Die Absicht ist, Anzeigen zu schalten, die relevant und ansprechend für den einzelnen
                Benutzer sind und daher wertvoller für Publisher und werbetreibende Drittparteien sind.
              </li>
            </ul>

            <h2>Welche Cookies verwenden wir?</h2>
            <h3>Notwendige Cookies</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Anbieter</th>
                  <th>Zweck</th>
                  <th>Ablauf</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>cookie-consent</td>
                  <td>ViennaPlay</td>
                  <td>Speichert Ihre Cookie-Präferenzen</td>
                  <td>1 Jahr</td>
                </tr>
                <tr>
                  <td>session</td>
                  <td>ViennaPlay</td>
                  <td>Hält Ihre Sitzung aufrecht</td>
                  <td>Sitzung</td>
                </tr>
              </tbody>
            </table>

            <h3>Statistik-Cookies</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Anbieter</th>
                  <th>Zweck</th>
                  <th>Ablauf</th>
                </tr>
              </thead>
            </table>

            <h2>Wie können Sie Cookies kontrollieren?</h2>
            <p>
              Sie können Ihre Cookie-Einstellungen jederzeit ändern, indem Sie auf die Schaltfläche
              "Cookie-Einstellungen" am unteren Rand unserer Website klicken. Sie können auch Cookies über die
              Einstellungen Ihres Browsers kontrollieren. Bitte beachten Sie, dass das Deaktivieren von Cookies die
              Funktionalität unserer Website beeinträchtigen kann.
            </p>


            <h2>Änderungen an unserer Cookie-Richtlinie</h2>
            <p>
              Wir behalten uns das Recht vor, diese Cookie-Richtlinie jederzeit zu ändern. Alle Änderungen werden auf
              dieser Seite veröffentlicht. Diese Cookie-Richtlinie wurde zuletzt am 1. Mai 2025 aktualisiert.
            </p>

            <h2>Kontakt</h2>
            <p>Wenn Sie Fragen zu unserer Cookie-Richtlinie haben, kontaktieren Sie uns bitte unter:</p>
            <p>
              ViennaPlay GmbH
              <br />
              Mariahilfer Straße 45
              <br />
              1060 Wien, Österreich
              <br />
              Tel: +43 5 224 46 18
              <br />
              E-Mail: info@viennaplay.com
            </p>
          </div>

          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/">Zurück zur Startseite</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
