"use client";

import { Truck, RefreshCcw, ShieldCheck } from "lucide-react";

const benefits = [
  {
    id: 1,
    icon: Truck,
    title: "Fast Delivery",
    description: "Pengiriman cepat dengan banyak pilihan kurir.",
  },
  {
    id: 2,
    icon: RefreshCcw,
    title: "Easy Return",
    description: "Pengembalian produk mudah dalam 7 hari.",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Secure Checkout",
    description: "Pembayaran aman dan terjamin.",
  },
];

export function Benefit() {
  return (
    <div className="container mx-auto py-12 flex flex-col gap-6 md:flex-row md:justify-between">
      {benefits.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center text-center gap-2 md:flex-row md:text-left md:items-start"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 shrink-0">
            <item.icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-semibold">{item.title}</h3>
            <p className="text-xs text-muted-foreground">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
