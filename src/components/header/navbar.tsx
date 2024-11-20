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
              "text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 transition-colors font-medium",
              route.active && "text-gray-900 dark:text-gray-300"
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
