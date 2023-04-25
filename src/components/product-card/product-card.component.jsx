import './product-card.styles.scss'
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {CartContext} from '../../context/cart.context'
import {useContext} from "react";

const ProductCard = ({product}) => {
  const {setCartOpen, addToCart} = useContext(CartContext)
  const {imageUrl, name, price} = product

  const productAddToCart = () => {
    addToCart(product)
    setCartOpen(true)
  }

  return (
      <div className='product-card-container'>
        <img src={imageUrl} alt={name}/>
        <div className='footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
        </div>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} children='ADD TO CART' onClick={productAddToCart}/>
      </div>
  )
}

export default ProductCard