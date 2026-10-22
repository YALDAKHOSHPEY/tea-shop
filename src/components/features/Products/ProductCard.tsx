'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useApp } from '@/contexts/AppContext';
import { useCart } from '@/contexts/CartContext';
import { useTranslation } from '@/i18n';
import { Product } from '@/data/products';
import { ShoppingBag, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { language } = useApp();
  const { addToCart } = useCart();
  const t = useTranslation(language);
  const isFa = language === 'fa';

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const getCategoryName = (category: string) => {
    const names = {
      fa: { green: 'سبز', red: 'قرمز', oolong: 'اولانگ', herbal: 'گیاهی' },
      en: { green: 'Green', red: 'Red', oolong: 'Oolong', herbal: 'Herbal' },
    };
    return names[language][category as keyof typeof names.en];
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      green: 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400',
      red: 'bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400',
      oolong: 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400',
      herbal: 'bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400',
    };
    return colors[category as keyof typeof colors] || colors.green;
  };

  return (
    <div className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl dark:border-[#2a4a3d]/30 dark:bg-[#152b22]">
      <Link href={`/products/${product.id}`} className="flex h-full flex-col">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 dark:bg-[#1a332a]">
          <Image
            src={product.image || '/images/placeholder.jpg'}
            alt={isFa ? product.nameFa : product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {product.stock <= 0 && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/60">
              <span className="rounded-full bg-red-500/80 px-4 py-2 text-sm font-bold text-white">
                {t.products.outOfStock}
              </span>
            </div>
          )}
          <div className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-medium ${getCategoryColor(product.category)}`}>
            {getCategoryName(product.category)}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <div className="mb-2 flex items-start justify-between gap-2">
            <h3 className="line-clamp-1 flex-1 text-base font-bold text-gray-800 sm:text-lg dark:text-white">
              {isFa ? product.nameFa : product.name}
            </h3>
            <div className="flex flex-shrink-0 items-center gap-1 text-sm text-amber-400">
              <Star className="h-3.5 w-3.5 fill-current" />
              <span className="font-semibold">{product.rating}</span>
              <span className="text-xs text-gray-400">({product.reviews})</span>
            </div>
          </div>

          <p className="mb-3 line-clamp-2 text-xs text-gray-500 sm:text-sm dark:text-gray-400">
            {isFa ? product.descriptionFa : product.description}
          </p>

          <div className="mt-auto flex flex-col gap-2 border-t border-gray-100 pt-3 sm:flex-row sm:items-center sm:justify-between dark:border-[#2a4a3d]/30">
            <div className="flex items-baseline">
              <span className="text-lg font-bold text-emerald-600 sm:text-xl dark:text-emerald-400">
                ${product.price}
              </span>
              <span className="ml-1 text-xs text-gray-400">/ {product.weight}</span>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={product.stock <= 0}
              className={`flex w-full items-center justify-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium transition sm:w-auto sm:px-4 sm:text-sm ${
                product.stock > 0
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95'
                  : 'cursor-not-allowed bg-gray-300 text-gray-500'
              }`}
            >
              <ShoppingBag className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              {t.products.addToCart}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}