'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
  category: string
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: 'Excalibur Replica',
    price: 299.99,
    quantity: 1,
    image: '/placeholder.svg?height=100&width=100',
    category: 'Weapons'
  },
  {
    id: 4,
    name: 'Ancient Spell Scroll',
    price: 149.99,
    quantity: 2,
    image: '/placeholder.svg?height=100&width=100',
    category: 'Magic'
  }
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems)
  const [promoCode, setPromoCode] = useState('')

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id)
      return
    }
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  const shipping = subtotal > 500 ? 0 : 29.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <ShoppingBag className="h-24 w-24 mx-auto text-amber-300 mb-6" />
            <h1 className="text-3xl font-bold text-amber-900 dark:text-amber-100 mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-amber-700 dark:text-amber-300 mb-8">
              Looks like you haven't added any legendary items to your cart yet.
            </p>
            <Button
              asChild
              className="bg-amber-600 hover:bg-amber-700 text-white"
            >
              <Link href="/products">Continue Shopping</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-amber-900 dark:text-amber-100 mb-8">
          Your Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card
                key={item.id}
                className="border-amber-200 dark:border-amber-800"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.image || '/placeholder.svg'}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-amber-900 dark:text-amber-100">
                        {item.name}
                      </h3>
                      <p className="text-sm text-amber-600">{item.category}</p>
                      <p className="text-lg font-bold text-amber-600 mt-2">
                        ${item.price}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="h-8 w-8 border-amber-300"
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-medium">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="h-8 w-8 border-amber-300"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="border-amber-200 dark:border-amber-800 sticky top-4">
              <CardHeader>
                <CardTitle className="text-amber-900 dark:text-amber-100">
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-amber-600">${total.toFixed(2)}</span>
                </div>

                {/* Promo Code */}
                <div className="space-y-2">
                  <Input
                    placeholder="Enter promo code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="border-amber-200"
                  />
                  <Button
                    variant="outline"
                    className="w-full border-amber-300 bg-transparent"
                  >
                    Apply Code
                  </Button>
                </div>

                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  Proceed to Checkout
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-amber-300 bg-transparent"
                >
                  <Link href="/products">Continue Shopping</Link>
                </Button>

                {subtotal < 500 && (
                  <p className="text-sm text-amber-600 text-center">
                    Add ${(500 - subtotal).toFixed(2)} more for free shipping!
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
