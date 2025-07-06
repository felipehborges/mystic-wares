import Link from "next/link"
import { Button } from "@/components/ui/button"

const categories = [
  { name: "Electronics", href: "/category/electronics" },
  { name: "Clothing", href: "/category/clothing" },
  { name: "Home & Garden", href: "/category/home-garden" },
  { name: "Sports", href: "/category/sports" },
  { name: "Books", href: "/category/books" },
]

export function CategoryNav() {
  return (
    <nav className="border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex gap-2 py-4 overflow-x-auto">
          {categories.map((category) => (
            <Button key={category.name} variant="ghost" asChild className="whitespace-nowrap">
              <Link href={category.href}>{category.name}</Link>
            </Button>
          ))}
        </div>
      </div>
    </nav>
  )
}
