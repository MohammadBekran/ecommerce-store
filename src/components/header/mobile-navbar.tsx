"use client";

import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import ICategory from "@/features/category/core/types";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn, renderCategoryRoutes } from "@/core/utils";
import ModeToggle from "./mode-toggle";

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
                    "text-sm font-medium transition-colors hover:text-black",
                    route.active ? "text-black" : "text-neutral-500"
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto">
            <div className="flex justify-start">
              <UserButton />
            </div>
            <div>
              <ModeToggle />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
