'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Globe, Sun, Moon, Leaf } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { translations } from '@/i18n/translations';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, theme, toggleTheme, dir } = useApp();
  const t = translations[language];
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.products, href: '/products' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.contact, href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  // دریافت پس‌زمینه هدر بر اساس تم و اسکرول
  const getHeaderBackground = () => {
    if (scrolled) {
      return theme === 'dark'
        ? 'bg-[#0d1f18]/95 shadow-2xl border-b border-[#2a4a3d]/30 backdrop-blur-sm'
        : 'bg-[#f0f7f4]/95 shadow-2xl border-b border-[#d0e0d9]/30 backdrop-blur-sm';
    }
    return theme === 'dark'
      ? 'bg-gradient-to-br from-[#0d1f18] via-[#152b22] to-[#0d1f18] border-b border-[#2a4a3d]/30'
      : 'bg-gradient-to-br from-[#e8f3ef] via-[#f0f7f4] to-[#e8f3ef] border-b border-[#d0e0d9]/30';
  };

  // دریافت رنگ متن بر اساس تم
  const getTextColor = (active: boolean = false) => {
    if (theme === 'dark') {
      return active ? 'text-[#3aa885]' : 'text-[#c5ddd2] hover:text-[#3aa885]';
    }
    return active ? 'text-[#2d8f6f]' : 'text-[#1a332a] hover:text-[#2d8f6f]';
  };

  // دریافت رنگ آکاردئون بر اساس تم
  const getAccentColor = () => {
    return theme === 'dark' ? 'bg-[#3aa885]' : 'bg-[#2d8f6f]';
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${getHeaderBackground()}`}
      dir={dir}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* لوگو */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative"
            >
              {/* پس‌زمینه گرد برای لوگو */}
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-white/90 shadow-lg shadow-[#3aa885]/20' 
                  : 'bg-transparent'
              }`}>
                <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                  <Image
                    src="/images/teaalogo.png"
                    alt="Tea House Logo"
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 640px) 32px, 40px"
                  />
                </div>
              </div>
            </motion.div>
            <div className="flex items-baseline">
              <span className={`text-xl sm:text-2xl font-bold ${
                theme === 'dark' ? 'text-[#3aa885]' : 'text-[#2d8f6f]'
              }`}>
                Tea
              </span>
              <span className={`text-xs sm:text-sm font-light ml-1 hidden sm:inline ${
                theme === 'dark' ? 'text-[#3aa885]/60' : 'text-[#2d8f6f]/60'
              }`}>
                House
              </span>
            </div>
          </Link>

          {/* منوی دسکتاپ */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors relative group font-medium ${getTextColor(active)}`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    } ${getAccentColor()}`}
                  />
                </Link>
              );
            })}
          </div>

          {/* دکمه‌های اکشن */}
          <div className="flex items-center gap-1 sm:gap-2 lg:gap-3">
            {/* تغییر زبان */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLanguage(language === 'fa' ? 'en' : 'fa')}
              className={`p-2 rounded-full transition relative group ${
                theme === 'dark' ? 'hover:bg-[#3aa885]/20' : 'hover:bg-[#2d8f6f]/20'
              }`}
            >
              <Globe className={`w-4 h-4 sm:w-5 sm:h-5 transition ${
                theme === 'dark' 
                  ? 'text-[#c5ddd2] group-hover:text-[#3aa885]' 
                  : 'text-[#1a332a] group-hover:text-[#2d8f6f]'
              }`} />
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] bg-gray-800 text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                {language === 'fa' ? 'EN' : 'FA'}
              </span>
            </motion.button>

            {/* تغییر تم */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className={`p-2 rounded-full transition ${
                theme === 'dark' ? 'hover:bg-[#3aa885]/20' : 'hover:bg-[#2d8f6f]/20'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 hover:text-[#3aa885] transition" />
              ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-[#1a332a] hover:text-[#2d8f6f] transition" />
              )}
            </motion.button>

            {/* سبد خرید */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-full transition relative group ${
                theme === 'dark' ? 'hover:bg-[#3aa885]/20' : 'hover:bg-[#2d8f6f]/20'
              }`}
            >
              <ShoppingBag className={`w-4 h-4 sm:w-5 sm:h-5 transition ${
                theme === 'dark' 
                  ? 'text-[#c5ddd2] group-hover:text-[#3aa885]' 
                  : 'text-[#1a332a] group-hover:text-[#2d8f6f]'
              }`} />
              <span className="absolute -top-0.5 -right-0.5 bg-[#2d8f6f] text-white text-[10px] font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center shadow-lg">
                0
              </span>
            </motion.button>

            {/* دکمه منوی موبایل */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-[#2d8f6f]/20 transition relative"
            >
              {isOpen ? (
                <X className={`w-5 h-5 sm:w-6 sm:h-6 ${
                  theme === 'dark' ? 'text-[#c5ddd2]' : 'text-[#1a332a]'
                }`} />
              ) : (
                <Menu className={`w-5 h-5 sm:w-6 sm:h-6 ${
                  theme === 'dark' ? 'text-[#c5ddd2]' : 'text-[#1a332a]'
                }`} />
              )}
            </motion.button>
          </div>
        </div>

        {/* منوی موبایل */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden mt-3 overflow-hidden"
            >
              <div className={`flex flex-col gap-1 py-3 border-t rounded-xl shadow-2xl ${
                theme === 'dark'
                  ? 'bg-[#0d1f18] border-[#2a4a3d]/30'
                  : 'bg-[#f0f7f4] border-[#d0e0d9]/30'
              }`}>
                {navItems.map((item, index) => {
                  const active = isActive(item.href);
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: language === 'fa' ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition font-medium group ${
                          active
                            ? theme === 'dark'
                              ? 'bg-[#3aa885]/20 text-[#3aa885]'
                              : 'bg-[#2d8f6f]/20 text-[#2d8f6f]'
                            : theme === 'dark'
                              ? 'text-[#c5ddd2] hover:bg-[#3aa885]/20 hover:text-[#3aa885]'
                              : 'text-[#1a332a] hover:bg-[#2d8f6f]/20 hover:text-[#2d8f6f]'
                        }`}
                      >
                        <span
                          className={`w-1 h-1 rounded-full transition ${
                            theme === 'dark' ? 'bg-[#3aa885]' : 'bg-[#2d8f6f]'
                          } ${active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                        />
                        {item.name}
                        <Leaf
                          className={`w-3 h-3 ml-auto transition ${
                            theme === 'dark' ? 'text-[#3aa885]' : 'text-[#2d8f6f]'
                          } ${active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
                
                {/* گزینه زبان در منوی موبایل */}
                <div className={`mt-2 px-4 pt-2 border-t ${
                  theme === 'dark' ? 'border-[#2a4a3d]/30' : 'border-[#d0e0d9]/30'
                }`}>
                  <button
                    onClick={() => {
                      setLanguage(language === 'fa' ? 'en' : 'fa');
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-2 text-sm transition w-full py-2 ${
                      theme === 'dark' 
                        ? 'text-[#8aafa0] hover:text-[#3aa885]' 
                        : 'text-[#4a6b5e] hover:text-[#2d8f6f]'
                    }`}
                  >
                    <Globe className="w-4 h-4" />
                    <span>{language === 'fa' ? 'English' : 'فارسی'}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}