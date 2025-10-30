"use client";

import { useMemo } from "react";
import { Product } from "@/types";
import { ProductGrid } from "./product-grid";
import { ProductFilter } from "./product-filter";
import { useRouter, useSearchParams } from "next/navigation";
import { dummyCategories } from "@/lib";

interface ProductListProps {
  products: Product[];
  initialCategory?: string;
}

export function ProductList({ products, initialCategory }: ProductListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categorySlug = initialCategory || "all";
  const sortBy = searchParams.get("sort") || "popular";

  const categoryTitle =
    categorySlug === "all"
      ? "All Products"
      : dummyCategories.find((c) => c.slug === categorySlug)?.name ||
        "All Products";

  const handleCategoryChange = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (slug === "all") {
      router.push(`/products?${params.toString()}`);
    } else {
      router.push(`/products/${slug}?${params.toString()}`);
    }
  };

  const handleSortChange = (option: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (option === "popular") {
      params.delete("sort");
    } else {
      params.set("sort", option);
    }

    if (categorySlug === "all") {
      router.replace(`/products?${params.toString()}`);
    } else {
      router.replace(`/products/${categorySlug}?${params.toString()}`);
    }
  };

  const sortedProducts = useMemo(() => {
    const sorted = [...products];
    switch (sortBy) {
      case "newest":
        return sorted.sort(
          (a, b) =>
            new Date(b.createdAt || "").getTime() -
            new Date(a.createdAt || "").getTime()
        );
      case "price_low":
        return sorted.sort((a, b) => a.price - b.price);
      case "price_high":
        return sorted.sort((a, b) => b.price - a.price);
      default:
        return sorted;
    }
  }, [products, sortBy]);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">{categoryTitle}</h2>
      <ProductFilter
        category={categorySlug}
        sortBy={sortBy}
        onCategoryChange={handleCategoryChange}
        onSortChange={handleSortChange}
      />
      <ProductGrid products={sortedProducts} />
    </div>
  );
}
