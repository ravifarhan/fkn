import { ProductList } from "@/features/products/components";
import { dummyProducts } from "@/lib";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  return (
    <>
      <ProductList products={dummyProducts} initialCategory={category} />
    </>
  );
}
