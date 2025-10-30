import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@repo/ui/globals.css";
import { AppProvider } from "./provider";
import { Toaster } from "@repo/ui/components/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FKN Store",
  description: "Show your style with FKN Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <AppProvider>
          {children}
        </AppProvider>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
