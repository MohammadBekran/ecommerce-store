"use client";

import { ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import useCart from "@/core/hooks/use-cart.hooks";

const CartButton = () => {
  const productsLength = useCart((state) => state.items.length);

  return (
    <Button className="flex items-center rounded-full bg-black px-4 py-2">
      <ShoppingBag size={20} color="white" />
      <span className="text-sm font-medium text-white">{productsLength}</span>
    </Button>
  );
};

export default CartButton;
