"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { ICategory } from "@/core/types";
import { cn } from "@/lib/utils";

const Navbar = ({ data }: { data: ICategory[] }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="flex items-center space-x-4 mx-6 lg:space-x-6">
      {routes.map((route) => {
        const { href, label } = route;

        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-black",
              route.active ? "text-black" : "text-neutral-500"
            )}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
