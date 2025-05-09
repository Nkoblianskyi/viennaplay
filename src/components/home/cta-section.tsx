import Link from "next/link"

export function CTASection() {
  return (
    <section className="bg-secondary py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center animate-fadeIn">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Bereit für Spielspaß?</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Kontaktieren Sie uns noch heute und entdecken Sie unsere hochwertigen Tischspiele mit Sportakzent.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/kontakt" className="btn rounded-md px-8 py-3 text-base font-semibold animate-pulse">
              Jetzt kontaktieren
            </Link>
            <Link href="/spiele" className="btn-outline rounded-md px-8 py-3 text-base font-semibold">
              Unsere Spiele
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
