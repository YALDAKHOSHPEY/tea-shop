'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useApp } from '@/contexts/AppContext';
import { getFooter, getNav } from '@/i18n';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { Leaf } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const { language, dir, theme } = useApp();
  
  // دریافت ترجمه‌ها از فایل JSON
  const footer = getFooter(language);
  const nav = getNav(language);

  // دریافت پس‌زمینه فوتر بر اساس تم
  const getFooterBackground = () => {
    return theme === 'dark'
      ? 'bg-gradient-to-br from-[#0d1f18] via-[#152b22] to-[#0d1f18] border-t border-[#2a4a3d]/30'
      : 'bg-gradient-to-br from-[#e8f3ef] via-[#f0f7f4] to-[#e8f3ef] border-t border-[#d0e0d9]/30';
  };

  // دریافت رنگ متن بر اساس تم
  const getTextColor = (type: 'primary' | 'secondary' | 'muted' = 'primary') => {
    if (theme === 'dark') {
      return type === 'primary' 
        ? 'text-[#c5ddd2]' 
        : type === 'secondary' 
          ? 'text-[#8aafa0]' 
          : 'text-[#4a6b5e]';
    }
    return type === 'primary' 
      ? 'text-[#1a332a]' 
      : type === 'secondary' 
        ? 'text-[#4a6b5e]' 
        : 'text-[#8aafa0]';
  };

  // دریافت رنگ اکسانت بر اساس تم
  const getAccentColor = () => {
    return theme === 'dark' ? 'text-[#3aa885]' : 'text-[#2d8f6f]';
  };

  // دریافت رنگ پس‌زمینه دکمه‌ها بر اساس تم
  const getButtonBackground = () => {
    return theme === 'dark'
      ? 'bg-[#3aa885]/20 hover:bg-[#3aa885]/30'
      : 'bg-[#2d8f6f]/10 hover:bg-[#2d8f6f]/20';
  };

  return (
    <footer className={`${getFooterBackground()} text-white dark:text-white relative overflow-hidden transition-colors duration-300`}>
      {/* عناصر تزئینی */}
      <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl ${
        theme === 'dark' ? 'bg-[#3aa885]/10' : 'bg-[#2d8f6f]/10'
      }`} />
      <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl ${
        theme === 'dark' ? 'bg-[#2d8f6f]/10' : 'bg-[#4aad8a]/10'
      }`} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10" dir={dir}>
          {/* بخش برند */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              {/* لوگو */}
              <div className="relative">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-white/90 shadow-lg shadow-[#3aa885]/20' 
                    : 'bg-transparent'
                }`}>
                  <div className="relative w-9 h-9">
                    <Image
                      src="/images/teaalogo.png"
                      alt="Tea House Logo"
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 36px, 44px"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className={`text-2xl font-bold ${getAccentColor()}`}>Tea</h3>
                <span className={`text-xs font-light ${getTextColor('secondary')}`}>House</span>
              </div>
            </div>
            <p className={`${getTextColor('secondary')} leading-relaxed text-sm sm:text-base`}>
              {footer.aboutText}
            </p>
            <div className="flex gap-3 mt-4">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1, y: -2 }}
                className={`${getTextColor('secondary')} transition p-2 rounded-full ${getButtonBackground()}`}
              >
                <FaInstagram className="w-4 h-4" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1, y: -2 }}
                className={`${getTextColor('secondary')} transition p-2 rounded-full ${getButtonBackground()}`}
              >
                <FaTwitter className="w-4 h-4" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1, y: -2 }}
                className={`${getTextColor('secondary')} transition p-2 rounded-full ${getButtonBackground()}`}
              >
                <FaYoutube className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* لینک‌های سریع */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className={`text-lg font-semibold mb-4 ${getAccentColor()} flex items-center gap-2`}>
              <Leaf className="w-4 h-4" />
              {footer.quickLinks}
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: '/products', label: nav.products },
                { href: '/about', label: nav.about },
                { href: '/contact', label: nav.contact },
                { href: '/blog', label: language === 'fa' ? 'وبلاگ' : 'Blog' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${getTextColor('secondary')} hover:${getAccentColor()} transition group flex items-center gap-2`}
                  >
                    <span className={`w-1 h-1 rounded-full ${getAccentColor()} opacity-0 group-hover:opacity-100 transition`} />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* اطلاعات تماس */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className={`text-lg font-semibold mb-4 ${getAccentColor()} flex items-center gap-2`}>
              <FiMail className="w-4 h-4" />
              {footer.contact}
            </h4>
            <ul className="space-y-3.5">
              <li className={`flex items-center gap-3 ${getTextColor('secondary')} group`}>
                <div className={`p-2 rounded-lg transition ${getButtonBackground()}`}>
                  <FiPhone className={`w-4 h-4 ${getAccentColor()}`} />
                </div>
                <span className="text-sm">+98 21 1234 5678</span>
              </li>
              <li className={`flex items-center gap-3 ${getTextColor('secondary')} group`}>
                <div className={`p-2 rounded-lg transition ${getButtonBackground()}`}>
                  <FiMail className={`w-4 h-4 ${getAccentColor()}`} />
                </div>
                <span className="text-sm">info@teahouse.com</span>
              </li>
              <li className={`flex items-center gap-3 ${getTextColor('secondary')} group`}>
                <div className={`p-2 rounded-lg transition ${getButtonBackground()}`}>
                  <FiMapPin className={`w-4 h-4 ${getAccentColor()}`} />
                </div>
                <span className="text-sm">Tehran, Iran</span>
              </li>
            </ul>
          </motion.div>

          {/* خبرنامه */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className={`text-lg font-semibold mb-4 ${getAccentColor()} flex items-center gap-2`}>
              <FiSend className="w-4 h-4" />
              Newsletter
            </h4>
            <p className={`${getTextColor('secondary')} mb-3 text-sm`}>
              {language === 'fa' ? 'برای دریافت تخفیف‌ها عضو شوید' : 'Subscribe for discounts'}
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder={language === 'fa' ? 'ایمیل شما' : 'Your email'}
                className={`flex-1 px-4 py-2.5 rounded-lg border ${getTextColor('primary')} placeholder-${getTextColor('muted')} focus:outline-none focus:border-[#2d8f6f] focus:ring-2 focus:ring-[#2d8f6f]/20 transition text-sm ${
                  theme === 'dark'
                    ? 'bg-[#1a332a]/50 border-[#2a4a3d]/50 text-[#c5ddd2]'
                    : 'bg-[#dce8e3]/50 border-[#d0e0d9]/50 text-[#1a332a]'
                }`}
              />
              <button className={`px-5 py-2.5 rounded-lg transition shadow-lg font-medium text-sm whitespace-nowrap ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-[#3aa885] to-[#2d8f6f] hover:from-[#4aad8a] hover:to-[#3aa885] shadow-[#3aa885]/30 text-white'
                  : 'bg-gradient-to-r from-[#2d8f6f] to-[#4aad8a] hover:from-[#1a6b4f] hover:to-[#2d8f6f] shadow-[#2d8f6f]/30 text-white'
              }`}>
                {language === 'fa' ? 'عضویت' : 'Subscribe'}
              </button>
            </div>
            <p className={`${getTextColor('muted')} text-xs mt-2`}>
              {language === 'fa' ? 'هرزنامه نمی‌فرستیم 😉' : 'No spam, we promise 😉'}
            </p>
          </motion.div>
        </div>

        {/* نوار پایین */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`border-t mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm ${
            theme === 'dark' ? 'border-[#2a4a3d]/30' : 'border-[#d0e0d9]/30'
          } ${getTextColor('muted')}`}
        >
          <p>
            © 2024 Tea House. {footer.copyright}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className={`hover:${getAccentColor()} transition`}>
              {language === 'fa' ? 'حریم خصوصی' : 'Privacy'}
            </Link>
            <Link href="/terms" className={`hover:${getAccentColor()} transition`}>
              {language === 'fa' ? 'شرایط استفاده' : 'Terms'}
            </Link>
            <Link href="/cookies" className={`hover:${getAccentColor()} transition`}>
              {language === 'fa' ? 'کوکی‌ها' : 'Cookies'}
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}