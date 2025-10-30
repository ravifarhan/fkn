import { CartItem, Product } from "@/types";

export function getFinalPrice(product: Product | CartItem): number {
  let finalPrice = product.price;

  if (product.discountPercent) {
    finalPrice -= (finalPrice * product.discountPercent) / 100;
  } else if (product.discountAmount) {
    finalPrice -= product.discountAmount;
  }

  return Math.max(finalPrice, 0);
}
