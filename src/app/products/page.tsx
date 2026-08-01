import { Metadata } from 'next';
import ProductGrid from '@/components/features/Products/ProductGrid';

export const metadata: Metadata = {
  title: 'محصولات | Tea House',
  description: 'مجموعه‌ای از بهترین چای‌های سبز و قرمز از سراسر جهان',
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <ProductGrid />
      </div>
    </div>
  );
}