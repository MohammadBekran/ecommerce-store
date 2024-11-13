"use client";

import { ShoppingCart } from "lucide-react";

import type IProduct from "@/features/product/core/types";

import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/core/hooks/use-cart.hooks";

const ProductInformation = ({ product }: { product?: IProduct }) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(product!);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{product?.name}</h1>
      <div className="mt-3 flex justify-between items-end">
        <div className="text-2xl text-gray-900">
          <Currency value={product?.price} />
        </div>
      </div>
      <hr className="my-4" />
      <div className="space-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{product?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="size-6 rounded-full border border-gray-600"
            style={{ backgroundColor: product?.color?.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-6">
        <Button
          className="flex items-center gap-x-2 rounded-full"
          onClick={onAddToCart}
        >
          Add To Cart <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default ProductInformation;
