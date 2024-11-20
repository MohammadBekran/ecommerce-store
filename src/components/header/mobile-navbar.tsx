"use client";

import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ICategory from "@/features/category/core/types";

import ModeToggle from "@/components/header/mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn, renderCategoryRoutes } from "@/core/utils";

const MobileNavbar = ({ data }: { data: ICategory[] }) => {
  const pathname = usePathname();

  const routes = renderCategoryRoutes(data, pathname);

  return (
    <Sheet>
      <SheetTrigger className="rounded-md border p-2">
        <Menu className="size-[1.2rem]" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetTitle />
        <div className="size-full flex flex-col">
          <h2 className="font-bold">STORE</h2>
          <nav className="flex flex-col gap-2 mt-3">
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
          <div className="mt-auto flex justify-between">
            <div>
              <ModeToggle />
            </div>
            <div>
              <UserButton />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
