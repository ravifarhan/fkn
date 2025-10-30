import { ProductDimensions, ProductVariant } from "./product";

export interface CartItem {
  id: string;
  title: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  dimensions: ProductDimensions;
  weight: number;
  discountPercent?: number;
  discountAmount?: number;
  variant?: ProductVariant;
}
