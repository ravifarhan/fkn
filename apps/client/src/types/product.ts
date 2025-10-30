export interface ProductImage {
  id: string;
  url: string;
  alt?: string;
  isPrimary?: boolean;
}

export interface ProductVariant {
  id: string;
  stock: number;
  size: string;
  color: string;
}

export interface ProductDimensions {
  width: number;
  length: number;
  height: number;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  sku?: string;
  barcode?: string;
  categoryId: string;
  price: number;
  discountPercent?: number;
  discountAmount?: number;
  stock: number;
  isActive: boolean;
  images: ProductImage[];
  variants?: ProductVariant[];
  weight: number;
  dimensions: ProductDimensions;
  createdAt?: string;
  updatedAt?: string;
}
