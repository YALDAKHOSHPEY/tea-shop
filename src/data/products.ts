export interface Product {
  id: string;
  name: string;
  nameFa: string;
  description: string;
  descriptionFa: string;
  price: number;
  category: 'green' | 'red' | 'oolong' | 'herbal';
  image: string;
  stock: number;
  isAvailable: boolean;
  origin: string;
  originFa: string;
  rating: number;
  reviews: number;
  weight: string;
  benefits: string[];
  benefitsFa: string[];
  brewingTemp: string;
  brewingTime: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Jade Green Tea',
    nameFa: 'چای سبز یشم',
    description: 'Premium green tea with a delicate, refreshing taste. Rich in antioxidants that support heart health and boost metabolism.',
    descriptionFa: 'چای سبز درجه یک با طعم لطیف و نشاط‌آور. غنی از آنتی‌اکسیدان‌ها که به سلامت قلب کمک کرده و متابولیسم را افزایش می‌دهد.',
    price: 29.99,
    category: 'green',
    image: '/images/products/green-tea-1.jpg',
    stock: 50,
    isAvailable: true,
    origin: 'Japan',
    originFa: 'ژاپن',
    rating: 4.8,
    reviews: 124,
    weight: '100g',
    benefits: ['Heart Health', 'Boosts Metabolism', 'Rich in Antioxidants'],
    benefitsFa: ['سلامت قلب', 'افزایش متابولیسم', 'غنی از آنتی‌اکسیدان'],
    brewingTemp: '75-80°C',
    brewingTime: '2-3 minutes',
  },
  {
    id: '2',
    name: 'Royal Red Tea',
    nameFa: 'چای قرمز سلطنتی',
    description: 'Rich and full-bodied red tea with a warm, soothing flavor. Perfect for relaxation and stress relief.',
    descriptionFa: 'چای قرمز با طعم گرم و دلپذیر. مناسب برای آرامش و کاهش استرس.',
    price: 34.99,
    category: 'red',
    image: '/images/products/red-tea-1.jpg',
    stock: 35,
    isAvailable: true,
    origin: 'China',
    originFa: 'چین',
    rating: 4.9,
    reviews: 98,
    weight: '100g',
    benefits: ['Stress Relief', 'Improves Digestion', 'Warm and Soothing'],
    benefitsFa: ['کاهش استرس', 'بهبود هضم', 'گرم و آرامش‌بخش'],
    brewingTemp: '90-95°C',
    brewingTime: '3-4 minutes',
  },
  {
    id: '3',
    name: 'Oolong Orchid',
    nameFa: 'اولانگ ارکیده',
    description: 'Semi-fermented tea with a unique floral aroma and smooth, creamy texture.',
    descriptionFa: 'چای نیمه تخمیر شده با عطر گلی منحصر‌به‌فرد و بافت نرم و کرمی.',
    price: 39.99,
    category: 'oolong',
    image: '/images/products/oolong-tea-1.jpg',
    stock: 25,
    isAvailable: true,
    origin: 'Taiwan',
    originFa: 'تایوان',
    rating: 4.7,
    reviews: 87,
    weight: '100g',
    benefits: ['Weight Management', 'Boosts Energy', 'Improves Focus'],
    benefitsFa: ['مدیریت وزن', 'افزایش انرژی', 'بهبود تمرکز'],
    brewingTemp: '85-90°C',
    brewingTime: '3-5 minutes',
  },
  {
    id: '4',
    name: 'Herbal Paradise',
    nameFa: 'بهشت گیاهی',
    description: 'A soothing blend of chamomile, lavender, and mint. Caffeine-free and perfect for evening relaxation.',
    descriptionFa: 'ترکیبی آرام‌بخش از بابونه، اسطوخودوس و نعناع. بدون کافئین و مناسب برای آرامش شب.',
    price: 24.99,
    category: 'herbal',
    image: '/images/products/herbal-tea-1.jpg',
    stock: 40,
    isAvailable: true,
    origin: 'Egypt',
    originFa: 'مصر',
    rating: 4.6,
    reviews: 112,
    weight: '80g',
    benefits: ['Better Sleep', 'Reduces Anxiety', 'Caffeine-Free'],
    benefitsFa: ['خواب بهتر', 'کاهش اضطراب', 'بدون کافئین'],
    brewingTemp: '100°C',
    brewingTime: '5-7 minutes',
  },
  {
    id: '5',
    name: 'Matcha Premium',
    nameFa: 'ماچا پریمیوم',
    description: 'Stone-ground green tea powder from Japan. Rich in L-theanine for focused calm.',
    descriptionFa: 'پودر چای سبز آسیاب شده از ژاپن. غنی از ال-تیانین برای آرامش متمرکز.',
    price: 49.99,
    category: 'green',
    image: '/images/products/matcha-1.jpg',
    stock: 20,
    isAvailable: true,
    origin: 'Japan',
    originFa: 'ژاپن',
    rating: 5.0,
    reviews: 156,
    weight: '50g',
    benefits: ['Energy Boost', 'Focused Calm', 'High in Antioxidants'],
    benefitsFa: ['افزایش انرژی', 'آرامش متمرکز', 'غنی از آنتی‌اکسیدان'],
    brewingTemp: '70-80°C',
    brewingTime: '30 seconds',
  },
  {
    id: '6',
    name: 'Darjeeling First Flush',
    nameFa: 'دارجیلینگ فرست فلاش',
    description: 'Premium black tea from the Himalayas. Delicate muscatel flavor with a golden, bright liquor.',
    descriptionFa: 'چای سیاه درجه یک از هیمالیا. طعم ظریف مشک‌دار با رنگ طلایی روشن.',
    price: 44.99,
    category: 'red',
    image: '/images/products/darjeeling-1.jpg',
    stock: 30,
    isAvailable: true,
    origin: 'India',
    originFa: 'هند',
    rating: 4.9,
    reviews: 134,
    weight: '100g',
    benefits: ['Antioxidant Rich', 'Improves Mental Alertness', 'Delicate Flavor'],
    benefitsFa: ['غنی از آنتی‌اکسیدان', 'بهبود هوشیاری ذهنی', 'طعم لطیف'],
    brewingTemp: '90-95°C',
    brewingTime: '3-4 minutes',
  },
];