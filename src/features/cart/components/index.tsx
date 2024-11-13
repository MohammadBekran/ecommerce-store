import CartContent from "@/features/cart/components/cart-content";

import MainContainer from "@/components/partials/containers/main-container";

const Cart = () => {
  return (
    <div className="bg-white">
      <MainContainer>
        <CartContent />
      </MainContainer>
    </div>
  );
};

export default Cart;
