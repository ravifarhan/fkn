"use client";

import Image from "next/image";
import { useFormContext } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@repo/ui/components/radio-group";
import { Field, FieldLabel, FieldContent } from "@repo/ui/components/field";
import { formatPrice } from "@/utils";
import { getCourierLogo } from "../services";
import { Rates } from "@/types";
import { CheckoutValues } from "../schema";

interface Props {
  groupedByService: Record<string, Rates[]>;
}

export const ShippingList = ({ groupedByService }: Props) => {
  const { setValue, watch } = useFormContext<CheckoutValues>();
  const selected = watch("shipping_method");

  const handleSelect = (val: string) => {
    setValue("shipping_method", val, { shouldValidate: true });
  };

  return (
    <RadioGroup value={selected} onValueChange={handleSelect}>
      {Object.entries(groupedByService).map(([serviceName, options]) => (
        <div key={serviceName} className="mb-4">
          <h4 className="font-medium mb-2">{serviceName}</h4>
          <div className="space-y-1">
            {options.map((opt) => {
              const value = `${opt.courier_code},${opt.courier_service_code},${opt.price}`;
              const id = `rate-${opt.courier_code}-${opt.courier_service_code}`;
              return (
                <FieldLabel key={id} htmlFor={id}>
                  <Field orientation="horizontal">
                    <FieldContent className="flex w-full justify-between">
                      <span className="flex w-full items-center gap-4">
                        <span className="relative h-8 w-8 overflow-hidden">
                          <Image
                            src={getCourierLogo(opt.courier_code)}
                            alt={opt.courier_name}
                            fill
                            className="object-contain"
                          />
                        </span>
                        <span className="flex flex-col">
                          {opt.courier_name} - {opt.courier_service_name}
                          <span className="text-muted-foreground">
                            {formatPrice(opt.price)}
                          </span>
                        </span>
                      </span>
                    </FieldContent>
                    <RadioGroupItem value={value} id={id} />
                  </Field>
                </FieldLabel>
              );
            })}
          </div>
        </div>
      ))}
    </RadioGroup>
  );
};
