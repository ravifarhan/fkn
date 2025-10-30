import { ProductList, ProductSkeleton } from "@/features/products/components";
import { dummyProducts } from "@/lib";
import { Suspense } from "react";

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductSkeleton />}>
      <ProductList products={dummyProducts} initialCategory="all" />
    </Suspense>
  );
}
