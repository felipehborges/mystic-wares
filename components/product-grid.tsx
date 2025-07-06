import { ProductCard } from "@/components/product-card"

// Mock data - in a real app, this would come from your database
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 79.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Sports",
    rating: 4.3,
  },
  {
    id: 4,
    name: "Coffee Maker",
    price: 149.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Home & Garden",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Laptop Backpack",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Electronics",
    rating: 4.4,
  },
  {
    id: 6,
    name: "Yoga Mat",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Sports",
    rating: 4.7,
  },
]

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
