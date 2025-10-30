"use client";

import { useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { useCartStore } from "@/stores/useCartStore";
import { CheckoutValues } from "../schema";
import { Rates, RatesRequest } from "@/types";
import { useRates } from "../services";

export function useShipping() {
  const { watch } = useFormContext<CheckoutValues>();
  const postalCode = watch("postal_code");
  const { getShippingItems } = useCartStore();
  const items = getShippingItems();

  const totalWeight = items.reduce((sum, i) => sum + i.weight * i.quantity, 0);
  const shippingType = totalWeight > 10000 ? "freight" : "parcel";

  const payload: RatesRequest | undefined = postalCode
    ? {
        origin_postal_code: 11530,
        destination_postal_code: Number(postalCode),
        couriers: "jne,jnt,sicepat,anteraja",
        items,
      }
    : undefined;

  const { data: allRates = [], isLoading } = useRates(payload);

  const rates = useMemo(
    () => allRates.filter((r) => r.shipping_type === shippingType),
    [allRates, shippingType]
  );

  const groupedByService = useMemo(() => {
    const groups: Record<string, Rates[]> = {};
    for (const r of rates) {
      const groupName = getServiceDisplayName(r.service_type);
      groups[groupName] = groups[groupName] || [];
      groups[groupName].push(r);
    }
    return groups;
  }, [rates]);

  return { postalCode, items, rates, groupedByService, isLoading };
}

function getServiceDisplayName(serviceType?: string) {
  switch (serviceType?.toLowerCase()) {
    case "instant": return "Instant";
    case "same_day": return "Same Day";
    case "overnight": return "Next Day";
    case "standard":
    case "standart": return "Regular";
    default: return "Other";
  }
}
