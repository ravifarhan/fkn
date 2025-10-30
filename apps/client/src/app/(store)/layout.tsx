import { Metadata } from "next";
import { Footer, Navbar } from "./_components";

export const metadata: Metadata = {
  title: "FKN Store",
  description: "Show your style with FKN Store",
};

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="pt-16">{children}</div>
      <Footer />
    </>
  );
}
