"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@repo/ui/components/carousel";
import { ProductImage } from "@/types";
import { useEffect, useState } from "react";

interface ProductGalleryProps {
  images: ProductImage[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const handleThumbClick = (idx: number) => {
    api?.scrollTo(idx);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-2">
      <div className="order-2 lg:order-1 w-full lg:w-24">
        <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto lg:h-[500px]">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => handleThumbClick(idx)}
              className={`relative shrink-0 w-1/5 lg:w-full aspect-square rounded overflow-hidden border transition ${
                current === idx
                  ? "border-black"
                  : "border-border hover:border-foreground/40"
              }`}
            >
              <Image
                src={img.url}
                alt={img.alt || "Product image"}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 6vw, 15vw"
                priority={idx === 0}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="order-1 lg:order-2 relative flex-1 overflow-hidden aspect-square lg:h-[500px]">
        <Carousel
          opts={{ loop: true }}
          setApi={setApi}
          className="w-full h-full"
        >
          <CarouselContent>
            {images.map((img, idx) => (
              <CarouselItem key={idx}>
                <div className="relative w-full aspect-square lg:h-[500px]">
                  <Image
                    src={img.url}
                    alt={img.alt || "Product image"}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority={idx === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white shadow rounded-full w-8 h-8 items-center justify-center" />
          <CarouselNext className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white shadow rounded-full w-8 h-8 items-center justify-center" />
        </Carousel>
      </div>
    </div>
  );
}
