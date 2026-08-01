'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useApp } from '@/contexts/AppContext';
import { useCart } from '@/contexts/CartContext';
import { getProducts } from '@/i18n';
import { Product } from '@/data/products';
import { ArrowLeft, ShoppingBag, Star, Thermometer, Clock, Leaf, Check } from 'lucide-react';

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { language, theme } = useApp();
  const { addToCart } = useCart();
  const t = getProducts(language);
  const isFa = language === 'fa';

  const handleAddToCart = () => {
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
    <div className="max-w-6xl mx-auto">
      {/* دکمه بازگشت */}
      <Link
        href="/products"
        className={`inline-flex items-center gap-2 mb-6 text-sm font-medium transition ${
          theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-[#1b3a1b]'
        }`}
      >
        <ArrowLeft className="w-4 h-4" />
        {t.back}
      </Link>

      <div className={`rounded-2xl overflow-hidden ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-[#152b22] to-[#0d1f18] border border-[#2a4a3d]/30'
          : 'bg-white border border-[#d0e0d9]/30'
      }`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8">
          {/* تصویر */}
          <div className="relative h-80 sm:h-96 rounded-xl overflow-hidden bg-gray-100 dark:bg-[#1a332a]">
            <Image
              src={product.image || '/images/placeholder.jpg'}
              alt={isFa ? product.nameFa : product.name}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* اطلاعات */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <h1 className={`text-2xl sm:text-3xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-[#1b3a1b]'
              }`}>
                {isFa ? product.nameFa : product.name}
              </h1>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(product.category)}`}>
                {getCategoryName(product.category)}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1 text-amber-400">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-semibold text-gray-800 dark:text-white">{product.rating}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ({product.reviews} {t.reviews})
                </span>
              </div>
              <span className={`text-sm ${
                product.stock > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'
              }`}>
                {product.stock > 0 
                  ? `✓ ${t.inStock}`
                  : `✗ ${t.outOfStock}`}
              </span>
            </div>

            <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {isFa ? product.descriptionFa : product.description}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className={`p-3 rounded-lg ${
                theme === 'dark' ? 'bg-[#1a332a]' : 'bg-gray-50'
              }`}>
                <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  {t.origin}
                </div>
                <div className={`text-sm font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-[#1b3a1b]'
                }`}>
                  {isFa ? product.originFa : product.origin}
                </div>
              </div>
              <div className={`p-3 rounded-lg ${
                theme === 'dark' ? 'bg-[#1a332a]' : 'bg-gray-50'
              }`}>
                <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  {t.weight}
                </div>
                <div className={`text-sm font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-[#1b3a1b]'
                }`}>
                  {product.weight}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div>
                <span className={`text-3xl font-bold ${
                  theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'
                }`}>
                  ${product.price}
                </span>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={product.stock <= 0}
                className={`flex-1 px-6 py-3 rounded-full font-semibold transition flex items-center justify-center gap-2 ${
                  product.stock > 0
                    ? theme === 'dark'
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                      : 'bg-emerald-700 text-white hover:bg-emerald-800'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                {t.addToCart}
              </button>
            </div>

            {/* خواص */}
            <div className={`pt-4 border-t ${
              theme === 'dark' ? 'border-[#2a4a3d]/30' : 'border-gray-200'
            }`}>
              <h3 className={`text-sm font-semibold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-[#1b3a1b]'
              }`}>
                <Leaf className="w-4 h-4 inline mr-2" />
                {t.benefits}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(isFa ? product.benefitsFa : product.benefits).map((benefit, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full text-xs ${
                      theme === 'dark'
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'bg-emerald-100 text-emerald-700'
                    }`}
                  >
                    <Check className="w-3 h-3 inline mr-1" />
                    {benefit}
                  </span>
                ))}
              </div>
            </div>

            {/* دم کردن */}
            <div className={`grid grid-cols-2 gap-4 mt-4 pt-4 border-t ${
              theme === 'dark' ? 'border-[#2a4a3d]/30' : 'border-gray-200'
            }`}>
              <div className="flex items-center gap-2">
                <Thermometer className={`w-4 h-4 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    {t.brewingTemp}
                  </div>
                  <div className={`text-sm font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-[#1b3a1b]'
                  }`}>
                    {product.brewingTemp}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className={`w-4 h-4 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    {t.brewingTime}
                  </div>
                  <div className={`text-sm font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-[#1b3a1b]'
                  }`}>
                    {product.brewingTime}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}