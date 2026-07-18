'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'fa' | 'en';
type Theme = 'light' | 'dark';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  dir: 'rtl' | 'ltr';
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fa');
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // بارگذاری تنظیمات ذخیره شده
  useEffect(() => {
    setMounted(true);
    try {
      const savedLang = localStorage.getItem('language') as Language;
      const savedTheme = localStorage.getItem('theme') as Theme;
      
      if (savedLang) setLanguage(savedLang);
      
      // بررسی تم سیستم اگر تم ذخیره شده وجود نداشته باشد
      if (savedTheme) {
        setTheme(savedTheme);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      }
    } catch (error) {
      console.error('Error loading preferences:', error);
    }
  }, []);

  // ذخیره تنظیمات و اعمال تم
  useEffect(() => {
    if (!mounted) return;
    
    try {
      localStorage.setItem('theme', theme);
      localStorage.setItem('language', language);
      
      // اعمال تم به المان html
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (error) {
      console.error('Error saving preferences:', error);
    }
  }, [theme, language, mounted]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const setLanguageHandler = (lang: Language) => {
    setLanguage(lang);
    try {
      localStorage.setItem('language', lang);
    } catch (error) {
      console.error('Error saving language:', error);
    }
  };

  const dir = language === 'fa' ? 'rtl' : 'ltr';

  return (
    <AppContext.Provider value={{ 
      language, 
      setLanguage: setLanguageHandler, 
      theme, 
      toggleTheme, 
      dir 
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}