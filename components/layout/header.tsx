'use client'

import {
  Crown,
  Menu,
  Moon,
  Scroll,
  Search,
  Shield,
  ShoppingCart,
  Sun,
  Sword,
  User
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Categories', href: '/categories' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
]

const categories = [
  { name: 'Weapons', href: '/products?category=weapons', icon: Sword },
  { name: 'Armor', href: '/products?category=armor', icon: Shield },
  { name: 'Accessories', href: '/products?category=accessories', icon: Crown },
  { name: 'Magic Items', href: '/products?category=magic', icon: Scroll }
]

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const cartItemCount = 2 // This would come from your cart state

  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-200 dark:border-amber-800 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              alt="Mystic Wares Logo"
              src={
                theme === 'dark'
                  ? '/logo/logo_hor_white.png'
                  : '/logo/logo_hor_black.png'
              }
              width={150}
              height={150}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-amber-700 hover:text-amber-900 dark:text-amber-300 dark:hover:text-amber-100 transition-colors"
              >
                {item.name}
              </Link>
            ))}

            {/* Categories Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-amber-700 hover:text-amber-900 dark:text-amber-300 dark:hover:text-amber-100"
                >
                  Categories
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-56">
                {categories.map((category) => (
                  <DropdownMenuItem key={category.name} asChild>
                    <Link href={category.href} className="flex items-center">
                      <category.icon className="mr-2 h-4 w-4" />
                      {category.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            {/* Search */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-amber-600 hover:text-amber-700"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-amber-600 hover:text-amber-700"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {/* Cart */}
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="relative text-amber-600 hover:text-amber-700"
            >
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-amber-600 text-white text-xs">
                    {cartItemCount}
                  </Badge>
                )}
              </Link>
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-amber-600 hover:text-amber-700"
                >
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/orders">Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/wishlist">Wishlist</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-amber-600"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg text-amber-700 hover:text-amber-900 dark:text-amber-300 dark:hover:text-amber-100"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-amber-200 dark:border-amber-800">
                    <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                      Categories
                    </h3>
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        className="flex items-center py-2 text-amber-700 hover:text-amber-900 dark:text-amber-300 dark:hover:text-amber-100"
                      >
                        <category.icon className="mr-2 h-4 w-4" />
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600 h-4 w-4" />
              <Input
                placeholder="Search for legendary items..."
                className="pl-10 border-amber-200 focus:border-amber-500"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
