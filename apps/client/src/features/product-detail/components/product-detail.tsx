"use client";

import { Product, Category } from "@/types";
import { ProductGallery } from "./product-gallery";
import { ProductInfo } from "./product-info";
import { ProductVariants } from "./product-variant";
import { useState } from "react";
import { ProductButton } from "./product-button";
import { ProductDescription } from "./product-description";
import { toast } from "@repo/ui/components/sonner";
import { useCartStore } from "@/stores/useCartStore";

interface ProductDetailProps {
  product: Product;
  category: Category;
}

export function ProductDetail({ product, category }: ProductDetailProps) {
  const [loadingAdd, setLoadingAdd] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const addItem = useCartStore((data) => data.addItem);

  const handleAddToCart = async () => {
    if (!selectedColor || !selectedSize) {
      toast.error("Please select a color and size");
      return;
    }

    const variant = product.variants?.find(
      (v) => v.color === selectedColor && v.size === selectedSize
    );

    if (!variant) {
      toast.error("Product variant not found");
      return;
    }

    setLoadingAdd(true);

    const primaryImage = product.images.find((img) => img.isPrimary)?.url || "";
    const ProductDescription = `${product.title}, ${selectedColor} - ${selectedSize}`;

    addItem({
      id: product.id,
      title: product.title,
      description: ProductDescription,
      image: primaryImage,
      price: product.price,
      quantity: 1,
      discountAmount: product.discountAmount,
      discountPercent: product.discountPercent,
      variant,
      dimensions: product.dimensions,
      weight: product.weight,
    });

    toast.success(`${product.title} added to cart`);

    setLoadingAdd(false);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      <div>
        <ProductGallery images={product.images} />
      </div>

      <div className="space-y-6">
        <ProductInfo product={product} category={category} />
        <ProductVariants
          variants={product.variants || []}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          onSelectColor={setSelectedColor}
          onSelectSize={setSelectedSize}
        />
        <div className="sticky bottom-0 bg-white/95 backdrop-blur-sm py-4 border-t lg:static lg:border-none lg:shadow-none lg:p-0">
          <ProductButton
            loadingAdd={loadingAdd}
            onClickAdd={handleAddToCart}
            disabled={loadingAdd}
          />
        </div>
        <ProductDescription description={product.description} />
      </div>
    </div>
  );
}
