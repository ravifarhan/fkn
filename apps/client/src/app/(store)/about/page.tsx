import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami | FKN Store",
  description:
    "FKN Store adalah toko online fashion lokal premium dengan harga terjangkau. Kami berkomitmen menghadirkan produk berkualitas dan layanan terbaik.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">Tentang Kami</h1>
        <p className="leading-relaxed">
          <strong>FKN Store</strong> adalah toko online yang menyediakan
          berbagai produk fashion lokal pilihan dengan kualitas premium dan
          harga terjangkau. Kami berdiri dengan tujuan memberikan pengalaman
          belanja yang mudah, cepat, dan menyenangkan bagi semua pelanggan di
          seluruh Indonesia.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Visi & Misi</h2>
        <ul className="list-disc pl-6 space-y-2 ">
          <li>Menyediakan produk fashion yang berkualitas tinggi.</li>
          <li>Memberikan layanan pelanggan yang ramah dan responsif.</li>
          <li>Menghadirkan pengalaman belanja online yang praktis dan aman.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Kenapa Memilih Kami?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Produk original dan selalu up-to-date dengan tren fashion.</li>
          <li>Harga yang terjangkau tanpa mengurangi kualitas.</li>
          <li>Pengiriman cepat dan terpercaya ke seluruh Indonesia.</li>
          <li>Beragam metode pembayaran yang aman & mudah.</li>
        </ul>
      </section>

      <section>
        <p className="leading-relaxed">
          Terima kasih sudah mempercayai <strong>FKN Store</strong> sebagai
          pilihan belanja fashion Anda. Kami akan terus berinovasi dan
          meningkatkan layanan untuk memberikan pengalaman terbaik.
        </p>
      </section>
    </div>
  );
}
