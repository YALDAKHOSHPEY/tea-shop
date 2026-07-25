'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useApp } from '@/contexts/AppContext';
import { getHero } from '@/i18n';

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme, language, dir } = useApp();
  const [mounted, setMounted] = useState(false);
  
  // دریافت ترجمه از فایل JSON
  const content = getHero(language);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!mounted) return null;

  const getHeroBackground = () => {
    if (theme === 'dark') {
      return 'bg-gradient-to-b from-gray-900 via-black to-gray-900';
    }
    return 'bg-gradient-to-b from-[#c8e6c9] via-[#dcedc8] to-[#c8e6c9]';
  };

  const getSteamColor = (type: 'main' | 'secondary' | 'dense' | 'wisp') => {
    if (theme === 'dark') {
      switch(type) {
        case 'main':
          return 'radial-gradient(ellipse at center, rgba(255,255,255,0.6) 0%, rgba(167,243,208,0.2) 35%, transparent 65%)';
        case 'secondary':
          return 'radial-gradient(ellipse at center, rgba(167,243,208,0.25) 0%, rgba(255,255,255,0.15) 30%, transparent 60%)';
        case 'dense':
          return 'radial-gradient(ellipse at center, rgba(255,255,255,0.35) 0%, rgba(167,243,208,0.15) 25%, transparent 55%)';
        case 'wisp':
          return 'radial-gradient(ellipse at center, rgba(167,243,208,0.3) 0%, rgba(255,255,255,0.1) 30%, transparent 60%)';
      }
    } else {
      switch(type) {
        case 'main':
          return 'radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, rgba(220,240,230,0.6) 35%, rgba(200,230,220,0.3) 60%, transparent 80%)';
        case 'secondary':
          return 'radial-gradient(ellipse at center, rgba(255,255,255,0.8) 0%, rgba(210,235,225,0.5) 30%, rgba(190,225,215,0.25) 55%, transparent 75%)';
        case 'dense':
          return 'radial-gradient(ellipse at center, rgba(255,255,255,0.85) 0%, rgba(215,238,228,0.55) 25%, rgba(195,228,218,0.3) 50%, transparent 70%)';
        case 'wisp':
          return 'radial-gradient(ellipse at center, rgba(255,255,255,0.8) 0%, rgba(205,232,222,0.45) 30%, rgba(185,222,212,0.25) 55%, transparent 75%)';
      }
    }
  };

  return (
    <section 
      className={`relative min-h-screen flex items-center overflow-hidden ${getHeroBackground()} transition-colors duration-300`}
      dir={dir}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className={`absolute w-[600px] h-[600px] rounded-full blur-3xl ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20' 
              : 'bg-gradient-to-r from-emerald-500/15 to-teal-500/15'
          }`}
          style={{ left: '-10%', top: '-20%' }}
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "tween", ease: "easeOut" }}
        />
        
        <motion.div 
          className={`absolute w-[500px] h-[500px] rounded-full blur-3xl ${
            theme === 'dark' 
              ? 'bg-gradient-to-l from-green-500/15 to-emerald-500/15' 
              : 'bg-gradient-to-l from-green-500/12 to-emerald-500/12'
          }`}
          style={{ right: '-10%', bottom: '-20%' }}
          animate={{
            x: mousePosition.x * -0.02,
            y: mousePosition.y * -0.02,
          }}
          transition={{ type: "tween", ease: "easeOut" }}
        />

        <motion.div 
          className={`absolute w-[400px] h-[400px] rounded-full blur-3xl ${
            theme === 'dark' 
              ? 'bg-gradient-to-tr from-emerald-400/10 to-teal-400/10' 
              : 'bg-gradient-to-tr from-emerald-400/10 to-teal-400/10'
          }`}
          style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
          animate={{
            x: mousePosition.x * 0.015,
            y: mousePosition.y * 0.015,
          }}
          transition={{ type: "tween", ease: "easeOut" }}
        />

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`leaf-${i}`}
            className={`absolute text-2xl ${
              theme === 'dark' ? 'opacity-10' : 'opacity-8'
            }`}
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              rotate: Math.random() * 360,
            }}
            animate={{
              y: [null, -40, 40, -30, 30, -40],
              rotate: [0, 180, 360],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {['🍃', '🌿', '🍵', '🌱'][i % 4]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center min-h-screen py-12 sm:py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, x: language === 'fa' ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
            className="order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight ${
                theme === 'dark' ? 'text-white' : 'text-[#1b3a1b]'
              }`}
            >
              <span className={`${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-emerald-400 via-green-400 to-amber-400'
                  : 'bg-gradient-to-r from-emerald-700 via-green-700 to-amber-700'
              } bg-clip-text text-transparent`}>
                {content.title}
                <br />
                <span className={`${theme === 'dark' ? 'text-white' : 'text-[#1b3a1b]'}`}>
                  {content.titleHighlight}
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-sm sm:text-base md:text-lg mb-4 sm:mb-6 md:mb-8 leading-relaxed max-w-lg ${
                theme === 'dark' ? 'text-gray-300' : 'text-[#1b3a1b]'
              }`}
            >
              {content.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-2 sm:gap-3 md:gap-4"
            >
              <button className={`px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-sm sm:text-base ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:shadow-lg hover:shadow-emerald-500/25'
                  : 'bg-gradient-to-r from-emerald-700 to-green-700 text-white hover:shadow-lg hover:shadow-emerald-700/30'
              }`}>
                {content.cta}
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={language === 'fa' ? "M13 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
                </svg>
              </button>
              <button className={`px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 backdrop-blur-sm rounded-full font-semibold transition-all duration-300 border text-sm sm:text-base ${
                theme === 'dark'
                  ? 'bg-white/10 text-white hover:bg-white/20 border-white/20'
                  : 'bg-white/40 text-[#1b3a1b] hover:bg-white/60 border-[#1b3a1b]/30'
              }`}>
                {content.cta2}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className={`flex flex-wrap gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 md:pt-8 border-t ${
                theme === 'dark' ? 'border-gray-700' : 'border-[#a5d6a7]'
              }`}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl">🌿</span>
                <div>
                  <div className={`text-xs sm:text-sm font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-[#1b3a1b]'
                  }`}>{content.feature1}</div>
                  <div className={`text-[10px] sm:text-xs ${
                    theme === 'dark' ? 'text-gray-400' : 'text-[#1b3a1b]'
                  }`}>{content.feature1Desc}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl">🏔️</span>
                <div>
                  <div className={`text-xs sm:text-sm font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-[#1b3a1b]'
                  }`}>{content.feature2}</div>
                  <div className={`text-[10px] sm:text-xs ${
                    theme === 'dark' ? 'text-gray-400' : 'text-[#1b3a1b]'
                  }`}>{content.feature2Desc}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: 'spring', delay: 0.3 }}
            className="relative flex justify-center items-center order-1 lg:order-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96">
              {/* بخار چای */}
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={`steam-main-${i}`}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: 4 + (i % 4) * 6,
                    height: 15 + (i % 5) * 15,
                    left: 25 + i * 5 + (i % 3) * 2 + '%',
                    top: '30%',
                    background: getSteamColor('main'),
                    filter: `blur(${6 + (i % 3)}px)`,
                    zIndex: 20,
                    boxShadow: theme === 'dark' ? 'none' : '0 0 40px rgba(255,255,255,0.08)',
                  }}
                  animate={{
                    y: [10, -60 - (i % 4) * 15],
                    opacity: [0, theme === 'dark' ? 0.6 : 0.75, theme === 'dark' ? 0.4 : 0.55, 0.1],
                    scale: [0.3, 1.5 + (i % 3) * 0.5],
                    x: [0, (i % 2 === 0 ? 1 : -1) * (3 + (i % 4) * 3)],
                  }}
                  transition={{
                    duration: 2 + (i % 3) * 0.3,
                    delay: i * 0.15,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                />
              ))}

              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`steam-secondary-${i}`}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: 6 + (i % 4) * 8,
                    height: 20 + (i % 6) * 18,
                    left: 20 + i * 7 + (i % 2) * 3 + '%',
                    top: '35%',
                    background: getSteamColor('secondary'),
                    filter: `blur(${10 + (i % 4)}px)`,
                    zIndex: 19,
                    boxShadow: theme === 'dark' ? 'none' : '0 0 30px rgba(255,255,255,0.06)',
                  }}
                  animate={{
                    y: [8, -70 - (i % 5) * 20],
                    opacity: [0, theme === 'dark' ? 0.4 : 0.6, theme === 'dark' ? 0.3 : 0.45, 0.05],
                    scale: [0.4, 2 + (i % 3) * 0.6],
                    x: [0, (i % 2 === 0 ? -1 : 1) * (5 + (i % 4) * 4)],
                  }}
                  transition={{
                    duration: 2.5 + (i % 4) * 0.2,
                    delay: i * 0.18 + 0.3,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                />
              ))}

              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`steam-dense-${i}`}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: 10 + (i % 3) * 12,
                    height: 25 + (i % 5) * 22,
                    left: 30 + i * 6 + (i % 3) * 2 + '%',
                    top: '25%',
                    background: getSteamColor('dense'),
                    filter: `blur(${8 + (i % 3)}px)`,
                    zIndex: 21,
                    boxShadow: theme === 'dark' ? 'none' : '0 0 50px rgba(255,255,255,0.07)',
                  }}
                  animate={{
                    y: [5, -80 - (i % 4) * 25],
                    opacity: [0, theme === 'dark' ? 0.5 : 0.65, theme === 'dark' ? 0.3 : 0.45, 0],
                    scale: [0.5, 2.2 + (i % 3) * 0.8],
                    x: [0, (i % 2 === 0 ? 1 : -1) * (6 + (i % 4) * 5)],
                  }}
                  transition={{
                    duration: 2.8 + (i % 3) * 0.4,
                    delay: i * 0.2 + 0.5,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                />
              ))}

              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={`steam-wisp-${i}`}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: 3 + (i % 3) * 4,
                    height: 12 + (i % 4) * 10,
                    left: 30 + i * 8 + '%',
                    top: '40%',
                    background: getSteamColor('wisp'),
                    filter: `blur(${5 + (i % 2)}px)`,
                    zIndex: 22,
                    boxShadow: theme === 'dark' ? 'none' : '0 0 20px rgba(255,255,255,0.05)',
                  }}
                  animate={{
                    y: [3, -50 - (i % 3) * 10],
                    opacity: [0, theme === 'dark' ? 0.4 : 0.55, theme === 'dark' ? 0.2 : 0.35, 0],
                    scale: [0.2, 1.2 + (i % 2) * 0.3],
                    x: [0, (i % 2 === 0 ? -1 : 1) * (2 + (i % 3) * 2)],
                  }}
                  transition={{
                    duration: 1.8 + (i % 2) * 0.2,
                    delay: i * 0.12 + 0.8,
                    repeat: Infinity,
                    ease: 'easeOut',
                  }}
                />
              ))}

              {/* تصویر فنجان */}
              <div className="relative w-full h-full">
                <Image
                  src="/images/cup.png"
                  alt="Premium tea cup with rising steam"
                  fill
                  sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* هاله پشت فنجان */}
              <div className={`absolute inset-0 rounded-full blur-2xl -z-10 ${
                theme === 'dark' ? 'bg-emerald-500/5' : 'bg-emerald-600/10'
              }`}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}