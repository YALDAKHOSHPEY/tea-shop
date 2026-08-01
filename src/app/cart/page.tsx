'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useApp } from '@/contexts/AppContext';
import { useCart } from '@/contexts/CartContext';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';

export default function CartPage() {
  const { language, theme } = useApp();
  const { cart, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();
  const isFa = language === 'fa';

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-20 sm:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center py-16">
            <ShoppingBag className="w-20 h-20 mx-auto mb-4 opacity-30" />
            <h2 className={`text-2xl font-bold mb-2 ${
              theme === 'dark' ? 'text-white' : 'text-[#1b3a1b]'
            }`}>
              {isFa ? 'سبد خرید خالی است' : 'Cart is empty'}
            </h2>
            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              {isFa ? 'هنوز محصولی به سبد خرید اضافه نکرده‌اید' : "You haven't added any products yet"}
            </p>
            <Link
              href="/products"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition ${
                theme === 'dark'
                  ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                  : 'bg-emerald-700 text-white hover:bg-emerald-800'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              {isFa ? 'مشاهده محصولات' : 'Browse Products'}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 sm:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className={`text-2xl sm:text-3xl font-bold mb-6 ${
          theme === 'dark' ? 'text-white' : 'text-[#1b3a1b]'
        }`}>
          {isFa ? 'سبد خرید' : 'Shopping Cart'}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* لیست محصولات */}
          <div className="lg:col-span-2">
            <div className={`rounded-2xl overflow-hidden ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-[#152b22] to-[#0d1f18] border border-[#2a4a3d]/30'
                : 'bg-white border border-[#d0e0d9]/30'
            }`}>
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className={`flex items-center gap-4 p-4 sm:p-5 border-b ${
                    theme === 'dark' ? 'border-[#2a4a3d]/30' : 'border-gray-100'
                  } last:border-0`}
                >
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={item.product.image || '/images/placeholder.jpg'}
                      alt={isFa ? item.product.nameFa : item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className={`font-semibold truncate ${
                      theme === 'dark' ? 'text-white' : 'text-[#1b3a1b]'
                    }`}>
                      {isFa ? item.product.nameFa : item.product.name}
                    </h3>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      ${item.product.price}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className={`p-1 rounded-full transition ${
                        theme === 'dark'
                          ? 'hover:bg-[#2a4a3d] text-gray-400'
                          : 'hover:bg-gray-100 text-gray-600'
                      }`}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className={`w-8 text-center font-semibold ${
                      theme === 'dark' ? 'text-white' : 'text-[#1b3a1b]'
                    }`}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className={`p-1 rounded-full transition ${
                        theme === 'dark'
                          ? 'hover:bg-[#2a4a3d] text-gray-400'
                          : 'hover:bg-gray-100 text-gray-600'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="p-2 text-red-500 hover:bg-red-500/10 rounded-full transition"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* خلاصه سبد خرید */}
          <div className="lg:col-span-1">
            <div className={`sticky top-24 rounded-2xl p-6 ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-[#152b22] to-[#0d1f18] border border-[#2a4a3d]/30'
                : 'bg-white border border-[#d0e0d9]/30'
            }`}>
              <h2 className={`text-lg font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-[#1b3a1b]'
              }`}>
                {isFa ? 'خلاصه سفارش' : 'Order Summary'}
              </h2>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
                    {isFa ? 'تعداد محصولات' : 'Total Items'}
                  </span>
                  <span className={theme === 'dark' ? 'text-white' : 'text-[#1b3a1b]'}>
                    {totalItems}
                  </span>
                </div>
                <div className="flex justify-between border-t pt-3 border-gray-700/30">
                  <span className={`font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-[#1b3a1b]'
                  }`}>
                    {isFa ? 'مجموع' : 'Total'}
                  </span>
                  <span className={`text-xl font-bold ${
                    theme === 'dark' ? 'text-emerald-400' : 'text-emerald-700'
                  }`}>
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={clearCart}
                className={`w-full px-4 py-3 rounded-full font-semibold transition mb-3 ${
                  theme === 'dark'
                    ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                    : 'bg-red-100 text-red-700 hover:bg-red-200'
                }`}
              >
                {isFa ? 'خالی کردن سبد' : 'Clear Cart'}
              </button>

              <button
                className={`w-full px-4 py-3 rounded-full font-semibold transition ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:shadow-lg hover:shadow-emerald-500/25'
                    : 'bg-gradient-to-r from-emerald-700 to-green-700 text-white hover:shadow-lg hover:shadow-emerald-700/30'
                }`}
              >
                {isFa ? 'ثبت سفارش و پرداخت' : 'Place Order & Checkout'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}