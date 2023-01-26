import {Link, Outlet} from "react-router-dom";
import {Fragment, useContext} from "react";
import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
import {UserContext} from "../../context/user.context";
import './navigation.styles.scss'
import {signOutUser} from "../../utils/firebase/firebase";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)

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
            {currentUser
                ? (<span onClick={signOutHandler}>SIGN OUT</span>)
                : (<Link className='nav-link' to='/authentication'>
                      {currentUser ? 'SIGN OUT' : 'SIGN IN'}
                    </Link>
                )}
          </div>
        </div>
        <Outlet/>
      </Fragment>
  )
}

export default Navigation