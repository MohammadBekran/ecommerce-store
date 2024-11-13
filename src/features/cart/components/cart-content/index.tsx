"use client";

import CartItem from "@/features/cart/components/cart-content/cart-item";
import Summary from "@/features/cart/components/cart-content/summary";

import useCart from "@/core/hooks/use-cart.hooks";

const CartContent = () => {
  const cartItems = useCart((state) => state.items);

  return (
    <div className="px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
      <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
        <div className="lg:col-span-7">
          {cartItems.length === 0 && (
            <p className="text-neutral-500">No items added to cart</p>
          )}
          <ul>
            {cartItems.map((item) => (
              <CartItem key={item.id} data={item} />
            ))}
          </ul>
        </div>
        <Summary />
      </div>
    </div>
  );
};

export default CartContent;
