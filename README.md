# Mystic Wares - Monorepo Ecommerce

A fictional medieval-themed ecommerce website built with modern web technologies in a monorepo structure.

## 🏰 About

Mystic Wares is a fantasy ecommerce platform specializing in legendary weapons, mystical artifacts, royal accessories, and magical items. Built with a medieval aesthetic using yellow and brown color schemes.

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI component library
- **React Hook Form** - Form handling and validation
- **Zod** - Schema validation
- **next-themes** - Dark/light mode support
- **Lucide React** - Beautiful icons

### Backend (Planned)
- **NestJS** - Node.js framework
- **Fastify** - Fast web framework
- **Prisma** - Database ORM
- **PostgreSQL** - Database

## 🎨 Design Features

- **Medieval Theme**: Authentic medieval aesthetic with yellow/brown color palette
- **Dark/Light Mode**: Full theme switching support
- **Responsive Design**: Mobile-first responsive layout
- **Accessibility**: WCAG compliant components
- **Modern UX**: Smooth animations and transitions

## 📁 Project Structure

\`\`\`
medieval-ecommerce-monorepo/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── products/          # Product catalog
│   ├── cart/              # Shopping cart
│   ├── checkout/          # Checkout process
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   └── layout/           # Layout components
├── lib/                  # Utility functions
└── styles/              # Global styles
\`\`\`

## 🚀 Getting Started

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd medieval-ecommerce-monorepo
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛍️ Features

### Current Features
- **Homepage**: Hero section, featured products, categories
- **Product Catalog**: Filtering, sorting, search functionality
- **Shopping Cart**: Add/remove items, quantity management
- **Checkout**: Multi-step form with validation
- **Responsive Design**: Works on all device sizes
- **Theme Switching**: Dark and light mode support

### Planned Features
- User authentication and profiles
- Order management and history
- Payment processing integration
- Product reviews and ratings
- Wishlist functionality
- Admin dashboard
- Inventory management
- Email notifications

## 🎯 Product Categories

- **⚔️ Weapons**: Swords, axes, bows, and legendary armaments
- **🛡️ Armor**: Protective gear, shields, and battle equipment
- **👑 Accessories**: Crowns, jewelry, and royal items
- **📜 Magic Items**: Scrolls, potions, and mystical artifacts

## 🔧 Development

### Adding New Components
\`\`\`bash
npx shadcn@latest add [component-name]
\`\`\`

### Form Validation
All forms use React Hook Form with Zod validation schemas for type-safe form handling.

### Styling Guidelines
- Use Tailwind CSS utility classes
- Follow the medieval color palette (amber/yellow and brown)
- Maintain consistent spacing and typography
- Ensure dark mode compatibility

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Theme Support

The application supports both light and dark themes with a medieval color scheme:

- **Light Mode**: Warm amber and brown tones
- **Dark Mode**: Deep amber and brown with high contrast
- **System**: Automatically follows system preference

## 🚀 Deployment

The application is optimized for deployment on Vercel:

1. Connect your repository to Vercel
2. Configure environment variables
3. Deploy with automatic builds

## 📄 License

This project is for educational and demonstration purposes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

*Built with ⚔️ by the Mystic Wares Guild*
