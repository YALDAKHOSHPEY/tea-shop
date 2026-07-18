import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
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
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
    },
    nameFa: {
      type: String,
      required: [true, 'Product name in Persian is required'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    descriptionFa: {
      type: String,
      required: [true, 'Description in Persian is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: 0,
    },
    category: {
      type: String,
      enum: ['green', 'red', 'oolong', 'herbal'],
      required: [true, 'Category is required'],
    },
    image: {
      type: String,
      required: [true, 'Image URL is required'],
    },
    stock: {
      type: Number,
      default: 0,
      min: 0,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    origin: {
      type: String,
      required: [true, 'Origin is required'],
    },
    originFa: {
      type: String,
      required: [true, 'Origin in Persian is required'],
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    reviews: {
      type: Number,
      default: 0,
    },
    weight: {
      type: String,
      required: [true, 'Weight is required'],
    },
    benefits: {
      type: [String],
      default: [],
    },
    benefitsFa: {
      type: [String],
      default: [],
    },
    brewingTemp: {
      type: String,
      required: [true, 'Brewing temperature is required'],
    },
    brewingTime: {
      type: String,
      required: [true, 'Brewing time is required'],
    },
  },
  {
    timestamps: true,
  }
);

// ایندکس‌ها برای جستجوی سریع‌تر
ProductSchema.index({ name: 'text', description: 'text' });
ProductSchema.index({ category: 1 });
ProductSchema.index({ price: 1 });

export const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);