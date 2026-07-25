// src/i18n/index.ts

import fa from './locales/fa.json';
import en from './locales/en.json';

export const translations = {
  fa,
  en,
};

export type Language = keyof typeof translations;

// ========== توابع کمکی برای هر بخش ==========
export const getNav = (lang: Language) => translations[lang].nav;
export const getHero = (lang: Language) => translations[lang].hero;
export const getFooter = (lang: Language) => translations[lang].footer;
export const getAbout = (lang: Language) => translations[lang].about;
export const getContact = (lang: Language) => translations[lang].contact;

// ========== تابع عمومی برای دریافت هر ترجمه ==========
export function getTranslation(lang: Language, path: string): string {
  const keys = path.split('.');
  let result: any = translations[lang];
  
  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key];
    } else {
      return path;
    }
  }
  
  return typeof result === 'string' ? result : path;
}

export default translations;