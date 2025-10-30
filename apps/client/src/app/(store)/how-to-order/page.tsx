import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cara Pemesanan | FKN Store",
  description:
    "Panduan mudah cara memesan produk di FKN Store mulai dari pilih produk hingga checkout.",
};

export default function HowToOrderPage() {
  return (
    <div className="min-h-screen max-w-3xl mx-auto py-10 px-4 space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">Cara Pemesanan</h1>
        <p className="leading-relaxed text-center">
          Berikut langkah-langkah mudah untuk memesan produk di{" "}
          <strong>FKN Store</strong>:
        </p>
      </section>

      <section>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>Pilih Produk</strong> – Telusuri katalog kami dan pilih
            produk yang kamu suka.
          </li>
          <li>
            <strong>Tambahkan ke Keranjang</strong> – Pilih warna/ukuran, lalu
            klik <b>Tambah ke Keranjang</b>.
          </li>
          <li>
            <strong>Buka Keranjang</strong> – Periksa kembali pesananmu di
            halaman keranjang.
          </li>
          <li>
            <strong>Checkout</strong> – Klik tombol <b>Checkout</b> untuk masuk
            ke halaman pengisian alamat & metode pengiriman.
          </li>
          <li>
            <strong>Pilih Metode Pembayaran</strong> – Transfer bank, e-wallet,
            atau opsi lain yang tersedia.
          </li>
          <li>
            <strong>Selesaikan Pesanan</strong> – Setelah pembayaran berhasil,
            pesananmu akan segera kami proses.
          </li>
        </ol>
      </section>

      <section>
        <p className="text-sm  italic text-center">
          Jika mengalami kendala saat memesan, silakan hubungi tim kami melalui
          WhatsApp atau Email yang ada di halaman{" "}
          <a href="/contact" className="text-primary hover:underline">
            Hubungi Kami
          </a>
          .
        </p>
      </section>
    </div>
  );
}
