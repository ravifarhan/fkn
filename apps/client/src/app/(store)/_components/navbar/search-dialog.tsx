"use client";

import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@repo/ui/components/command";
import { Button } from "@repo/ui/components/button";
import { Search } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { dummyCategories, dummyProducts } from "@/lib";
import { Product } from "@/types";

export function SearchDialog() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const getCategory = (product: Product) => {
    const category = dummyCategories.find((c) => c.id === product.categoryId);
    return {
      name: category?.name || "",
      slug: category?.slug || "",
    };
  };

  const filteredProducts = useMemo(() => {
    const data = query.toLowerCase();
    if (!data) return dummyProducts.slice(0, 5);
    return dummyProducts.filter((product) =>
      product.title.toLowerCase().includes(data)
    );
  }, [query]);

  const handleSearch = (product: Product) => {
    const category = getCategory(product);
    router.push(`/products/${category.slug}/${product.slug}`);
    setOpen(false);
  };

  return (
    <>
      <Button variant="ghost" aria-label="Search" onClick={() => setOpen(true)}>
        <Search className="size-5" />
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search product..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          {filteredProducts.length === 0 ? (
            <div className="py-6 text-center text-sm text-muted-foreground">
              No results found.
            </div>
          ) : (
            <CommandGroup heading={query ? "Results" : "Recent"}>
              {filteredProducts.map((product) => (
                <CommandItem
                  key={product.id}
                  value={product.title}
                  onSelect={() => handleSearch(product)}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-16 h-16">
                      <Image
                        src={product.images[0]?.url || ""}
                        alt={product.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">{product.title}</span>
                      <span className="text-xs text-muted-foreground">
                        {getCategory(product).name}
                      </span>
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
