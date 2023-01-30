import './checkout.styles.scss'
import {CartContext} from '../../context/cart.context'
import {useContext} from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const {cartItems, cartTotalPrice} = useContext(CartContext)
  const hiddenHeader = cartItems.length ? '' : 'hidden'

  return (
      <div className='checkout-container'>
        <div className={`checkout-header ${hiddenHeader}`}>
          <div className="header-block">Image</div>
          <div className="header-block">Name</div>
          <div className="header-block">Quantity</div>
          <div className="header-block">Price</div>
          <div className="header-block">Remove</div>
        </div>
        {cartItems.map((item) => <CheckoutItem cartItem={item} key={item.id}/>)}
        <h3 className='total'>{cartItems.length ? 'Total: $' + cartTotalPrice : 'Your cart is empty'}</h3>
      </div>
  )
}

export default Checkout