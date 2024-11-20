"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type ICategory from "@/features/category/core/types";

import { cn, renderCategoryRoutes } from "@/core/utils";

export const revalidate = 0;

const Navbar = ({ data }: { data: ICategory[] }) => {
  const pathname = usePathname();

  const routes = renderCategoryRoutes(data, pathname);

  return (
    <nav className="flex items-center space-x-4 mx-6 lg:space-x-6">
      {routes.map((route) => {
        const { href, label } = route;

        return (
          <Link
            key={href}
            href={href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-black dark:hover:text-neutral-400",
              route.active
                ? "text-black dark:text-neutral-400"
                : "text-neutral-400 dark:text-neutral-600"
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
