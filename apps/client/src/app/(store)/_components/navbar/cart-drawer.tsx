"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@repo/ui/components/sheet";
import { ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@repo/ui/components/button";
import { Badge } from "@repo/ui/components/badge";
import { Separator } from "@repo/ui/components/separator";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/stores/useCartStore";
import { formatPrice, getFinalPrice } from "@/utils";
import { useHydratedStore } from "@/hooks/useHydrateStore";

export function CartDrawer() {
  const hydrated = useHydratedStore(useCartStore);
  const items = useCartStore((s) => s.items);
  const totalItems = useCartStore((s) => s.getTotalItems());
  const totalPrice = useCartStore((s) => s.getTotalPrice());
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);

  if (!hydrated)
    return (
      <Button variant="ghost" aria-label="Shopping Cart" className="relative">
        <ShoppingCart className="size-5" />
      </Button>
    );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" aria-label="Shopping Cart" className="relative">
          <ShoppingCart className="size-5" />
          {totalItems > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full px-1 tabular-nums">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center text-muted-foreground">
              <h2 className="font-semibold">Your cart is empty</h2>
              <SheetClose asChild>
                <Link href="/products">
                  <Button variant="link" size="sm">
                    Continue Shopping
                  </Button>
                </Link>
              </SheetClose>
            </div>
          ) : (
            <div className="border-t divide-y">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-2 gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-20 h-20 aspect-square flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-medium">{item.title}</p>
                      <p className="text-xs">
                        {item.variant?.size} - {item.variant?.color}
                      </p>
                      {item.discountPercent || item.discountAmount ? (
                        <div className="flex gap-2">
                          <span className="text-xs text-muted-foreground">
                            {formatPrice(getFinalPrice(item) * item.quantity)}
                          </span>
                          <span className="text-xs text-muted-foreground line-through">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      ) : (
                        <p className="text-xs text-muted-foreground">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      )}
                      <div className="flex items-center gap-2 mt-1">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          disabled={item.quantity === 1}
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          −
                        </Button>
                        <span className="text-sm tabular-nums">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6 ml-4"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <>
            <Separator />
            <div className="p-4 space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between font-semibold text-base">
                <span>Total</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
            </div>
            <SheetClose asChild>
              <Link href="/checkout" className="block p-4">
                <Button className="w-full">Checkout</Button>
              </Link>
            </SheetClose>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
