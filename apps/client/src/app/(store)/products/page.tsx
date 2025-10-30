import { ProductList } from "@/features/products/components";
import { dummyProducts } from "@/lib";

export default function ProductsPage() {
  return <ProductList products={dummyProducts} initialCategory="all" />;
}
