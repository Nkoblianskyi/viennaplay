import type { Metadata } from "next"
import { HeroSection } from "../components/home/hero-section"
import { FeaturesSection } from "../components/home/features-section"
import { PopularGamesSection } from "../components/home/popular-games-section"
import { TestimonialsSection } from "../components/home/testimonials-section"
import { FAQSection } from "../components/home/faq-section"
import { CTASection } from "../components/home/cta-section"
import { ArticlesSection } from "@/components/home/articles-section"

export const metadata: Metadata = {
  title: "Startseite | Tischspiele mit Sportakzent",
  description:
    "ViennaPlay bietet hochwertige Tischspiele mit Sportakzent wie Airhockey, Tischtennis und Tischfußball in Wien, Österreich.",
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PopularGamesSection />
      <ArticlesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
