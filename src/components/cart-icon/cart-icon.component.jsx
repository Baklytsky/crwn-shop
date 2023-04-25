import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {CartContext} from '../../context/cart.context'
import {useContext} from "react";
import {CartIconContainer, ItemCount} from "./cart-icon.styles";

const CartIcon = () => {
  const {cartOpen, setCartOpen, cartTotalQuantity} = useContext(CartContext)
  const toggleCartDropdown = () => setCartOpen(!cartOpen)

  return (
      <CartIconContainer onClick={toggleCartDropdown}>
        <ShoppingIcon className='shopping-icon'/>
        <ItemCount>{cartTotalQuantity}</ItemCount>
      </CartIconContainer>
  )
}

export default CartIcon