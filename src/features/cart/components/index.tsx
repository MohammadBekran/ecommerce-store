"use client";

import CartItem from "@/features/cart/components/cart-item";
import Summary from "@/features/cart/components/summary";

import MainContainer from "@/components/partials/containers/main-container";
import useCart from "@/core/hooks/use-cart.hooks";

const Cart = () => {
  const cartItems = useCart((state) => state.items);

  return (
    <div className="bg-white">
      <MainContainer>
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
      </MainContainer>
    </div>
  );
};

export default Cart;
