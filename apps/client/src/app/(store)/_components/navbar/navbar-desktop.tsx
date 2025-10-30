"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@repo/ui/components/navigation-menu";
import { cn } from "@repo/ui/lib/utils";
import { NavLink, navLinks } from "./navbar";

interface NavbarDesktopProps {
  pathname: string;
}

export function NavbarDesktop({ pathname }: NavbarDesktopProps) {
  return (
    <div className="flex flex-1 justify-center">
      <NavigationMenu className="items-center gap-6">
        <NavigationMenuList>
          {navLinks.map((item: NavLink) => (
            <NavigationMenuItem key={item.href}>
              <Link href={item.href} className="px-3 py-1 ">
                <span
                  className={cn(
                    "font-medium transition-colors duration-300",
                    pathname === item.href ||
                      pathname.startsWith(`${item.href}/`)
                      ? "font-bold border-b-2 border-black"
                      : "hover:border-b-2 hover:border-black"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
