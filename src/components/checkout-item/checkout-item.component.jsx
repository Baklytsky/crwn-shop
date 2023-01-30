import './checkout-item.styles.scss'
import QuantitySelector from "../quantity-selector/quantity-selector.component";
import {CartContext} from '../../context/cart.context'
import {useContext} from "react";

const CheckoutItem = ({cartItem}) => {
  const {name, imageUrl, price} = cartItem
  const {removeFromCart} = useContext(CartContext)

  return (
      <div className='checkout-item-container'>
        <div className='image-container'>
          <img src={imageUrl} alt={name}/>
        </div>
        <span className='name'>{name}</span>
        <QuantitySelector product={cartItem} className='quantity'/>
        <span className='price'>${price}</span>
        <div  className='remove-button' onClick={() => removeFromCart(cartItem, true)}>&#10005;</div>
      </div>
  )

}

export default CheckoutItem