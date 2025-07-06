import { Suspense } from "react"
import { ProductGrid } from "@/components/product-grid"
import { HeroSection } from "@/components/hero-section"
import { CategoryNav } from "@/components/category-nav"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategoryNav />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <Suspense fallback={<div>Loading products...</div>}>
          <ProductGrid />
        </Suspense>
      </div>
    </div>
  )
}
