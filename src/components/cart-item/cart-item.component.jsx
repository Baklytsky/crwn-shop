import {CartItemContainer, CartItemDetails} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
      <CartItemContainer>
        <img src={imageUrl} alt={`${name}`} />
        <CartItemDetails>
          <h5>{name}</h5>
          <span>{quantity} x ${price}</span>
        </CartItemDetails>
      </CartItemContainer>
  );
};

export default CartItem;