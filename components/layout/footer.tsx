import Link from "next/link"
import { Crown, Facebook, Twitter, Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  shop: [
    { name: "All Products", href: "/products" },
    { name: "Weapons", href: "/products?category=weapons" },
    { name: "Armor", href: "/products?category=armor" },
    { name: "Accessories", href: "/products?category=accessories" },
    { name: "Magic Items", href: "/products?category=magic" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Shipping Info", href: "/shipping" },
    { name: "Returns", href: "/returns" },
    { name: "Size Guide", href: "/size-guide" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Story", href: "/story" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
    { name: "Blog", href: "/blog" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Refund Policy", href: "/refunds" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-amber-900 dark:bg-amber-950 text-amber-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Crown className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-bold text-amber-100">Medieval Merchant</span>
            </Link>
            <p className="text-amber-200 mb-6 max-w-md">
              Your trusted source for authentic medieval artifacts, legendary weapons, and mystical treasures from
              across the realm. Serving adventurers since 1347.
            </p>

            {/* Newsletter Signup */}
            <div className="space-y-2">
              <h3 className="font-semibold text-amber-100">Join the Guild</h3>
              <p className="text-sm text-amber-200">Subscribe for exclusive offers and new arrivals</p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-amber-800 border-amber-700 text-amber-100 placeholder-amber-300"
                />
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-semibold text-amber-100 mb-4">Shop</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-amber-200 hover:text-amber-100 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-amber-100 mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-amber-200 hover:text-amber-100 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-amber-100 mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-amber-200 hover:text-amber-100 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-amber-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-amber-200 text-sm">
              © 2024 Medieval Merchant. All rights reserved. | Established in the Kingdom of Eldoria
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-amber-200 hover:text-amber-100 hover:bg-amber-800">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-amber-200 hover:text-amber-100 hover:bg-amber-800">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-amber-200 hover:text-amber-100 hover:bg-amber-800">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-amber-200 hover:text-amber-100 hover:bg-amber-800">
                <Mail className="h-5 w-5" />
              </Button>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-4 text-sm">
              {footerLinks.legal.map((link, index) => (
                <span key={link.name}>
                  <Link href={link.href} className="text-amber-200 hover:text-amber-100 transition-colors">
                    {link.name}
                  </Link>
                  {index < footerLinks.legal.length - 1 && <span className="ml-4 text-amber-400">|</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
