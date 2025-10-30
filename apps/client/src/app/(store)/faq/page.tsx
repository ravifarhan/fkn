import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@repo/ui/components/accordion";

export const metadata: Metadata = {
  title: "FAQ | FKN Store",
  description: "Pertanyaan yang sering diajukan tentang FKN Store.",
};

export default function FAQPage() {
  const faqs = [
    {
      q: "Berapa lama pengiriman pesanan?",
      a: "Pengiriman biasanya 2-5 hari kerja, tergantung lokasi dan kurir yang dipilih.",
    },
    {
      q: "Apakah bisa bayar di tempat (COD)?",
      a: "Saat ini kami mendukung metode pembayaran transfer bank dan e-wallet. COD akan ditambahkan segera.",
    },
    {
      q: "Bagaimana cara retur barang?",
      a: "Retur hanya berlaku untuk barang cacat produksi. Hubungi support kami maksimal 3 hari setelah barang diterima.",
    },
    {
      q: "Apakah produk selalu ready stock?",
      a: "Ya, semua produk yang tampil di website kami adalah ready stock kecuali ada keterangan 'Pre-order'.",
    },
  ];

  return (
    <div className="min-h-screen max-w-3xl mx-auto py-10 px-4 space-y-8">
      <h1 className="text-3xl font-bold mb-4 text-center">FAQ</h1>
      <Accordion type="single" collapsible className="w-full space-y-2">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border rounded">
            <AccordionTrigger className="text-left font-semibold">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
