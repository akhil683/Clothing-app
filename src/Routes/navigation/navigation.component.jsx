import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { CartContext } from "../../contexts/toggle-cart.context";
import { selectCurrentUser } from "../../store/user.selector";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { NavigationContainer, NavLink, NavLinks, LogoContainer } from "./navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  // const { currentUser } = useContext(UserContext);
  const {isCartOpen } = useContext(CartContext);

    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrwnLogo className='logo' />
            </LogoContainer>
          <NavLinks>
            <NavLink to='/shop'>
                Shop
            </NavLink>
            { currentUser ? (
                <NavLink onClick={signOutUser}>Sign Out</NavLink>
                ) : (
                <NavLink to='/auth'>
                  Sign In
                </NavLink>
              )}
              <CartIcon />
          </NavLinks>
        {isCartOpen && <CartDropdown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;