import { Metadata } from 'next';
import AboutContent from '@/components/features/About/AboutContent';

export const metadata: Metadata = {
  title: 'درباره ما | Tea House',
  description: 'آشنایی با داستان Tea House، تولیدکننده چای‌های سبز و قرمز با کیفیت',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <AboutContent />
      </div>
    </div>
  );
}