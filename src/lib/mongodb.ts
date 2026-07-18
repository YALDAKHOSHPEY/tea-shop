import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// تعریف تایپ برای کش
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// تعریف global با تایپ مناسب
declare global {
  var mongoose: MongooseCache | undefined;
}

// مقداردهی اولیه کش
const cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

export async function connectDB() {
  // اگر اتصال وجود داره، برگردون
  if (cached.conn) {
    console.log('📦 Using cached database connection');
    return cached.conn;
  }

  // اگر پرامیس وجود نداره، ایجاد کن
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10, // حداکثر تعداد اتصالات همزمان
      serverSelectionTimeoutMS: 5000, // زمان تایم‌اوت برای انتخاب سرور
      socketTimeoutMS: 45000, // زمان تایم‌اوت سوکت
    };

    console.log('🔄 Connecting to MongoDB...');
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('✅ MongoDB connected successfully!');
      return mongoose;
    }).catch((error) => {
      console.error('❌ MongoDB connection error:', error);
      cached.promise = null;
      throw error;
    });
  }

  // منتظر بمان تا اتصال برقرار شود
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

// تابع کمکی برای قطع اتصال (اختیاری)
export async function disconnectDB() {
  if (cached.conn) {
    await cached.conn.disconnect();
    cached.conn = null;
    cached.promise = null;
    console.log('🔌 MongoDB disconnected');
  }
}