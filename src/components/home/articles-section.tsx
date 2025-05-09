import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import articlesData from "../../data/articles.json"

export function ArticlesSection() {

  const latestArticles = articlesData.slice(0, 3)

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center animate-fadeIn">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Aktuelle Artikel</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Informative Artikel und Tipps rund um Tischspiele mit Sportakzent
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {latestArticles.map((article, index) => (
            <Card key={article.id} className={`overflow-hidden animate-fadeIn delay-${(index + 1) * 100}`}>
              <div className="aspect-h-2 aspect-w-3 relative h-48 w-full">
                <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary">{article.category}</span>
                  <span className="text-sm text-gray-500">{article.date}</span>
                </div>
                <CardTitle>{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{article.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/artikel/${article.id}`}
                  className="btn inline-block rounded-md px-4 py-2 text-sm font-semibold"
                >
                  Weiterlesen
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center animate-fadeIn delay-500">
          <Link href="/artikel" className="btn rounded-md px-8 py-3 text-base font-semibold">
            Alle Artikel ansehen
          </Link>
        </div>
      </div>
    </section>
  )
}
