import { useContext } from 'react';

import { CartContext } from '../../contexts/toggle-cart.context';

import { ShoppingIcon, CardIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CardIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon" />
            <ItemCount className='item-count'>{cartCount}</ItemCount>
        </CardIconContainer>
    );
};

export default CartIcon;