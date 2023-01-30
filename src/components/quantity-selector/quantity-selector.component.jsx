import './quantity-selector.styles.scss'
import {CartContext} from '../../context/cart.context'
import {useContext} from "react";
const QuantitySelector = ({product, className}) => {
  const {addToCart, removeFromCart} = useContext(CartContext)

  return (
      <div className={`quantity-selector ${className}`}>
        <span className='minus' onClick={() => removeFromCart(product)}>-</span>
        <span>{product.quantity}</span>
        <span  className='plus' onClick={() => addToCart(product)}>+</span>
      </div>
  )
}

export default QuantitySelector