'use client';

import { motion } from 'framer-motion';
import { useApp } from '@/contexts/AppContext';
import { Leaf, Shield, Users, Coffee, Truck, Heart, Award, Globe } from 'lucide-react';

export default function AboutContent() {
  const { language, theme } = useApp();

  const content = {
    fa: {
      title: 'درباره ما',
      subtitle: 'سفری به دنیای اصیل چای‌های سبز و قرمز',
      story: {
        title: 'داستان چای خانه',
        text1: 'چای خانه در دل کوهستان‌های سرسبز شمال ایران متولد شد؛ جایی که عطر چای تازه با نسیم صبحگاهی آمیخته می‌شود. ما با عشق به فرهنگ چای و اشتیاق به ارائه بهترین‌ها، مسیری را آغاز کردیم که هر فنجان آن، داستانی از اصالت و کیفیت را روایت می‌کند.',
        text2: 'از نخستین روزها، چای خانه را با هدفی فراتر از یک فروشگاه چای بنا نهادیم. ما به دنبال خلق تجربه‌ای هستیم که هر جرعه آن، شما را به مزارع سرسبز چای در ژاپن، دشت‌های هند، کوهستان‌های چین و باغ‌های معطر تایوان ببرد. هر برگ چای با دقتی وسواس‌گونه انتخاب می‌شود تا اصیل‌ترین طعم‌ها را به فنجان شما هدیه دهد.',
        text3: 'در چای خانه، ما به هنر چای‌نوشی به عنوان یک آیین آرامش‌بخش نگاه می‌کنیم. هر فنجان چای، فرصتی برای مکث، تفکر و لذت بردن از لحظات ناب زندگی است. این همان چیزی است که ما را به مسیری که در آن قدم گذاشته‌ایم، عاشق کرده است.',
      },
      mission: {
        title: 'چشم‌انداز و رسالت',
        text1: 'چشم‌انداز ما خلق جهانی است که در آن هر فنجان چای، پلی باشد به سوی آرامش، سلامتی و ارتباطی عمیق‌تر با طبیعت. ما در چای خانه به دنبال ترویج فرهنگ چای‌نوشی به عنوان یک سبک زندگی سالم و اصیل هستیم.',
        text2: 'رسالت ما فراتر از ارائه چای‌های با کیفیت است. ما متعهد هستیم که با هر برگ چای، داستانی از پایداری، احترام به محیط زیست و حمایت از کشاورزان محلی را روایت کنیم. چای‌های ما نه تنها طعمی بی‌نظیر دارند، بلکه نمایانگر تعهد ما به جهانی بهتر هستند.',
        text3: 'ما باور داریم که چای می‌تواند فراتر از یک نوشیدنی باشد؛ می‌تواند الهام‌بخش لحظاتی از تفکر، خلاقیت و ارتباطات انسانی باشد. به همین دلیل است که هر روز با عشق و تعهد به دنبال بهترین‌ها برای شما هستیم.',
      },
      values: {
        title: 'ارزش‌های بنیادین ما',
        items: [
          {
            icon: Leaf,
            title: 'کیفیت بی‌نظیر',
            desc: 'انتخاب دقیق برگ‌های چای از مرغوب‌ترین مزارع جهان با بالاترین استانداردها',
            color: 'emerald',
          },
          {
            icon: Shield,
            title: 'اصالت و خلوص',
            desc: 'چای‌های کاملاً طبیعی و ارگانیک، عاری از هرگونه افزودنی و مواد مصنوعی',
            color: 'blue',
          },
          {
            icon: Users,
            title: 'تعهد به مشتری',
            desc: 'ارائه تجربه‌ای فراتر از انتظار با تمرکز بر نیازها و سلیقه‌های شما',
            color: 'amber',
          },
          {
            icon: Coffee,
            title: 'دانش و تخصص',
            desc: 'تیمی از متخصصان چای با دانش عمیق و عشق به هنر چای‌نوشی',
            color: 'purple',
          },
          {
            icon: Truck,
            title: 'تعهد و اعتماد',
            desc: 'ارسال سریع و مطمئن با بسته‌بندی حرفه‌ای و حفظ کیفیت محصولات',
            color: 'rose',
          },
          {
            icon: Heart,
            title: 'عشق به چای',
            desc: 'ما عاشق چای هستیم و این عشق را با هر برگ و هر فنجان به شما منتقل می‌کنیم',
            color: 'red',
          },
          {
            icon: Award,
            title: 'پایداری و مسئولیت',
            desc: 'تعهد به محیط زیست، حمایت از کشاورزان محلی و تولید پایدار',
            color: 'teal',
          },
          {
            icon: Globe,
            title: 'ارتباط با جهان',
            desc: 'پل زدن بین فرهنگ‌ها از طریق هنر چای‌نوشی و معرفی اصیل‌ترین طعم‌ها',
            color: 'indigo',
          },
        ],
      },
      team: {
        title: 'تیم ما؛ عاشقان چای',
        text: 'در قلب چای خانه، تیمی از عاشقان واقعی چای قرار دارد. افرادی که هر روز با شور و اشتیاق، از مزارع چای تا فنجان شما را همراهی می‌کنند. ما باور داریم که هر برگ چای داستانی برای گفتن دارد و ما افتخار می‌کنیم که راوی آن داستان‌ها هستیم. تیم ما متشکل از کارشناسان چای، طراحان طعم و عاشقانی است که هدفشان خلق لحظاتی ناب و به‌یادماندنی برای شماست.',
      },
      cta: {
        title: 'به خانواده بزرگ چای خانه بپیوندید',
        text: 'ما را در این سفر پرمعنا همراهی کنید و هر روز را با عطر و طعم چای‌های اصیل، زیباتر کنید.',
      },
    },
    en: {
      title: 'About Us',
      subtitle: 'A Journey to the Authentic World of Green & Red Teas',
      story: {
        title: 'The Story of Tea House',
        text1: 'Tea House was born in the heart of the lush green mountains of northern Iran, where the aroma of fresh tea blends with the morning breeze. With a love for tea culture and a passion for delivering the finest, we began a journey where every cup tells a story of authenticity and quality.',
        text2: 'From the very first days, we established Tea House with a purpose beyond being just a tea shop. We seek to create an experience that takes you to the lush tea fields of Japan, the plains of India, the mountains of China, and the fragrant gardens of Taiwan with every sip. Each tea leaf is meticulously selected to deliver the most authentic flavors to your cup.',
        text3: 'At Tea House, we view the art of tea drinking as a ritual of relaxation and mindfulness. Every cup of tea is an opportunity to pause, reflect, and savor life\'s precious moments. This is what has made us fall in love with the path we have chosen.',
      },
      mission: {
        title: 'Vision & Mission',
        text1: 'Our vision is to create a world where every cup of tea serves as a bridge to tranquility, health, and a deeper connection with nature. At Tea House, we seek to promote tea drinking as a healthy and authentic lifestyle.',
        text2: 'Our mission goes beyond providing quality teas. We are committed to telling a story of sustainability, environmental respect, and support for local farmers with every tea leaf. Our teas not only offer exceptional flavor but also represent our commitment to a better world.',
        text3: 'We believe that tea can be more than just a beverage; it can inspire moments of reflection, creativity, and human connection. That is why we pursue the best for you every day with love and dedication.',
      },
      values: {
        title: 'Our Core Values',
        items: [
          {
            icon: Leaf,
            title: 'Uncompromising Quality',
            desc: 'Carefully selected tea leaves from the world\'s finest gardens with the highest standards',
            color: 'emerald',
          },
          {
            icon: Shield,
            title: 'Authenticity & Purity',
            desc: 'Completely natural and organic teas, free from any additives and artificial substances',
            color: 'blue',
          },
          {
            icon: Users,
            title: 'Customer Commitment',
            desc: 'Delivering an experience beyond expectations with focus on your needs and preferences',
            color: 'amber',
          },
          {
            icon: Coffee,
            title: 'Expertise & Passion',
            desc: 'A team of tea specialists with deep knowledge and love for the art of tea drinking',
            color: 'purple',
          },
          {
            icon: Truck,
            title: 'Trust & Reliability',
            desc: 'Fast and secure delivery with professional packaging that preserves product quality',
            color: 'rose',
          },
          {
            icon: Heart,
            title: 'Passion for Tea',
            desc: 'We love tea and share this love with you through every leaf and every cup',
            color: 'red',
          },
          {
            icon: Award,
            title: 'Sustainability & Responsibility',
            desc: 'Commitment to the environment, supporting local farmers, and sustainable production',
            color: 'teal',
          },
          {
            icon: Globe,
            title: 'Global Connection',
            desc: 'Bridging cultures through the art of tea drinking and introducing the most authentic flavors',
            color: 'indigo',
          },
        ],
      },
      team: {
        title: 'Our Team; Tea Lovers',
        text: 'At the heart of Tea House is a team of true tea enthusiasts. People who accompany you every day with passion and dedication, from tea gardens to your cup. We believe that every tea leaf has a story to tell, and we are proud to be the narrators of those stories. Our team consists of tea experts, flavor designers, and lovers whose goal is to create pure and memorable moments for you.',
      },
      cta: {
        title: 'Join the Tea House Family',
        text: 'Join us on this meaningful journey and make every day more beautiful with the aroma and flavor of authentic teas.',
      },
    },
  };

  const c = content[language];

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
          {c.title}
        </h1>
        <p className={`text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {c.subtitle}
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
              {c.story.title}
            </h2>
          </div>
          <div className="space-y-4 text-base sm:text-lg leading-relaxed">
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              {c.story.text1}
            </p>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              {c.story.text2}
            </p>
            <p className={`italic ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {c.story.text3}
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
              {c.mission.title}
            </h2>
          </div>
          <div className="space-y-4 text-base sm:text-lg leading-relaxed">
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              {c.mission.text1}
            </p>
            <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
              {c.mission.text2}
            </p>
            <p className={`italic ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {c.mission.text3}
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
            {c.values.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-green-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {c.values.items.map((item, index) => {
            const colors = getColorClasses(item.color);
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group p-6 rounded-2xl text-center transition-all duration-500 ${colors.bg} border ${colors.border} ${colors.hover} hover:scale-[1.02] hover:shadow-xl`}
              >
                <div className={`inline-flex p-3 rounded-xl mb-4 transition-all duration-300 group-hover:scale-110 ${colors.bg} border ${colors.border}`}>
                  <item.icon className={`w-7 h-7 ${colors.icon}`} />
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
              {c.team.title}
            </h2>
            <div className="w-12 h-0.5 bg-gradient-to-l from-emerald-400 to-green-400" />
          </div>
          <p className={`text-base sm:text-lg leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {c.team.text}
          </p>
        </div>
      </motion.div>

      {/* CTA بدون دکمه */}
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
          {c.cta.title}
        </h3>
        <p className={`text-base sm:text-lg max-w-2xl mx-auto ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {c.cta.text}
        </p>
      </motion.div>
    </motion.div>
  );
}