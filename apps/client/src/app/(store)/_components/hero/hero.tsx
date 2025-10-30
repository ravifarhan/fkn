"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@repo/ui/components/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

const carouselImages = [
  {
    id: 1,
    desktop:
      "https://images.pexels.com/photos/5864245/pexels-photo-5864245.jpeg",
    mobile:
      "https://images.pexels.com/photos/5864245/pexels-photo-5864245.jpeg",
    alt: "Banner 3",
  },
  {
    id: 2,
    desktop:
      "https://images.pexels.com/photos/5863630/pexels-photo-5863630.jpeg",
    mobile:
      "https://images.pexels.com/photos/5863630/pexels-photo-5863630.jpeg",
    alt: "Banner 2",
  },
  {
    id: 3,
    desktop:
      "https://images.pexels.com/photos/5531540/pexels-photo-5531540.jpeg",
    mobile:
      "https://images.pexels.com/photos/5531540/pexels-photo-5531540.jpeg",
    alt: "Banner 1",
  },
];

export function Hero() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | undefined>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    setSlideCount(carouselApi.scrollSnapList().length);
    setCurrentSlide(carouselApi.selectedScrollSnap());

    carouselApi.on("select", () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  return (
    <section className="w-full relative mb-6">
      <Carousel
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
        opts={{ loop: true }}
        setApi={setCarouselApi}
        className="w-full"
      >
        <CarouselContent>
          {carouselImages.map((image) => (
            <CarouselItem key={image.id}>
              <div className="relative w-full aspect-[2/3] sm:hidden">
                <Image
                  src={image.mobile}
                  alt={image.alt}
                  fill
                  priority={image.id === 0}
                  sizes="(max-width: 640px) 0px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              </div>

              <div className="relative w-full aspect-[8/3] hidden sm:block">
                <Image
                  src={image.desktop}
                  alt={image.alt}
                  fill
                  priority={image.id === 0}
                  sizes="(max-width: 640px) 100vw, 0px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute bottom-2 md:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 md:gap-4">
        <div className="flex gap-1.5 sm:gap-2">
          {Array.from({ length: slideCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => carouselApi?.scrollTo(i)}
              className={`rounded-full transition-colors ${
                currentSlide === i
                  ? "bg-white w-1.5 h-1.5 sm:w-2 sm:h-2"
                  : "bg-white/50 w-1.5 h-1.5 sm:w-2 sm:h-2"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
