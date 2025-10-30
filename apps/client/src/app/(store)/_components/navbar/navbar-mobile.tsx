"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@repo/ui/components/sheet";
import { Button } from "@repo/ui/components/button";
import { cn } from "@repo/ui/lib/utils";
import { NavLink, navLinks } from "./navbar";

interface NavbarMobileProps {
  pathname: string;
}

export function NavbarMobile({ pathname }: NavbarMobileProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="cursor-pointer"
          aria-label="Menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle className="text-lg font-bold">FKN Store</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-2 mt-4">
          {navLinks.map((item: NavLink) => (
            <SheetClose asChild key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "px-6 py-3 text-lg",
                  pathname === item.href || pathname.startsWith(`${item.href}/`)
                    ? "text-black border-l-4 font-semibold border-black bg-gray-50"
                    : "hover:bg-gray-100"
                )}
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
