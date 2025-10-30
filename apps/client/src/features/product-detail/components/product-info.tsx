"use client";

import { Product, Category } from "@/types";
import { formatPrice, getFinalPrice } from "@/utils";

export function ProductInfo({
  product,
  category,
}: {
  product: Product;
  category: Category;
}) {


  return (
    <div className="px-4">
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <p className="text-sm text-muted-foreground mb-2">{category.name}</p>
      <div className="flex flex-col ">
        {product.discountPercent && (
          <span className="text-muted-foreground line-through">
            {formatPrice(product.price)}
          </span>
        )}
        <span className="text-lg font-semibold text-primary">
          {formatPrice(getFinalPrice(product))}
        </span>
      </div>
    </div>
  );
}
