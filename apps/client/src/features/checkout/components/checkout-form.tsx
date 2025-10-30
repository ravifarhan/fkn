"use client";

import { Button } from "@repo/ui/components/button";
import Script from "next/script";
import { Field, FieldGroup } from "@repo/ui/components/field";
import { ContactSection } from "./contact-section";
import { AddressSection } from "./address-section";
import { ShippingSection } from "./shipping-section";
import { FormProvider, useForm } from "react-hook-form";
import { CheckoutSummary } from "./checkout-summary";
import { checkoutSchema, CheckoutValues } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePayment } from "../services/usePayment";
import { useCartStore } from "@/stores/useCartStore";
import { Transaction } from "@/types";
import { v4 as uuidv4 } from "uuid";
import { Spinner } from "@repo/ui/components/spinner";

export function CheckoutForm() {
  const form = useForm<CheckoutValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullname: "",
      phone: "",
      province: "",
      regency: "",
      district: "",
      postal_code: "",
      address: "",
      shipping_method: "",
    },
  });

  const { payment, isPaymentPending } = usePayment();
  const { items } = useCartStore();

  const handleSubmit = (data: CheckoutValues) => {
    const orderId = `ORDER-${Date.now()}- ${uuidv4().slice(0, 8)}`;

    const payload: Transaction = {
      orderId,
      fullname: data.fullname,
      phone: data.phone,
      shippingMethod: data.shipping_method,
      transactionItems: items.map((item) => ({
        productId: item.id,
        name: item.title,
        price: item.price,
        quantity: item.quantity,
      })),
    };
    payment(payload);
  };

  const midtransSnapUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
  const midtransClientKey = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY;

  return (
    <>
      <Script
        src={midtransSnapUrl}
        data-client-key={midtransClientKey}
        strategy="afterInteractive"
      />
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="flex flex-col-reverse md:flex-row gap-8 px-4 md:px-0">
            <div className="md:basis-1/2">
              <h1 className="text-2xl font-bold mb-4">Shipping Information</h1>
              <FieldGroup>
                <ContactSection />
                <AddressSection />
                <ShippingSection />

                <Field orientation="horizontal">
                  <Button
                    aria-label="Pay Now"
                    type="submit"
                    size="lg"
                    disabled={isPaymentPending}
                  >
                    {isPaymentPending && <Spinner />}
                    Pay Now
                  </Button>
                </Field>
              </FieldGroup>
            </div>
            <div className="md:basis-1/2">
              <CheckoutSummary />
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  );
}
