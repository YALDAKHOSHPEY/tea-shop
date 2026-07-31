# TeaShop 🍵

A modern e-commerce web application for buying and selling premium teas, built with **Next.js**, **TypeScript**, and **Redux** for advanced state management.

## ✨ Features

- 🛒 Dynamic shopping cart with Redux state management
- 🔍 Product search and filtering
- 📱 Fully responsive design (mobile-first)
- ⚡ Blazing fast performance with Next.js App Router
- 🎨 Clean and modern UI/UX
- 💾 Centralized state management with Redux Toolkit
- 🔄 Persistent cart state (localStorage)
- 🏷️ Category-based product browsing

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17.0 or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/tea-shop.git
cd tea-shop
tea-shop/
├── app/                    # Next.js App Router
│   ├── (routes)/          # Route groups
│   │   ├── cart/          # Cart page
│   │   ├── products/      # Product pages
│   │   └── checkout/      # Checkout flow
│   ├── components/        # Reusable components
│   │   ├── Cart/          # Cart components
│   │   ├── Product/       # Product components
│   │   └── Layout/        # Layout components
│   ├── store/             # Redux configuration
│   │   ├── slices/        # Redux slices
│   │   └── hooks.ts       # Typed hooks
│   └── utils/             # Utility functions
├── public/                # Static assets
│   └── images/            # Product images
├── types/                 # TypeScript definitions
├── .env.local             # Environment variables
└── package.json           # Dependencies and scripts
