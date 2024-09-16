import { createContext, useContext, useState, useEffect } from 'react';
import medusa from '../lib/medusa';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    medusa.carts.create().then(({ cart }) => {
      setCart(cart);
    });
  }, []);

  const addToCart = (productId, quantity) => {
    medusa.carts.lineItems.create(cart.id, {
      variant_id: productId,
      quantity,
    }).then(({ cart }) => {
      setCart(cart);
    });
  };

  const removeFromCart = (lineItemId) => {
    medusa.carts.lineItems.delete(cart.id, lineItemId).then(({ cart }) => {
      setCart(cart);
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
