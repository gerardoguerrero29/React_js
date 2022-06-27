import React, { useState } from "react";
import { createContext } from "react";

export const Context = createContext({});

export default function CartContext({ children }) {
  const [Cart, setCart] = useState([]);

  function addItem({ item, cant }) {}

  function removeItem({ id }) {}

  function clear() { setCart([])}

  function isInCart(id) {}

  return (
    <Context.Provider value={{ Cart, setCart, addItem, removeItem, clear, isInCart  }}> {children} </Context.Provider>
  );
}
