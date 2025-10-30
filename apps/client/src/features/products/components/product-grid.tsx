import { Product } from "@/types";
import { ProductCard } from "./product-card";
import { dummyCategories } from "@/lib/categories";

type ProductGridProps = { products: Product[] };

export function ProductGrid({ products }: ProductGridProps) {
  if (!products?.length)
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold">No products found</h2>
      </div>
    );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {products.map((item) => {
        const category = dummyCategories.find((c) => c.id === item.categoryId);
        if (!category) return null;
        return <ProductCard key={item.id} product={item} category={category} />;
      })}
    </div>
  );
}
