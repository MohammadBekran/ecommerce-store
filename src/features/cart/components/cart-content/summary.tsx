"use client";
import { useState } from "react";

import CheckoutModal from "@/features/cart/components/cart-content/checkout-modal";

import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/core/hooks/use-cart.hooks";

const Summary = () => {
  const [open, setOpen] = useState(false);
  const cartItems = useCart((state) => state.items);

  const onOpenCheckoutModal = () => setOpen(true);
  const onCloseCheckoutModal = () => setOpen(false);

  const totalPrice = cartItems.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  const productIds: string[] = [];
  let storeId = "";

  cartItems.forEach((product) => {
    productIds.push(product.id);
    storeId = product.storeId;
  });

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <CheckoutModal
        open={open}
        onClose={onCloseCheckoutModal}
        productIds={productIds}
        storeId={storeId}
      />
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        className="w-full mt-6"
        onClick={onOpenCheckoutModal}
        disabled={!cartItems.length}
      >
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
