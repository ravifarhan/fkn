"use client";

import Image from "next/image";
import { useCartStore } from "@/stores/useCartStore";
import { useFormContext } from "react-hook-form";
import { formatPrice, getFinalPrice } from "@/utils";
import { CheckoutValues } from "../schema";
import { useHydratedStore } from "@/hooks/useHydrateStore";
import { SummarySkeleton } from "./summary-skeleton";

export function CheckoutSummary() {
  const hydrated = useHydratedStore(useCartStore);
  const items = useCartStore((s) => s.items);
  const totalPrice = useCartStore((s) => s.getTotalPrice());
  const { watch } = useFormContext<CheckoutValues>();

  const shippingMethod = watch("shipping_method");

  const shippingPrice = shippingMethod
    ? Number(shippingMethod.split(",").pop())
    : 0;

  const grandTotal = totalPrice + shippingPrice;

  if (!hydrated) return <SummarySkeleton />;

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold">Order Summary</h2>

      <div className="divide-y">
        {items.map((item) => {
          const finalPrice = getFinalPrice(item) * item.quantity;
          const originalPrice = item.price * item.quantity;
          const hasDiscount =
            item.discountPercent || item.discountAmount ? true : false;

          return (
            <div
              key={item.id}
              className="flex items-start justify-between gap-4 py-2"
            >
              <div className="flex gap-4">
                <div className="relative size-16 aspect-square shrink-0 overflow-hidden rounded border">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <p className="text-sm font-medium leading-tight line-clamp-1">
                    {item.title}
                  </p>

                  {(item.variant?.color || item.variant?.size) && (
                    <p className="text-xs text-muted-foreground">
                      {item.variant.color} - {item.variant.size}
                    </p>
                  )}

                  <p className="text-xs text-muted-foreground">
                    Qty: {item.quantity}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end justify-center">
                {hasDiscount ? (
                  <>
                    <span className="text-sm">{formatPrice(finalPrice)}</span>
                    <span className="text-xs text-muted-foreground line-through">
                      {formatPrice(originalPrice)}
                    </span>
                  </>
                ) : (
                  <span className="text-sm">{formatPrice(originalPrice)}</span>
                )}
              </div>
            </div>
          );
        })}

        <div className="flex flex-col justify-between p-2">
          <div className="flex justify-between">
            <span className="text-sm">Subtotal</span>
            <span className="text-sm">{formatPrice(totalPrice)}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-sm">Shipping</span>
            <span className="text-sm">
              {shippingPrice ? formatPrice(shippingPrice) : "-"}
            </span>
          </div>

          <div className="flex justify-between pt-2">
            <span className="text-sm font-semibold">Total</span>
            <span className="text-sm font-semibold">
              {formatPrice(grandTotal)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
