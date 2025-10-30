"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import fknLogo from "@/assets/images/logo/logo2.png";
import { Button } from "@repo/ui/components/button";
import { UserRound } from "lucide-react";
import { NavbarDesktop } from "./navbar-desktop";
import { NavbarMobile } from "./navbar-mobile";
import { useIsMobile } from "@repo/ui/hooks/use-mobile";
import { SearchDialog } from "./search-dialog";
import { CartDrawer } from "./cart-drawer";

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastY = 0;
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(!(currentY > lastY && currentY > 80));
      lastY = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full h-16 border-b bg-white shadow-sm transition-transform duration-300 z-50 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
      aria-label="Navigation"
      role="navigation"
    >
      <div className="h-full mx-auto flex px-4 md:px-8 justify-between items-center">
        <Link href="/" className="flex items-center">
          {/* <Image src={fknLogo} alt="FKN Logo" width={48} height={48} priority /> */}
          <h1 className="text-lg font-bold">FKN Store</h1>
        </Link>

        {!isMobile && <NavbarDesktop pathname={pathname} />}

        <div className="flex items-center justify-end gap-2">
          <SearchDialog />
          <CartDrawer />
          <Button asChild variant="ghost" aria-label="User Account">
            <Link href="/">
              <UserRound className="size-5" />
            </Link>
          </Button>

          {isMobile && <NavbarMobile pathname={pathname} />}
        </div>
      </div>
    </nav>
  );
}
