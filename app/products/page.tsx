"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Search } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Excalibur Replica",
    description: "Legendary sword of King Arthur, forged with ancient techniques",
    price: 299.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Weapons",
    inStock: true,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Dragon Scale Armor",
    description: "Protective armor forged from authentic dragon scales",
    price: 899.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Armor",
    inStock: true,
    rating: 4.9,
  },
  {
    id: 3,
    name: "Royal Crown of Eldoria",
    description: "Majestic crown worn by the ancient kings of Eldoria",
    price: 1299.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Accessories",
    inStock: false,
    rating: 5.0,
  },
  {
    id: 4,
    name: "Ancient Spell Scroll",
    description: "Mystical scroll containing powerful enchantments",
    price: 149.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Magic",
    inStock: true,
    rating: 4.6,
  },
  {
    id: 5,
    name: "Knight's Shield",
    description: "Sturdy shield bearing the coat of arms of noble houses",
    price: 199.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Armor",
    inStock: true,
    rating: 4.7,
  },
  {
    id: 6,
    name: "Wizard's Staff",
    description: "Enchanted staff channeling ancient magical energies",
    price: 399.99,
    image: "/placeholder.svg?height=300&width=300",
    category: "Magic",
    inStock: true,
    rating: 4.8,
  },
]

const categories = ["All", "Weapons", "Armor", "Accessories", "Magic"]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("name")
  const [showInStockOnly, setShowInStockOnly] = useState(false)

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesSearch =
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
        const matchesStock = !showInStockOnly || product.inStock

        return matchesSearch && matchesCategory && matchesStock
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "price-low":
            return a.price - b.price
          case "price-high":
            return b.price - a.price
          case "rating":
            return b.rating - a.rating
          default:
            return a.name.localeCompare(b.name)
        }
      })
  }, [searchTerm, selectedCategory, sortBy, showInStockOnly])

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-amber-900 dark:text-amber-100 mb-4">Our Collection</h1>
          <p className="text-amber-700 dark:text-amber-300">Discover legendary items from across the realm</p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-amber-200 focus:border-amber-500"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48 border-amber-200">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-48 border-amber-200">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Additional Filters */}
          <div className="flex items-center space-x-2">
            <Checkbox id="inStock" checked={showInStockOnly} onCheckedChange={setShowInStockOnly} />
            <Label htmlFor="inStock" className="text-amber-700 dark:text-amber-300">
              In stock only
            </Label>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
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
                {!product.inStock && (
                  <Badge className="absolute top-2 left-2 bg-red-600 text-white">Out of Stock</Badge>
                )}
              </div>
              <CardHeader>
                <CardTitle className="text-amber-900 dark:text-amber-100 line-clamp-1">{product.name}</CardTitle>
                <CardDescription className="line-clamp-2">{product.description}</CardDescription>
                <div className="flex items-center gap-1">
                  <span className="text-amber-500">★</span>
                  <span className="text-sm text-amber-600">{product.rating}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-600">${product.price}</span>
                  <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white" disabled={!product.inStock}>
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-amber-600 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
