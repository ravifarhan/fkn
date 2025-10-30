"use client";

// import { useCategories } from "@/features/categories";
import { dummyCategories } from "@/lib/categories";
import { Card, CardContent } from "@repo/ui/components/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@repo/ui/components/carousel";
// import { Skeleton } from "@repo/ui/components/skeleton";
import { useIsMobile } from "@repo/ui/hooks/use-mobile";
import Image from "next/image";
import Link from "next/link";

export function Category() {
  const isMobile = useIsMobile();
  // const { data, isLoading } = useCategories();

  // const categories = data || [];

  const shouldHideButtons = isMobile || dummyCategories.length < 6;

  // if (isLoading) {
  //   return (
  //     <section className="container mx-auto py-12 px-6 sm:px-10 lg:px-16 mt-8">
  //       <h2 className="text-xl text-center font-bold mb-8">Shop by Category</h2>
  //       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
  //         {Array.from({ length: 6 }).map((_, i) => (
  //           <div key={i} className="flex flex-col items-center gap-2">
  //             <Skeleton className="h-40 w-40 rounded-full" />
  //             <Skeleton className="h-4 w-1/2" />
  //           </div>
  //         ))}
  //       </div>
  //     </section>
  //   );
  // }

  if (!dummyCategories) {
    return null;
  }

  return (
    <section className="container mx-auto py-12 px-6 sm:px-10 lg:px-16 mt-8">
      <h2 className="text-xl text-center font-bold mb-8">Shop by Category</h2>
      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent className="gap-4">
          {dummyCategories.map((cat) => (
            <CarouselItem
              key={cat.id}
              className="basis-1/3 md:basis-1/4 lg:basis-1/6"
            >
              <Link href={`/products/${cat.slug}`} className="block p-1">
                <Card className="overflow-hidden group p-0 rounded-full">
                  <CardContent className="relative aspect-square flex items-center justify-center">
                    <Image
                      src={cat.image || "/placeholder.svg"}
                      alt={cat.name}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 16vw"
                    />
                  </CardContent>
                </Card>
                <div className="text-center p-2">
                  <p className="text-sm font-semibold capitalize truncate">
                    {cat.name}
                  </p>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className={shouldHideButtons ? "hidden" : ""} />
        <CarouselNext className={shouldHideButtons ? "hidden" : ""} />
      </Carousel>
    </section>
  );
}
