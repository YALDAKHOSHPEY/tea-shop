'use client';

import { motion } from 'framer-motion';
import { useApp } from '@/contexts/AppContext';
import { getAbout } from '@/i18n';
import { Leaf, Shield, Users, Coffee, Truck, Heart, Award, Globe } from 'lucide-react';

export default function AboutContent() {
  const { language, theme } = useApp();
  const t = getAbout(language);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; icon: string; hover: string }> = {
      emerald: {
        bg: theme === 'dark' ? 'bg-emerald-500/10' : 'bg-emerald-50',
        border: theme === 'dark' ? 'border-emerald-500/20' : 'border-emerald-200',
        icon: theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600',
        hover: theme === 'dark' ? 'hover:border-emerald-400/40' : 'hover:border-emerald-400',
      },
      blue: {
        bg: theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-50',
        border: theme === 'dark' ? 'border-blue-500/20' : 'border-blue-200',
        icon: theme === 'dark' ? 'text-blue-400' : 'text-blue-600',
        hover: theme === 'dark' ? 'hover:border-blue-400/40' : 'hover:border-blue-400',
      },
      amber: {
        bg: theme === 'dark' ? 'bg-amber-500/10' : 'bg-amber-50',
        border: theme === 'dark' ? 'border-amber-500/20' : 'border-amber-200',
        icon: theme === 'dark' ? 'text-amber-400' : 'text-amber-600',
        hover: theme === 'dark' ? 'hover:border-amber-400/40' : 'hover:border-amber-400',
      },
      purple: {
        bg: theme === 'dark' ? 'bg-purple-500/10' : 'bg-purple-50',
        border: theme === 'dark' ? 'border-purple-500/20' : 'border-purple-200',
        icon: theme === 'dark' ? 'text-purple-400' : 'text-purple-600',
        hover: theme === 'dark' ? 'hover:border-purple-400/40' : 'hover:border-purple-400',
      },
      rose: {
        bg: theme === 'dark' ? 'bg-rose-500/10' : 'bg-rose-50',
        border: theme === 'dark' ? 'border-rose-500/20' : 'border-rose-200',
        icon: theme === 'dark' ? 'text-rose-400' : 'text-rose-600',
        hover: theme === 'dark' ? 'hover:border-rose-400/40' : 'hover:border-rose-400',
      },
      red: {
        bg: theme === 'dark' ? 'bg-red-500/10' : 'bg-red-50',
        border: theme === 'dark' ? 'border-red-500/20' : 'border-red-200',
        icon: theme === 'dark' ? 'text-red-400' : 'text-red-600',
        hover: theme === 'dark' ? 'hover:border-red-400/40' : 'hover:border-red-400',
      },
      teal: {
        bg: theme === 'dark' ? 'bg-teal-500/10' : 'bg-teal-50',
        border: theme === 'dark' ? 'border-teal-500/20' : 'border-teal-200',
        icon: theme === 'dark' ? 'text-teal-400' : 'text-teal-600',
        hover: theme === 'dark' ? 'hover:border-teal-400/40' : 'hover:border-teal-400',
      },
      indigo: {
        bg: theme === 'dark' ? 'bg-indigo-500/10' : 'bg-indigo-50',
        border: theme === 'dark' ? 'border-indigo-500/20' : 'border-indigo-200',
        icon: theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600',
        hover: theme === 'dark' ? 'hover:border-indigo-400/40' : 'hover:border-indigo-400',
      },
    };
    return colors[color] || colors.emerald;
  };

  // Map آیکون‌ها
  const IconMap: Record<string, any> = {
    Leaf, Shield, Users, Coffee, Truck, Heart, Award, Globe
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-6xl mx-auto"
    >
      {/* هدر صفحه */}
      <motion.div
        variants={itemVariants}
        className="text-center mb-16 sm:mb-20"
      >
        <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 ${
          theme === 'dark' ? 'text-white' : 'text-[#1b3a1b]'
        }`}>
          {t.title}
        </h1>
        <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {t.subtitle}
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto mt-6 rounded-full" />
      </motion.div>

      {/* بخش داستان ما */}
      <motion.div
        variants={itemVariants}
        className={`rounded-3xl p-8 sm:p-10 md:p-12 mb-16 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-[#152b22] to-[#0d1f18] border border-[#2a4a3d]/40'
            : 'bg-white border border-[#d0e0d9]/40 shadow-lg shadow-emerald-500/5'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-emerald-400 to-green-400 rounded-full" />
            <h2 className={`text-3xl sm:text-4xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-[#1b3a1b]'
            }`}>
              {t.story.title}
            </h2>
          </div>
          <div className="space-y-4 text-base sm:text-lg leading-relaxed">
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              {t.story.text1}
            </p>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              {t.story.text2}
            </p>
            <p className={`italic ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {t.story.text3}
            </p>
          </div>
        </div>
      </motion.div>

      {/* چشم‌انداز و رسالت */}
      <motion.div
        variants={itemVariants}
        className={`rounded-3xl p-8 sm:p-10 md:p-12 mb-16 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-[#0d1f18] to-[#152b22] border border-[#2a4a3d]/40'
            : 'bg-gradient-to-br from-emerald-50/50 to-green-50/50 border border-[#d0e0d9]/40 shadow-lg shadow-emerald-500/5'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-emerald-400 to-green-400 rounded-full" />
            <h2 className={`text-3xl sm:text-4xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-[#1b3a1b]'
            }`}>
              {t.mission.title}
            </h2>
          </div>
          <div className="space-y-4 text-base sm:text-lg leading-relaxed">
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              {t.mission.text1}
            </p>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              {t.mission.text2}
            </p>
            <p className={`italic ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {t.mission.text3}
            </p>
          </div>
        </div>
      </motion.div>

      {/* ارزش‌های ما */}
      <motion.div
        variants={itemVariants}
        className="mb-16"
      >
        <div className="text-center mb-10">
          <h2 className={`text-3xl sm:text-4xl font-bold ${
            theme === 'dark' ? 'text-white' : 'text-[#1b3a1b]'
          }`}>
            {t.values.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.values.items.map((item, index) => {
            const colors = getColorClasses(item.color);
            const IconComponent = IconMap[item.icon] || Leaf;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group p-6 rounded-2xl text-center transition-all duration-500 ${colors.bg} border ${colors.border} ${colors.hover} hover:scale-[1.02] hover:shadow-xl`}
              >
                <div className={`inline-flex p-3 rounded-xl mb-4 transition-all duration-300 group-hover:scale-110 ${colors.bg} border ${colors.border}`}>
                  <IconComponent className={`w-7 h-7 ${colors.icon}`} />
                </div>
                <h3 className={`font-bold text-base mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-[#1b3a1b]'
                }`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* تیم ما */}
      <motion.div
        variants={itemVariants}
        className={`rounded-3xl p-8 sm:p-10 md:p-12 mb-16 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-[#152b22] to-[#0d1f18] border border-[#2a4a3d]/40'
            : 'bg-white border border-[#d0e0d9]/40 shadow-lg shadow-emerald-500/5'
        }`}
      >
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-green-400" />
            <h2 className={`text-3xl sm:text-4xl font-bold ${
              theme === 'dark' ? 'text-white' : 'text-[#1b3a1b]'
            }`}>
              {t.team.title}
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-l from-emerald-400 to-green-400" />
          </div>
          <p className={`text-base sm:text-lg leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {t.team.text}
          </p>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        variants={itemVariants}
        className={`rounded-3xl p-10 sm:p-12 text-center ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-emerald-900/20 to-green-900/20 border border-emerald-500/20'
            : 'bg-gradient-to-br from-emerald-100/40 to-green-100/40 border border-emerald-200/50'
        }`}
      >
        <h3 className={`text-2xl sm:text-3xl font-bold mb-3 ${
          theme === 'dark' ? 'text-white' : 'text-[#1b3a1b]'
        }`}>
          {t.cta.title}
        </h3>
        <p className={`text-base sm:text-lg max-w-2xl mx-auto ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {t.cta.text}
        </p>
      </motion.div>
    </motion.div>
  );
}