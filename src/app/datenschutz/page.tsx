import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Datenschutzerklärung | ViennaPlay",
  description: "Datenschutzerklärung von ViennaPlay - Informationen zur Verarbeitung Ihrer personenbezogenen Daten.",
}

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-secondary py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Datenschutzerklärung</h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Informationen zur Verarbeitung Ihrer personenbezogenen Daten
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>1. Allgemeine Informationen</h2>
            <p>
              Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Mit dieser Datenschutzerklärung
              informieren wir Sie darüber, welche personenbezogenen Daten wir erheben, wie wir mit diesen Daten umgehen
              und welche Rechte Sie im Zusammenhang mit Ihren personenbezogenen Daten haben.
            </p>

            <h3>Verantwortlicher</h3>
            <p>
              Verantwortlich für die Datenverarbeitung ist:
              <br />
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

            <h2>2. Erhebung und Verarbeitung personenbezogener Daten</h2>
            <h3>Beim Besuch unserer Website</h3>
            <p>
              Beim Besuch unserer Website werden automatisch Informationen erhoben, die Ihr Browser an unseren Server
              übermittelt. Diese Informationen werden vorübergehend in einem sogenannten Logfile gespeichert. Folgende
              Informationen werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
            </p>
            <ul>
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>
                Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers
              </li>
            </ul>
            <p>Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:</p>
            <ul>
              <li>Gewährleistung eines reibungslosen Verbindungsaufbaus</li>
              <li>Gewährleistung einer komfortablen Nutzung unserer Website</li>
              <li>Auswertung der Systemsicherheit und -stabilität</li>
              <li>Zu weiteren administrativen Zwecken</li>
            </ul>

            <h3>Bei Nutzung unseres Kontaktformulars</h3>
            <p>
              Wenn Sie Fragen jeglicher Art haben, bieten wir Ihnen die Möglichkeit, mit uns über ein auf der Website
              bereitgestelltes Formular Kontakt aufzunehmen. Dabei ist die Angabe einer gültigen E-Mail-Adresse
              erforderlich, damit wir wissen, von wem die Anfrage stammt und um diese beantworten zu können. Weitere
              Angaben können freiwillig getätigt werden. Die Datenverarbeitung zum Zwecke der Kontaktaufnahme mit uns
              erfolgt nach Art. 6 Abs. 1 S. 1 lit. a DSGVO auf Grundlage Ihrer freiwillig erteilten Einwilligung.
            </p>

            <h2>3. Weitergabe von Daten</h2>
            <p>
              Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken
              findet nicht statt.
            </p>
            <p>Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:</p>
            <ul>
              <li>Sie Ihre ausdrückliche Einwilligung dazu erteilt haben (Art. 6 Abs. 1 S. 1 lit. a DSGVO)</li>
              <li>
                Dies für die Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist (Art. 6 Abs. 1 S. 1 lit. b
                DSGVO)
              </li>
              <li>Eine gesetzliche Verpflichtung zur Weitergabe besteht (Art. 6 Abs. 1 S. 1 lit. c DSGVO)</li>
              <li>
                Die Weitergabe zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist und
                kein Grund zur Annahme besteht, dass Sie ein überwiegendes schutzwürdiges Interesse an der
                Nichtweitergabe Ihrer Daten haben (Art. 6 Abs. 1 S. 1 lit. f DSGVO)
              </li>
            </ul>

            <h2>4. Cookies</h2>
            <p>
              Wir setzen auf unserer Seite Cookies ein. Hierbei handelt es sich um kleine Dateien, die Ihr Browser
              automatisch erstellt und die auf Ihrem Endgerät gespeichert werden, wenn Sie unsere Seite besuchen.
              Cookies richten auf Ihrem Endgerät keinen Schaden an, enthalten keine Viren, Trojaner oder sonstige
              Schadsoftware.
            </p>
            <p>
              Weitere Informationen zu den von uns verwendeten Cookies finden Sie in unserer{" "}
              <Link href="/cookies" className="text-primary hover:underline">
                Cookie-Richtlinie
              </Link>
              .
            </p>

            <h2>5. Betroffenenrechte</h2>
            <p>Sie haben das Recht:</p>
            <ul>
              <li>Gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen</li>
              <li>
                Gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns
                gespeicherten personenbezogenen Daten zu verlangen
              </li>
              <li>Gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
              <li>Gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen</li>
              <li>
                Gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem
                strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen
                Verantwortlichen zu verlangen
              </li>
              <li>Gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit gegenüber uns zu widerrufen</li>
              <li>Gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren</li>
            </ul>

            <h2>6. Widerspruchsrecht</h2>
            <p>
              Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1
              lit. f DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die
              Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer
              besonderen Situation ergeben.
            </p>
            <p>Möchten Sie von Ihrem Widerspruchsrecht Gebrauch machen, genügt eine E-Mail an info@viennaplay.com.</p>

            <h2>7. Datensicherheit</h2>
            <p>
              Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in
              Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. In der
              Regel handelt es sich dabei um eine 256 Bit Verschlüsselung. Falls Ihr Browser keine 256-Bit
              Verschlüsselung unterstützt, greifen wir stattdessen auf 128-Bit v3 Technologie zurück. Ob eine einzelne
              Seite unseres Internetauftrittes verschlüsselt übertragen wird, erkennen Sie an der geschlossenen
              Darstellung des Schüssel- beziehungsweise Schloss-Symbols in der unteren Statusleiste Ihres Browsers.
            </p>
            <p>
              Wir bedienen uns im Übrigen geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre
              Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung
              oder gegen den unbefugten Zugriff Dritter zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der
              technologischen Entwicklung fortlaufend verbessert.
            </p>

            <h2>8. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2025.</p>
            <p>
              Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher
              beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die
              jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Website von Ihnen abgerufen und ausgedruckt
              werden.
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
