import Link from "next/link"

export function HeroSection() {
  return (
    <section
      className="relative py-32 text-white"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/clean-game-room.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fadeIn">
            Tischspiele mit <span className="text-primary">Sportakzent</span>
          </h1>
          <p className="mt-6 mx-auto max-w-xl text-lg leading-8 text-gray-300 animate-fadeIn delay-200">
            Entdecken Sie bei ViennaPlay hochwertige Tischspiele wie Airhockey, Tischtennis, Tischfußball und mehr.
            Qualität und Spielspaß für Ihr Zuhause oder Unternehmen.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 animate-fadeIn delay-400">
            <Link href="/spiele" className="btn rounded-md px-8 py-3 text-base font-semibold">
              Unsere Spiele
            </Link>
            <Link href="/kontakt" className="btn-outline rounded-md px-8 py-3 text-base font-semibold">
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
