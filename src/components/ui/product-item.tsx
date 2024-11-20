"use client";

import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";

import type IProduct from "@/features/product/core/types";

import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/core/hooks/use-cart.hooks";
import usePreviewModal from "@/core/hooks/use-preview-modal.hooks";

const ProductItem = ({ data }: { data: IProduct }) => {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };

  const productItemActionButtonClassNames =
    "rounded-full transition-transform hover:scale-125 bg-white dark:bg-zinc-800 hover:bg-white hover:dark:bg-zinc-900";

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  return (
    <div
      className=" group cursor-pointer rounded-xl border p-3 space-y-4"
      onClick={handleClick}
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.images?.[0]?.url}
          fill
          alt="Product image"
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <Button
              size="icon"
              className={productItemActionButtonClassNames}
              onClick={onPreview}
            >
              <Expand size={20} className="text-gray-600 dark:text-white" />
            </Button>
            <Button
              size="icon"
              className={productItemActionButtonClassNames}
              onClick={onAddToCart}
            >
              <ShoppingCart
                size={20}
                className="text-gray-600 dark:text-white"
              />
            </Button>
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
};

export default ProductItem;
