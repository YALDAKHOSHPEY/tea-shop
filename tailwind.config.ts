import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Red theme for tea
        red: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        // Gold/Amber theme for premium feel
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Warm brown for tea
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
        // Cream for porcelain
        cream: {
          50: '#fefcf8',
          100: '#fdf8f0',
          200: '#fcf3e8',
          300: '#f9ecdd',
          400: '#f7e5d2',
          500: '#f5dec7',
          600: '#e8d0b8',
          700: '#d4bea6',
          800: '#b8a28e',
          900: '#9a8876',
        },
        // Complementary green for tea leaves
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
      },
      backgroundImage: {
        'tea-gradient': 'linear-gradient(135deg, #fef2f2 0%, #fffbeb 50%, #f0fdf4 100%)',
        'tea-gradient-dark': 'linear-gradient(135deg, #1a1a1a 0%, #2d1810 50%, #1a1a1a 100%)',
      },
      boxShadow: {
        'gold': '0 4px 20px rgba(245, 158, 11, 0.3)',
        'gold-lg': '0 8px 40px rgba(245, 158, 11, 0.4)',
        'gold-xl': '0 12px 60px rgba(245, 158, 11, 0.5)',
        'warm': '0 4px 20px rgba(191, 160, 148, 0.3)',
        'warm-lg': '0 8px 40px rgba(191, 160, 148, 0.4)',
      },
      animation: {
        'steam': 'steam 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ripple': 'ripple 2s ease-in-out infinite',
      },
      keyframes: {
        steam: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0.6' },
          '50%': { transform: 'translateY(-20px) scale(1.2)', opacity: '0.3' },
          '100%': { transform: 'translateY(-40px) scale(1.4)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        ripple: {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;