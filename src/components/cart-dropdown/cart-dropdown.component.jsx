import './cart-dropdown.styles.scss'
import Button from "../button/button.component";
const CartDropdown = () => {
  return (
      <div className='cart-dropdown-container'>
        <span>Empty</span>
        <Button children='GO TO CHECKOUT'/>
      </div>
  )
}

export default CartDropdown