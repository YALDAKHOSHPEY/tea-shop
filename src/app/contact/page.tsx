// E:\tea\src\app\contact\page.tsx
'use client';

import { useState, useEffect } from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaWhatsapp, 
  FaTelegram, 
  FaInstagram,
  FaCheckCircle,
  FaExclamationCircle,
  FaPaperPlane,
  FaUser,
  FaRegBuilding,
  FaArrowUp
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/contexts/AppContext';
import { getContact } from '@/i18n';

export default function ContactPage() {
  const { language, theme, dir } = useApp();
  const t = getContact(language);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // مدیریت اسکرول
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // اعتبارسنجی
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const e = t.errors;
    
    if (!formData.name.trim()) {
      newErrors.name = e.nameRequired;
    } else if (formData.name.trim().length < 3) {
      newErrors.name = e.nameMin;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = e.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = e.emailInvalid;
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = e.subjectRequired;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = e.messageRequired;
    } else if (formData.message.trim().length < 15) {
      newErrors.message = e.messageMin;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 6000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      title: t.address,
      details: t.addressDetail,
      link: null,
      gradient: 'from-red-500 to-orange-500'
    },
    {
      icon: <FaPhone className="w-5 h-5" />,
      title: t.phone,
      details: t.phoneDetail,
      link: 'tel:+982112345678',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      title: t.email,
      details: t.emailDetail,
      link: 'mailto:contact@teashop.com',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaClock className="w-5 h-5" />,
      title: t.hours,
      details: t.hoursDetail,
      link: null,
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const socialLinks = [
    { 
      icon: <FaWhatsapp className="w-6 h-6" />, 
      href: 'https://wa.me/989123456789', 
      label: 'WhatsApp',
      gradient: 'from-green-500 to-emerald-500'
    },
    { 
      icon: <FaTelegram className="w-6 h-6" />, 
      href: 'https://t.me/teashop', 
      label: 'Telegram',
      gradient: 'from-blue-500 to-sky-500'
    },
    { 
      icon: <FaInstagram className="w-6 h-6" />, 
      href: 'https://instagram.com/teashop', 
      label: 'Instagram',
      gradient: 'from-pink-500 to-purple-500'
    }
  ];

  // استایل‌های تم
  const getBgColor = () => {
    return theme === 'dark'
      ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
      : 'bg-gradient-to-br from-gray-50 via-white to-gray-50';
  };

  const getCardBg = () => {
    return theme === 'dark'
      ? 'bg-gray-800/80 backdrop-blur-sm border-gray-700/50 shadow-gray-900/50'
      : 'bg-white/80 backdrop-blur-sm border-gray-100/50 shadow-gray-200/50';
  };

  const getTextColor = () => {
    return theme === 'dark' ? 'text-white' : 'text-gray-800';
  };

  const getSubTextColor = () => {
    return theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  };

  const getInputBg = () => {
    return theme === 'dark'
      ? 'bg-gray-900/50 focus:bg-gray-900 border-gray-700 focus:border-green-500 focus:ring-green-900/30'
      : 'bg-gray-50/50 focus:bg-white border-gray-200 focus:border-green-500 focus:ring-green-200';
  };

  return (
    <div className={`min-h-screen pt-20 ${getBgColor()} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* هدر صفحه */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mb-12 sm:mb-16 lg:mb-20"
        >
          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${getTextColor()} mb-3`}>
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h1>
          
          <p className={`text-base sm:text-lg ${getSubTextColor()} max-w-2xl leading-relaxed`}>
            {t.subtitle}
          </p>
          
          <div className="absolute bottom-0 left-0 w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mt-4"></div>
        </motion.div>

        {/* محتوای اصلی */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8`}>
          
          {/* سایدبار */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* اطلاعات تماس */}
            <div className={`rounded-3xl shadow-xl p-6 sm:p-7 border ${getCardBg()} transition-all duration-300 hover:shadow-2xl`}>
              <h2 className={`text-lg font-bold ${getTextColor()} mb-6 flex items-center gap-2`}>
                <span className="w-1 h-6 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></span>
                {t.contactTitle}
              </h2>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: dir === 'rtl' ? -10 : 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-200 cursor-default"
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${info.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        {info.title}
                      </p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className={`text-sm sm:text-base font-medium ${getTextColor()} hover:text-green-600 dark:hover:text-green-400 transition-colors block truncate`}
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className={`text-sm sm:text-base font-medium ${getTextColor()}`}>
                          {info.details}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* شبکه‌های اجتماعی */}
            <div className={`rounded-3xl shadow-xl p-6 sm:p-7 border ${getCardBg()}`}>
              <h3 className={`text-sm font-bold ${getTextColor()} mb-4 flex items-center gap-2`}>
                <span className="w-1 h-5 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></span>
                {t.socialTitle}
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 min-w-[60px] sm:min-w-[80px] p-3 rounded-2xl bg-gradient-to-br ${social.gradient} text-white flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    {social.icon}
                    <span className="text-xs font-medium hidden sm:inline">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* نقشه */}
            <div className={`rounded-3xl shadow-xl p-6 sm:p-7 border ${getCardBg()}`}>
              <h3 className={`text-sm font-bold ${getTextColor()} mb-3 flex items-center gap-2`}>
                <span className="w-1 h-5 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></span>
                {t.mapTitle}
              </h3>
              <div className="w-full h-48 sm:h-56 rounded-2xl overflow-hidden shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2592.123456789!2d51.3890!3d35.6892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQxJzIxLjEiTiA1McKwMjMnMjAuNCJF!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="موقعیت فروشگاه"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* فرم */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className={`rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 border ${getCardBg()}`}>
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <h2 className={`text-xl sm:text-2xl font-bold ${getTextColor()} flex items-center gap-2`}>
                  <span className="w-1 h-7 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></span>
                  {t.formTitle}
                </h2>
                <span className="text-xs text-gray-400 dark:text-gray-500">{t.required}</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                {/* نام و ایمیل */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className={`block text-sm font-semibold ${getSubTextColor()} mb-2 flex items-center gap-2`}>
                      <FaUser className="text-green-500 w-4 h-4" />
                      {t.name} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-2xl border-2 transition-all duration-200 outline-none ${getInputBg()} ${
                        errors.name 
                          ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900/30' 
                          : 'focus:border-green-500 focus:ring-4 focus:ring-green-200 dark:focus:ring-green-900/30'
                      } text-gray-800 dark:text-white`}
                      placeholder={t.namePlaceholder}
                    />
                    {errors.name && (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-xs sm:text-sm mt-1.5 flex items-center gap-1"
                      >
                        <FaExclamationCircle className="w-3 h-3 flex-shrink-0" />
                        {errors.name}
                      </motion.p>
                    )}
                  </div>

                  <div>
                    <label className={`block text-sm font-semibold ${getSubTextColor()} mb-2 flex items-center gap-2`}>
                      <FaEnvelope className="text-green-500 w-4 h-4" />
                      {t.emailLabel} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-2xl border-2 transition-all duration-200 outline-none ${getInputBg()} ${
                        errors.email 
                          ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900/30' 
                          : 'focus:border-green-500 focus:ring-4 focus:ring-green-200 dark:focus:ring-green-900/30'
                      } text-gray-800 dark:text-white`}
                      placeholder={t.emailPlaceholder}
                    />
                    {errors.email && (
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-500 text-xs sm:text-sm mt-1.5 flex items-center gap-1"
                      >
                        <FaExclamationCircle className="w-3 h-3 flex-shrink-0" />
                        {errors.email}
                      </motion.p>
                    )}
                  </div>
                </div>

                {/* موضوع */}
                <div>
                  <label className={`block text-sm font-semibold ${getSubTextColor()} mb-2 flex items-center gap-2`}>
                    <FaRegBuilding className="text-green-500 w-4 h-4" />
                    {t.subjectLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-2xl border-2 transition-all duration-200 outline-none ${getInputBg()} ${
                      errors.subject 
                        ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900/30' 
                        : 'focus:border-green-500 focus:ring-4 focus:ring-green-200 dark:focus:ring-green-900/30'
                    } text-gray-800 dark:text-white`}
                    placeholder={t.subjectPlaceholder}
                  />
                  {errors.subject && (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-500 text-xs sm:text-sm mt-1.5 flex items-center gap-1"
                    >
                      <FaExclamationCircle className="w-3 h-3 flex-shrink-0" />
                      {errors.subject}
                    </motion.p>
                  )}
                </div>

                {/* پیام */}
                <div>
                  <label className={`block text-sm font-semibold ${getSubTextColor()} mb-2`}>
                    {t.messageLabel} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-2xl border-2 transition-all duration-200 outline-none ${getInputBg()} ${
                      errors.message 
                        ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-200 dark:focus:ring-red-900/30' 
                        : 'focus:border-green-500 focus:ring-4 focus:ring-green-200 dark:focus:ring-green-900/30'
                    } text-gray-800 dark:text-white resize-none`}
                    placeholder={t.messagePlaceholder}
                  />
                  {errors.message && (
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-red-500 text-xs sm:text-sm mt-1.5 flex items-center gap-1"
                    >
                      <FaExclamationCircle className="w-3 h-3 flex-shrink-0" />
                      {errors.message}
                    </motion.p>
                  )}
                </div>

                {/* وضعیت */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-2 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 px-5 py-4 rounded-2xl flex items-center gap-3"
                    >
                      <FaCheckCircle className="w-6 h-6 flex-shrink-0 text-green-500" />
                      <span className="text-sm sm:text-base font-medium">{t.success}</span>
                    </motion.div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/30 dark:to-rose-900/30 border-2 border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 px-5 py-4 rounded-2xl flex items-center gap-3"
                    >
                      <FaExclamationCircle className="w-6 h-6 flex-shrink-0 text-red-500" />
                      <span className="text-sm sm:text-base font-medium">{t.error}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* دکمه ارسال */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white py-4 rounded-2xl font-bold text-base sm:text-lg hover:shadow-xl hover:shadow-green-200/50 dark:hover:shadow-green-900/30 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t.sending}
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="w-5 h-5" />
                        {t.submit}
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* دکمه بازگشت به بالا */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-3.5 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 group ${dir === 'rtl' ? 'left-6 right-auto sm:left-8 sm:right-auto' : ''}`}
            >
              <FaArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}