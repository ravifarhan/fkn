import { z } from "zod";

export const checkoutSchema = z.object({
  fullname: z
    .string()
    .nonempty({ error: "Name is required" })
    .max(50, { error: "Name must be at most 50 characters long" }),
  phone: z
    .string()
    .nonempty({ error: "Phone number is required" })
    .regex(/^(\+62|62|0)[0-9]{8,14}$/, { error: "Phone number is invalid" })
    .min(10, { error: "Phone number must be at least 10 characters long" }),
  province: z.string().nonempty({ error: "Province is required" }),
  regency: z.string().nonempty({ error: "Regency is required" }),
  district: z.string().nonempty({ error: "City is required" }),
  postal_code: z.string().nonempty({ error: "Postal code is required" }),
  address: z.string().nonempty({ error: "Address is required" }),
  shipping_method: z
    .string()
    .nonempty({ error: "Shipping method is required" }),
});

export type CheckoutValues = z.infer<typeof checkoutSchema>;
