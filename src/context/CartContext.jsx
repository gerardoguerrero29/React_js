import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const Context = createContext({});

export default function CartContext({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log("Se modifico el state cart: ", cart);
  }, [cart])


  function addItem(producto, cantidad) {
    console.log(`Vamos a agregar el producto: ${producto} con la cantidad ${cantidad}`);

    const newItem = { ...producto, cantidad: Number(cantidad) }

    if (isInCart(newItem.id)) {
      const findProduct = cart.find((x) => x.id === newItem.id);
      const productIndex = cart.indexOf(findProduct);
      const auxArray = [...cart];
      auxArray[productIndex].cantidad += Number(cantidad)
      setCart(auxArray);

    } else {
      setCart([...cart, newItem])
    }

  }

  function removeItem(id) {
    setCart(cart.filter((x) => x.id !== id));
  }

  function clear() {
    setCart([]);
  }

  function isInCart(id) {

    return cart.find((producto) => producto.id === id);
  }

  function cartItemCount() {
    return cart.reduce((acc,x)=> acc+=x.cantidad,0)
  }

  function cartPrice() {
    return cart.reduce((acc,x)=> acc+=x.cantidad * x.price,0)
  }

  return (
    <Context.Provider value={{ cart, addItem, removeItem, clear, isInCart, cartItemCount, cartPrice }} >
      {children}
    </Context.Provider>
  );
}
