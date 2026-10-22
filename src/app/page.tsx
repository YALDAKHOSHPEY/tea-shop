'use client';

import Hero from '@/components/features/Hero/Hero';
import ProductCard from '@/components/features/Products/ProductCard';
import { products } from '@/data/products';
import Link from 'next/link';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/i18n';

export default function Home() {
  const { language } = useApp();
  const t = useTranslation(language);
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="pt-16 sm:pt-20">
      <Hero />

      {/* Featured Products */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t.home.featuredTitle}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            {t.home.featuredSubtitle}
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-800 dark:to-green-800 rounded-3xl p-8 sm:p-12 text-center shadow-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
            {t.home.ctaTitle}
          </h2>
          <p className="text-sm sm:text-base mb-6 text-white max-w-xl mx-auto">
            {t.home.ctaText}
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-emerald-700 dark:bg-gray-100 dark:text-emerald-900 font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            {t.home.ctaButton}
          </Link>
        </div>
      </section>
    </div>
  );
}