import { CardFooter, CardContent, CardTitle, CardHeader, Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "../../../components/ui/button"
import articlesData from "../../../data/articles.json"
import type { Metadata } from "next"

interface ArticleBlock {
  type: "paragraph" | "heading" | "list"
  text?: string
  items?: string[]
}

interface Article {
  id: string
  title: string
  date: string
  excerpt: string
  content: ArticleBlock[]
  image: string
  category: string
}

interface ArticlePageProps {
  params: { id: string }
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = articlesData.find((a) => a.id === params.id) as Article
  if (!article) return { title: "Artikel nicht gefunden" }
  return { title: `${article.title} | ViennaPlay`, description: article.excerpt }
}

export async function generateStaticParams() {
  return articlesData.map((a) => ({ id: a.id }))
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articlesData.find((a) => a.id === params.id) as Article
  if (!article) notFound()

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
          <div className="prose prose-lg max-w-none space-y-6">
            <p>{article.excerpt}</p>
            {article.content.map((block, index) => {
              if (block.type === "paragraph") return <p key={index}>{block.text}</p>
              if (block.type === "heading") return <h2 key={index}>{block.text}</h2>
              if (block.type === "list")
                return (
                  <ul key={index}>
                    {block.items?.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )
              return null
            })}
          </div>
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
              .map((related) => (
                <Card key={related.id} className="overflow-hidden">
                  <div className="aspect-h-2 aspect-w-3 relative h-48 w-full">
                    <Image
                      src={related.image || "/placeholder.svg"}
                      alt={related.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary">{related.category}</span>
                      <span className="text-sm text-gray-500">{related.date}</span>
                    </div>
                    <CardTitle>{related.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{related.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href={`/artikel/${related.id}`}>Weiterlesen</Link>
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
