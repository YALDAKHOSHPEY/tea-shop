'use client';

import { useState } from 'react';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from '@/i18n';
import { products } from '@/data/products';
import ProductCard from './ProductCard';
import { Search } from 'lucide-react';

export default function ProductGrid() {
  const { language, theme } = useApp();
  const t = useTranslation(language);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = products.filter((product) => {
    const matchesSearch = language === 'fa'
      ? product.nameFa.includes(searchQuery) || product.descriptionFa.includes(searchQuery)
      : product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', label: t.products.categories.all },
    { id: 'green', label: t.products.categories.green },
    { id: 'red', label: t.products.categories.red },
    { id: 'oolong', label: t.products.categories.oolong },
    { id: 'herbal', label: t.products.categories.herbal },
  ];

  return (
    <div>
      {/* هدر */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-3 ${
          theme === 'dark' ? 'text-white' : 'text-[#1b3a1b]'
        }`}>
          {t.products.title}
        </h1>
        <p className={`text-sm sm:text-base max-w-2xl mx-auto ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {t.products.subtitle}
        </p>
      </div>

      {/* جستجو و فیلتر */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8">
        <div className="flex-1 relative">
          <Search className={`absolute ${
            language === 'fa' ? 'right-3' : 'left-3'
          } top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400`} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.products.search}
            className={`w-full px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-2 transition ${
              language === 'fa' ? 'pr-10' : 'pl-10'
            } ${
              theme === 'dark'
                ? 'bg-[#1a332a] border-[#2a4a3d]/50 text-white placeholder-gray-400 focus:ring-emerald-500/30 focus:border-emerald-500'
                : 'bg-white border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-emerald-500/30 focus:border-emerald-500'
            }`}
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === category.id
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/25'
                  : theme === 'dark'
                    ? 'bg-[#1a332a] text-gray-300 hover:bg-[#2a4a3d]'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* تعداد محصولات */}
      <div className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
        {filteredProducts.length} {t.products.found}
      </div>

      {/* گرید محصولات */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className={`text-center py-16 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
          <Search className="w-12 h-12 mx-auto mb-4 opacity-30" />
          <p className="text-lg font-medium">{t.products.notFound}</p>
          <p className="text-sm mt-1">{t.products.changeSearch}</p>
        </div>
      )}
    </div>
  );
}