"use client";

import { FieldDescription, FieldGroup, FieldLegend, FieldSet } from "@repo/ui/components/field";
import { useFormContext } from "react-hook-form";
import { CheckoutValues } from "../schema";
import { FormInput } from "@/components";

export const ContactSection = () => {
  const { control } = useFormContext<CheckoutValues>();
  return (
    <FieldSet className="gap-0">
      <FieldLegend className="p-0">Contact Information</FieldLegend>
      <FieldDescription className="mb-0">
        Please provide your full name and phone number.
      </FieldDescription>
      <FieldGroup>
        <div className="grid md:grid-cols-2 gap-4">
          <FormInput
            control={control}
            name="fullname"
            placeholder="Full name"
          />
          <FormInput
            control={control}
            name="phone"
            placeholder="Phone Number"
          />
        </div>
      </FieldGroup>
    </FieldSet>
  );
};
