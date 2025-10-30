"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@repo/ui/components/card";
import { formatPrice, getFinalPrice, } from "@/utils";
import {  Category, Product } from "@/types";

interface ProductCardProps {
  product: Product;
  category: Category;
}

export function ProductCard({ product, category }: ProductCardProps) {
  const isNewProduct = (product: Product) => {
    const now = new Date();
    const uploaded = new Date(product.createdAt || "");
    const diff = (now.getTime() - uploaded.getTime()) / (1000 * 60 * 60 * 24);
    return diff <= 14;
  };

  const finalPrice = getFinalPrice(product);
  const hasDiscount = finalPrice < product.price;

  return (
    <Link href={`/products/${category.slug}/${product.slug}`} className="block">
      <Card className="relative overflow-hidden rounded-sm shadow-sm hover:shadow-lg transition pt-0">
        <div className="relative w-full aspect-square">
          <Image
            src={product.images[0]?.url || ""}
            alt={product.title || "Product Image"}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
          />

          {isNewProduct(product) && (
            <span className="absolute top-2 left-2 bg-neutral-50 text-xs font-semibold px-2 py-1 rounded shadow-sm">
              BARU
            </span>
          )}

          {hasDiscount && (
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded shadow-sm">
              {product.discountPercent
                ? `-${product.discountPercent}%`
                : "SALE"}
            </span>
          )}
        </div>

        <CardHeader className="px-2 sm:px-4">
          <CardTitle className="text-sm sm:text-base font-semibold text-gray-800 line-clamp-1">
            {product.title}
          </CardTitle>
          <CardDescription>{category.name}</CardDescription>

          <CardDescription>
            {hasDiscount ? (
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm lg:text-lg text-primary">
                  {formatPrice(finalPrice)}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  {formatPrice(product.price)}
                </span>
              </div>
            ) : (
              <p className="font-semibold text-sm lg:text-lg text-primary">
                {formatPrice(product.price)}
              </p>
            )}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
