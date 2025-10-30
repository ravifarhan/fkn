import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | FKN Store",
  description:
    "Kebijakan privasi FKN Store mengenai penggunaan data pribadi pelanggan.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen max-w-3xl mx-auto py-10 px-4 space-y-8">
      <h1 className="text-3xl font-bold mb-4">Kebijakan Privasi</h1>
      <section className="space-y-4 leading-relaxed">
        <p>
          Privasi pelanggan adalah prioritas utama bagi{" "}
          <strong>FKN Store</strong>. Kami hanya mengumpulkan data pribadi
          yang diperlukan untuk memproses pesanan, pengiriman, dan layanan
          pelanggan.
        </p>
        <h2 className="text-xl font-semibold">Informasi yang Kami Kumpulkan</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Nama lengkap dan alamat pengiriman</li>
          <li>Nomor telepon dan alamat email</li>
          <li>Informasi pembayaran yang relevan</li>
        </ul>

        <h2 className="text-xl font-semibold">Bagaimana Data Digunakan</h2>
        <p>
          Data digunakan untuk memproses pesanan, mengatur pengiriman, serta
          komunikasi terkait layanan. Kami tidak menjual atau menyebarkan data
          pribadi pelanggan ke pihak ketiga.
        </p>

        <h2 className="text-xl font-semibold">Keamanan Data</h2>
        <p>
          Kami berkomitmen menjaga keamanan data pelanggan menggunakan teknologi
          yang sesuai.
        </p>
      </section>
    </div>
  );
}
