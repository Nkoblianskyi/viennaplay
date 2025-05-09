import { Card, CardContent } from "../ui/card"
import testimonialsData from "../../data/testimonials.json"

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Was unsere Kunden sagen</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Erfahren Sie, was unsere zufriedenen Kunden über ViennaPlay zu berichten haben
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="flex h-full flex-col justify-between p-6">
                <div>
                  <p className="text-lg font-medium text-gray-900">&ldquo;{testimonial.quote}&rdquo;</p>
                </div>
                <div className="mt-8">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
