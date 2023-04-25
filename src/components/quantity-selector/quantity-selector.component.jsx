import {Quantity} from './quantity-selector.styles'
import {CartContext} from '../../context/cart.context'
import {useContext} from "react";
const QuantitySelector = ({product}) => {
  const {addToCart, removeFromCart} = useContext(CartContext)

  return (
      <Quantity>
        <span className='minus' onClick={() => removeFromCart(product)}>-</span>
        <span>{product.quantity}</span>
        <span  className='plus' onClick={() => addToCart(product)}>+</span>
      </Quantity>
  )
}

export default QuantitySelector