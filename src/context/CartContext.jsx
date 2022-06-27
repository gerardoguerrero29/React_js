import React, { useState } from "react";
import { createContext } from "react";

export const Context = createContext({});

export default function CartContext({ children }) {
  const [Cart, setCart] = useState([]);
  const [showItemCount, setshowItemCount] = useState(true);


  function addItem({ producto, cant }) {
    setCart(Cart.push(producto));
    
    alert(`agregaste al carrito ${cant} productos `);
    setshowItemCount(false);
    console.log(Cart)
  }

  function removeItem({ id }) {
    setCart(Cart.splice(id, 1));
  }

  function clear() {
    setCart([]);
  }

  function isInCart(id) {
    let found = Cart.find((producto) => producto.id === id) > -1 ? true : false;

    return found;
  }

  return (
    <Context.Provider  value={{ Cart, setCart, showItemCount, setshowItemCount, addItem, removeItem, clear, isInCart }} >
      {children}
    </Context.Provider>
  );
}
