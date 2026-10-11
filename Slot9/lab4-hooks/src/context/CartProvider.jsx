import { useReducer } from 'react';
import { CartContext } from './CartContext';
import { cartReducer, initialCart, CART_ACTIONS, getCartTotals } from '../reducers/cartReducer';

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  const value = {
    cart,
    dispatch,
    ...getCartTotals(cart),
    addToCart: (product) => dispatch({ type: CART_ACTIONS.ADD, payload: product }),
    clearCart: () => dispatch({ type: CART_ACTIONS.CLEAR }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;