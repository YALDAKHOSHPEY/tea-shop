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
  const { language, theme } = useApp();
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
      fa: {
        green: 'سبز',
        red: 'قرمز',
        oolong: 'اولانگ',
        herbal: 'گیاهی',
      },
      en: {
        green: 'Green',
        red: 'Red',
        oolong: 'Oolong',
        herbal: 'Herbal',
      },
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
    <div className="group bg-white dark:bg-[#152b22] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-[#2a4a3d]/30 hover:scale-[1.02]">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-56 sm:h-64 overflow-hidden bg-gray-100 dark:bg-[#1a332a]">
          <Image
            src={product.image || '/images/placeholder.jpg'}
            alt={isFa ? product.nameFa : product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {product.stock <= 0 && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="text-white font-bold text-sm px-4 py-2 bg-red-500/80 rounded-full">
                {t.products.outOfStock}
              </span>
            </div>
          )}
          <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(product.category)}`}>
            {getCategoryName(product.category)}
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-bold text-base sm:text-lg text-gray-800 dark:text-white line-clamp-1">
              {isFa ? product.nameFa : product.name}
            </h3>
            <div className="flex items-center gap-1 text-amber-400 text-sm flex-shrink-0">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="font-semibold">{product.rating}</span>
              <span className="text-gray-400 text-xs">({product.reviews})</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-3">
            {isFa ? product.descriptionFa : product.description}
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-[#2a4a3d]/30">
            <div>
              <span className="text-lg sm:text-xl font-bold text-emerald-600 dark:text-emerald-400">
                ${product.price}
              </span>
              <span className="text-xs text-gray-400 ml-1">/ {product.weight}</span>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={product.stock <= 0}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition flex items-center gap-1.5 sm:gap-2 ${
                product.stock > 0
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700 active:scale-95'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {t.products.addToCart}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}