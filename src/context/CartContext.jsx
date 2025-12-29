import { createContext, useMemo, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]); 
  // cart: [{ id, title, price, quantity, image }]

  const addItem = (item, quantity) => {
    if (!item || quantity <= 0) return;

    setCart((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      if (exists) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + quantity } : p
        );
      }
      return [
        ...prev,
        {
          id: item.id,
          title: item.title,
          price: item.price,
          image: item.image,
          quantity,
        },
      ];
    });
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => setCart([]);

  const totalQuantity = useMemo(
    () => cart.reduce((acc, p) => acc + p.quantity, 0),
    [cart]
  );

  const totalPrice = useMemo(
    () => cart.reduce((acc, p) => acc + p.price * p.quantity, 0),
    [cart]
  );

  const value = {
    cart,
    addItem,
    removeItem,
    clearCart,
    totalQuantity,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
