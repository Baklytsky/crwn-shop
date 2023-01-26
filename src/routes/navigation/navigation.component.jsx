import {Link, Outlet} from "react-router-dom";
import {Fragment, useContext} from "react";
import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
import {UserContext} from "../../context/user.context";
import './navigation.styles.scss'
import {signOutUser} from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import {CartContext} from "../../context/cart.context";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const { cartOpen } = useContext(CartContext)

  const signOutHandler = async () => {
    await signOutUser()
    setCurrentUser(null)
  }

  return (
      <Fragment>
        <div className='navigation'>
          <Link className='logo-container' to='/'>
            <CrownLogo className='logo' />
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
              SHOP
            </Link>
            {currentUser
                ? (<span onClick={signOutHandler}>SIGN OUT</span>)
                : (<Link className='nav-link' to='/authentication'>
                      {currentUser ? 'SIGN OUT' : 'SIGN IN'}
                    </Link>
                )}
            <CartIcon/>
          </div>
          {cartOpen && <CartDropdown/>}
        </div>
        <Outlet/>
      </Fragment>
  )
}

export default Navigation