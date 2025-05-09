import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "../../components/ui/button"

export const metadata: Metadata = {
  title: "Impressum | ViennaPlay",
  description: "Impressum von ViennaPlay - Rechtliche Informationen über unser Unternehmen.",
}

export default function ImpressumPage() {
  return (
    <>
      <section className="bg-secondary py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Impressum</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">Rechtliche Informationen über unser Unternehmen</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>Angaben gemäß § 5 E-Commerce-Gesetz</h2>
            <p>
              <strong>Firmenwortlaut:</strong> ViennaPlay GmbH
              <br />
              <strong>Unternehmensgegenstand:</strong> Handel mit Tischspielen und Zubehör
              <br />
              <strong>UID-Nummer:</strong> ATU12345678
              <br />
              <strong>Firmenbuchnummer:</strong> FN 123456a
              <br />
              <strong>Firmenbuchgericht:</strong> Handelsgericht Wien
              <br />
              <strong>Firmensitz:</strong> 1060 Wien
            </p>

            <h2>Kontaktdaten</h2>
            <p>
              <strong>Adresse:</strong> Mariahilfer Straße 45, 1060 Wien, Österreich
              <br />
              <strong>Telefon:</strong> +43 5 224 46 18
              <br />
              <strong>E-Mail:</strong> info@viennaplay.com
              <br />
              <strong>Geschäftsführer:</strong> Max Mustermann
            </p>

            <h2>Mitgliedschaften bei der Wirtschaftskammer</h2>
            <p>
              Mitglied der Wirtschaftskammer Wien
              <br />
              Fachgruppe Handel mit Waren
            </p>

            <h2>Anwendbare Rechtsvorschriften</h2>
            <p>
              Gewerbeordnung: www.ris.bka.gv.at
              <br />
              E-Commerce-Gesetz: www.ris.bka.gv.at
              <br />
              Mediengesetz: www.ris.bka.gv.at
            </p>

            <h2>Verbraucherstreitbeilegung</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2>Haftungsausschluss</h2>
            <h3>Haftung für Inhalte</h3>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
              Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7
              Abs.1 E-Commerce-Gesetz für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              Nach §§ 8 bis 10 E-Commerce-Gesetz sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte
              oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
              jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
              entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <h3>Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
              Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
              jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>

            <h3>Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
              österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
              außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
              Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
              gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
              trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
              Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
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
