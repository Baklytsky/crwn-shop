import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {CartContext} from '../../context/cart.context'
import {useContext} from "react";

const CartIcon = () => {
  const {cartOpen, setCartOpen, cartTotalQuantity} = useContext(CartContext)
  const toggleCartDropdown = () => setCartOpen(!cartOpen)

  return (
      <div className='cart-icon-container' onClick={toggleCartDropdown}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{cartTotalQuantity}</span>
      </div>
  )
}

export default CartIcon