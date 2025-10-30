import { ProductDetail } from "@/features/product-detail/components/product-detail";
import { dummyCategories, dummyProducts } from "@/lib";
import { Category } from "@/types";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; detail: string }>;
}) {
  const { category, detail } = await params;
  const selectedCategory = dummyCategories.find(
    (c) => c.slug === category
  ) as Category;
  const selectedProduct = dummyProducts.find((p) => p.slug === detail);

  if (!selectedProduct) {
    return (
      <div className="p-8 text-center text-muted-foreground">
        Product not found
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <ProductDetail product={selectedProduct} category={selectedCategory} />
    </div>
  );
}
