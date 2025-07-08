import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sword, Shield, Crown, Scroll } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "Excalibur Replica",
    description: "Legendary sword of King Arthur",
    price: 299.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Weapons",
    featured: true,
  },
  {
    id: 2,
    name: "Dragon Scale Armor",
    description: "Protective armor forged from dragon scales",
    price: 899.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Armor",
    featured: true,
  },
  {
    id: 3,
    name: "Royal Crown of Eldoria",
    description: "Majestic crown worn by ancient kings",
    price: 1299.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories",
    featured: true,
  },
  {
    id: 4,
    name: "Ancient Spell Scroll",
    description: "Mystical scroll containing powerful magic",
    price: 149.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Magic",
    featured: true,
  },
]

const categories = [
  { name: "Weapons", icon: Sword, count: 45 },
  { name: "Armor", icon: Shield, count: 32 },
  { name: "Accessories", icon: Crown, count: 28 },
  { name: "Magic Items", icon: Scroll, count: 19 },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-amber-900 dark:text-amber-100 mb-6">
              The Medieval Merchant
            </h1>
            <p className="text-xl md:text-2xl text-amber-800 dark:text-amber-200 mb-8">
              Discover legendary weapons, mystical artifacts, and royal treasures from ages past
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="/products">Browse Collection</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-amber-600 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950 bg-transparent"
              >
                <Link href="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-900 dark:text-amber-100">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="hover:shadow-lg transition-shadow cursor-pointer border-amber-200 dark:border-amber-800"
              >
                <CardHeader className="text-center">
                  <category.icon className="h-12 w-12 mx-auto text-amber-600 mb-4" />
                  <CardTitle className="text-amber-900 dark:text-amber-100">{category.name}</CardTitle>
                  <CardDescription>{category.count} items available</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-amber-50 dark:bg-amber-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 dark:text-amber-100 mb-4">Featured Treasures</h2>
            <p className="text-amber-700 dark:text-amber-300 max-w-2xl mx-auto">
              Handpicked legendary items from our master craftsmen and ancient collectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 border-amber-200 dark:border-amber-800"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 right-2 bg-amber-600 text-white">{product.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-amber-900 dark:text-amber-100 line-clamp-1">{product.name}</CardTitle>
                  <CardDescription className="line-clamp-2">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">${product.price}</span>
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-amber-600 text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950 bg-transparent"
            >
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-amber-900 dark:bg-amber-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-amber-100 mb-4">Join the Guild</h2>
          <p className="text-amber-200 mb-8 max-w-2xl mx-auto">
            Subscribe to receive news of new arrivals, exclusive offers, and tales from the realm
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border border-amber-700 bg-amber-800 text-amber-100 placeholder-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
