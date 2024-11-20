import type { Metadata } from "next";

import Cart from "@/features/cart/components";

export const revalidate = 0;

const CartPage = () => {
  return <Cart />;
};

export const metadata: Metadata = {
  title: "Cart",
  description:
    "On this page, see the products you added to the shopping cart and pay if you want",
};

export default CartPage;
