import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="/datenschutz" className="text-sm leading-6 text-gray-300 hover:text-white">
            Datenschutz
          </Link>
          <Link href="/cookies" className="text-sm leading-6 text-gray-300 hover:text-white">
            Cookies
          </Link>
          <Link href="/impressum" className="text-sm leading-6 text-gray-300 hover:text-white">
            Impressum
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex flex-col space-y-2">
            <p className="text-sm leading-6 text-gray-300">ViennaPlay | Mariahilfer Straße 45, 1060 Wien, Austria</p>
            <p className="text-sm leading-6 text-gray-300">Tel: +43 5 224 46 18 | Email: info@viennaplay.com</p>
          </div>
          <p className="mt-4 text-center text-xs leading-5 text-gray-300">
            &copy; {new Date().getFullYear()} ViennaPlay. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
