"use client";

import { useMemo } from "react";
import Image from "next/image";
import { useFormContext } from "react-hook-form";
import { FieldSet, FieldLabel, FieldError } from "@repo/ui/components/field";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@repo/ui/components/sheet";
import { ScrollArea } from "@repo/ui/components/scroll-area";
import { Button } from "@repo/ui/components/button";
import { Spinner } from "@repo/ui/components/spinner";
import { useIsMobile } from "@repo/ui/hooks/use-mobile";
import { useShipping, getCourierLogo } from "../services";
import { ShippingList } from "./shipping-list";
import { formatPrice } from "@/utils";
import { CheckoutValues } from "../schema";

export const ShippingSection = () => {
  const isMobile = useIsMobile();
  const { postalCode, items, groupedByService, rates, isLoading } =
    useShipping();
  const {
    watch,
    formState: { errors },
  } = useFormContext<CheckoutValues>();

  const selected = watch("shipping_method");

  const selectedRate = useMemo(
    () =>
      rates.find(
        (r) =>
          `${r.courier_code},${r.courier_service_code},${r.price}` === selected
      ) || null,
    [rates, selected]
  );

  const disabled = !postalCode || items.length === 0;
  const message =
    items.length === 0 || !postalCode
      ? "Complete address to view shipping"
      : "Choose Shipping Method";

  return (
    <FieldSet>
      <FieldLabel>Shipping Method</FieldLabel>

      <Sheet>
        <SheetTrigger asChild>
          <Button
            type="button"
            variant="outline"
            size="lg"
            className="w-full justify-between"
            disabled={disabled}
          >
            {selectedRate ? (
              <span className="flex w-full items-center justify-between gap-3">
                <span className="relative h-12 w-12 overflow-hidden">
                  <Image
                    src={getCourierLogo(selectedRate.courier_code)}
                    alt={selectedRate.courier_name}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </span>
                <span className="flex-1 text-left truncate">
                  {selectedRate.courier_name} -{" "}
                  {selectedRate.courier_service_name}
                  <span className="ml-2 text-muted-foreground">
                    ({selectedRate.duration})
                  </span>
                </span>
                <span className="font-medium">
                  {formatPrice(selectedRate.price)}
                </span>
              </span>
            ) : (
              <span>{message}</span>
            )}
          </Button>
        </SheetTrigger>

        <SheetContent side={isMobile ? "bottom" : "right"}>
          <SheetHeader>
            <SheetTitle>Choose Shipping</SheetTitle>
            <SheetDescription>
              Select your preferred courier service
            </SheetDescription>
          </SheetHeader>

          <ScrollArea className="w-full h-96 px-2">
            {isLoading && (
              <div className="p-4 text-sm text-muted-foreground">
                <Spinner />
              </div>
            )}

            {!isLoading && rates.length === 0 && (
              <div className="p-4 text-sm text-muted-foreground">
                {postalCode
                  ? "No shipping options available for your selection."
                  : "Enter postal code to see shipping options."}
              </div>
            )}

            {!isLoading && rates.length > 0 && (
              <ShippingList groupedByService={groupedByService} />
            )}
          </ScrollArea>

          <SheetFooter>
            <SheetClose asChild>
              <Button type="button" className="w-full" disabled={!selected}>
                Confirm
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      {errors.shipping_method && (
        <FieldError className="mt-[-1rem]" errors={[errors.shipping_method]} />
      )}
    </FieldSet>
  );
};
