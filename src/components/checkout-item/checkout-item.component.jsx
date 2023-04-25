import {CheckoutImageContainer, CheckoutItemContainer} from "./checkout-item.styles";
import QuantitySelector from "../quantity-selector/quantity-selector.component";
import {CartContext} from '../../context/cart.context'
import {useContext} from "react";

const CheckoutItem = ({cartItem}) => {
  const {name, imageUrl, price} = cartItem
  const {removeFromCart} = useContext(CartContext)

  return (
      <CheckoutItemContainer>
        <CheckoutImageContainer>
          <img src={imageUrl} alt={name}/>
        </CheckoutImageContainer>
        <span className='name'>{name}</span>
        <QuantitySelector product={cartItem} />
        <span className='price'>${price}</span>
        <span  className='remove-button' onClick={() => removeFromCart(cartItem, true)}>&#10005;</span>
      </CheckoutItemContainer>
  )

}

export default CheckoutItem