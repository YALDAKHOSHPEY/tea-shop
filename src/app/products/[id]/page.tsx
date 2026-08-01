import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import ProductDetails from '@/components/features/Products/ProductDetails';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  
  if (!product) {
    return {
      title: 'محصول یافت نشد',
    };
  }

  return {
    title: `${product.name} | Tea House`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20 sm:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <ProductDetails product={product} />
      </div>
    </div>
  );
}