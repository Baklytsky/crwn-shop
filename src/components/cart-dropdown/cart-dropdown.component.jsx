import {CartDropdownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles'
import Button from "../button/button.component";
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";
import CartItem from "../cart-item/cart-item.component";
import {useNavigate} from "react-router-dom";
const CartDropdown = () => {
  const {cartItems} = useContext(CartContext)
  const navigate = useNavigate()
  const goToCheckOut = () => {
    navigate('checkout')
  }

  return (
      <CartDropdownContainer>
        <CartItems>
          {cartItems.length
              ? (cartItems.reverse().map((cartItem) => (<CartItem key={cartItem.id} cartItem={cartItem} />)))
              : (<EmptyMessage>Your cart is empty</EmptyMessage>)}
        </CartItems>
        <Button onClick={goToCheckOut}>GO TO CHECKOUT</Button>
      </CartDropdownContainer>
  )
}

export default CartDropdown