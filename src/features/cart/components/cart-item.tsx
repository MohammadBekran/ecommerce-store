import Image from "next/image";
import { X } from "lucide-react";

import Currency from "@/components/ui/currency";
import { Button } from "@/components/ui/button";
import useCart from "@/core/hooks/use-cart.hooks";
import type { IProduct } from "@/core/types";

const CartItem = ({ data }: { data: IProduct }) => {
  const cart = useCart();

  const onRemoveProduct = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex py-6 border-b">
      <div className="relative size-24 overflow-hidden rounded-md sm:size-48">
        <Image
          fill
          src={data.images[0].url}
          alt="Product image"
          className="object-cover object-center"
        />
      </div>
      <div className="relative flex flex-1 flex-col justify-between ml-4 sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full shadow-xl"
            onClick={onRemoveProduct}
          >
            <X size={15} />
          </Button>
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.color.name}</p>
            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
              {data.size.name}
            </p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
