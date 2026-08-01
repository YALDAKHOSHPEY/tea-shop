'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { AppProvider, useApp } from '@/contexts/AppContext';
import { CartProvider } from '@/contexts/CartContext';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

// کامپوننت داخلی برای دسترسی به context
function RootLayoutContent({ children }: { children: React.ReactNode }) {
  const { dir, theme } = useApp();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <html lang="fa" dir="rtl">
        <body className={`${inter.className} bg-[#f0f7f4] text-[#1a332a]`}>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="fa" dir={dir} className={theme === 'dark' ? 'dark' : ''}>
      <body className={`${inter.className} bg-background text-foreground min-h-screen`}>
        <div className="min-h-screen flex flex-col bg-background">
          <Header />
          <main className="flex-grow bg-background">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

// کامپوننت اصلی layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider>
      <CartProvider>  {/* ← این خط رو اضافه کن اگر سبد خرید می‌خوای */}
        <RootLayoutContent>{children}</RootLayoutContent>
      </CartProvider>
    </AppProvider>
  );
}