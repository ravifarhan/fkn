"use client";

import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import iconShopee from "@/assets/icons/shopee.svg";
import iconTiktok from "@/assets/icons/tiktok.svg";

export function Footer() {
  return (
    <footer className="bg-black justify-center">
      <div className="container mx-auto justify-between px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          {/* <Link href="/" className="flex items-center">
            <Image src={fknLogo} alt="FKN Logo" width={70} height={70} />
          </Link> */}
          <h2 className="text-lg text-white font-bold">FKN Store</h2>
          <p className="text-sm text-white">
            Jl Jend. Sudirman, Jakarta Selatan, DKI Jakarta
          </p>
          <p className="text-sm text-white mt-2 flex items-center gap-2">
            <Phone size={18} /> +62 800-0000-000
          </p>

          <div className="flex gap-4 mt-4">
            <Link href="https://instagram.com/" target="_blank">
              <FaInstagram className="w-5 h-5 text-white transition" />
            </Link>
            <Link href="https://tiktok.com/" target="_blank">
              <FaTiktok className="w-5 h-5 text-white transition" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-3">Official Store</h3>
          <div className="flex flex-col gap-2">
            <Link
              href="https://shopee.co.id"
              target="_blank"
              className="flex items-center gap-2 hover:text-primary transition"
            >
              <Image
                src={iconShopee}
                alt="Shopee"
                width={36}
                height={36}
                className="object-contain"
              />
              <span className="text-sm font-medium text-white">Shopee</span>
            </Link>

            <Link
              href="https://www.tiktok.com"
              target="_blank"
              className="flex items-center gap-2 hover:text-primary transition"
            >
              <Image
                src={iconTiktok}
                alt="TikTok Shop"
                width={36}
                height={36}
                className="object-contain"
              />
              <span className="text-sm font-medium text-white">
                TikTok Shop
              </span>
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-3 text-sm text-white">
            <li>
              <Link href="/about" className="hover:underline transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/how-to-order" className="hover:underline transition">
                How to Order
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:underline transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:underline transition">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto text-center border-t border-b border-white/10 mt-8 py-2">
        <p className="text-sm text-white">
          Copyright © {new Date().getFullYear()} FKN Store. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
