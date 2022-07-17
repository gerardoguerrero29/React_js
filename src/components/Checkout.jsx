import React, { useContext, useState } from "react";
import { Context } from "../context/CartContext";
import {addDoc, collection, getFirestore} from "firebase/firestore";

export default function Checkout() {
  const [name, setName] = useState("");
  const [cel, setCel] = useState(0);
  const [email, setEmail] = useState("");

  const db=getFirestore();
  const orderCollection=collection(db,'orders');

  const { cart, cartPrice } = useContext(Context);

  function handleClick() {
    const order = {
      buyer: { name, cel, email },
      items: cart,
      total: cartPrice(),
    };
    console.log(order);
    addDoc(orderCollection,order).then(({id})=>{console.log(id)})
  }

  return (
    <div>
      <h1> Complete el formulario para finalizar</h1>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Nombre"
        required
      />
      <input
        onChange={(e) => setCel(e.target.value)}
        type="tel"
        pattern="[0-9]{3}-[0-9]{7}"
        placeholder="Celular"
        required
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="E-Mail"
        required
      />
      <button onClick={() => handleClick()}>Finalizar Compra</button>
    </div>
  );
}
