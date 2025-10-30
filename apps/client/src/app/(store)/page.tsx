import { Metadata } from "next";
import { Category, Hero } from "./_components";
import { ProductGrid } from "@/features/products/components";
import { dummyProducts } from "@/lib";

export const metadata: Metadata = {
  title: "FKN Store",
  description: "Show your style with FKN Store",
};

export default function Home() {
  const products = dummyProducts.slice(0, 8);

  return (
    <>
      <Hero />
      <div className="container mx-auto pb-8">
        <Category />
        <ProductGrid products={products} />
      </div>
    </>
  );
}
