import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const clear = () => {
    setItems([]);
  };

  const isInCart = (id) => {
    const miItem = items.findIndex((item) => {
      return item.id === id;
    });

    return miItem !== -1;
  };

  const removeItem = (id) => {
    setItems((prevItems) => {
      return prevItems.splice(id, 1);
    });
  };

  useEffect(() => {
    console.log(items);
  }, [items]);

  const cartItems = () => {
    return items.length;
  };

  const totalCarrito = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.qty;
    });
    return total;
  };

  const addItem = (producto, qty) => {
    console.log(producto);
    producto.qty = qty;
    setItems([...items, producto]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        cartItems,
        addItem,
        clear,
        isInCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
