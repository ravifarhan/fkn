import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontak Kami | FKN Store",
  description:
    "Hubungi FKN Store untuk pertanyaan, bantuan, atau informasi lebih lanjut mengenai produk dan layanan kami.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen max-w-3xl mx-auto py-10 px-4 space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-4">Hubungi Kami</h1>
        <p className=" leading-relaxed">
          Tim kami siap membantu pertanyaan, saran, atau keluhan dari kamu.
          Silakan hubungi kami melalui salah satu kontak berikut:
        </p>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">WhatsApp</h2>
          <p className="">
            <Link
              href="https://wa.me/6289522235623"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              +62 895-2223-5623
            </Link>
          </p>
        </div>

        {/* <div>
          <h2 className="text-xl font-semibold">Email</h2>
          <p className="">
            <a
              href="mailto:support@fkncollection.com"
              className="text-primary hover:underline"
            >
              support@fkncollection.com
            </a>
          </p>
        </div> */}

        <div>
          <h2 className="text-xl font-semibold">Alamat</h2>
          <p className="">
            Jl Jeruk Manis Kebon Jeruk, Kecamatan Kebon Jeruk, Kota Jakarta
            Barat, DKI Jakarta 11530
          </p>
        </div>
      </section>

      <section>
        <p className="text-sm  italic">
          Kami akan merespons pesanmu secepat mungkin dalam waktu 1x24 jam (hari
          kerja).
        </p>
      </section>
    </div>
  );
}
