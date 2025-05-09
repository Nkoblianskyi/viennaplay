import { CardFooter } from "@/components/ui/card"
import { CardContent } from "@/components/ui/card"
import { CardTitle } from "@/components/ui/card"
import { CardHeader } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "../../../components/ui/button"
import articlesData from "../../../data/articles.json"
import type { Metadata } from "next"

interface ArticlePageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = articlesData.find((article) => article.id === params.id)

  if (!article) {
    return {
      title: "Artikel nicht gefunden",
    }
  }

  return {
    title: `${article.title} | ViennaPlay`,
    description: article.excerpt,
  }
}

export async function generateStaticParams() {
  return articlesData.map((article) => ({
    id: article.id,
  }))
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articlesData.find((article) => article.id === params.id)

  if (!article) {
    notFound()
  }

  // Здесь мы бы загрузили полное содержание статьи из базы данных или CMS
  // Для примера используем заглушку
  const articleContent = `
    <p>Dies ist ein Beispielinhalt für den Artikel "${article.title}". In einer echten Anwendung würde hier der vollständige Inhalt des Artikels stehen, der aus einer Datenbank oder einem CMS geladen wird.</p>
    <p>Der Artikel würde mehrere Absätze, Überschriften, Listen und möglicherweise auch Bilder enthalten, um das Thema umfassend zu behandeln.</p>
    <h2>Ein Unterabschnitt des Artikels</h2>
    <p>Hier würden weitere Informationen zum Thema folgen, mit detaillierten Erklärungen und Beispielen.</p>
    <ul>
      <li>Ein wichtiger Punkt zum Thema</li>
      <li>Ein weiterer wichtiger Aspekt</li>
      <li>Eine praktische Empfehlung</li>
    </ul>
    <p>Abschließend würde der Artikel eine Zusammenfassung oder ein Fazit enthalten, das die wichtigsten Punkte noch einmal hervorhebt und möglicherweise einen Aufruf zum Handeln enthält.</p>
  `

  return (
    <>
      <section className="bg-secondary py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-2 text-sm">
              <span className="text-primary">{article.category}</span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-300">{article.date}</span>
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">{article.title}</h1>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mb-10 overflow-hidden rounded-lg">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              width={1200}
              height={600}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: articleContent }}></div>
          <div className="mt-12 flex justify-center">
            <Button asChild>
              <Link href="/artikel">Zurück zu allen Artikeln</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Weitere Artikel</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Entdecken Sie weitere informative Artikel zu Tischspielen
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {articlesData
              .filter((a) => a.id !== article.id)
              .slice(0, 3)
              .map((relatedArticle) => (
                <Card key={relatedArticle.id} className="overflow-hidden">
                  <div className="aspect-h-2 aspect-w-3 relative h-48 w-full">
                    <Image
                      src={relatedArticle.image || "/placeholder.svg"}
                      alt={relatedArticle.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary">{relatedArticle.category}</span>
                      <span className="text-sm text-gray-500">{relatedArticle.date}</span>
                    </div>
                    <CardTitle>{relatedArticle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{relatedArticle.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href={`/artikel/${relatedArticle.id}`}>Weiterlesen</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
