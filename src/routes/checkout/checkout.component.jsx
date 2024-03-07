import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { CheckoutContainer, CheckoutHeader, HeaderBlock, CheckoutTotal } from "./checkout.styles";

const Checkout = () => {
  const { cartItems , cartTotal} =
    useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((item) => <CheckoutItem key={item.id} item={item} />
      )}

      <CheckoutTotal>Total: £{cartTotal}</CheckoutTotal>
    </CheckoutContainer>
  );
};

export default Checkout;
