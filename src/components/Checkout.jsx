import React, { useContext, useState } from "react";
import { Context } from "../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export default function Checkout() {
  const [name, setName] = useState("");
  const [cel, setCel] = useState(0);
  const [email, setEmail] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [orderId, setOrderId] = useState(0)

  const db = getFirestore();
  const orderCollection = collection(db, "orders");

  const { cart, cartPrice } = useContext(Context);

  function handleClick(e) {
    e.preventDefault();
    const order = {
      buyer: { name, cel, email },
      items: cart,
      total: cartPrice(),
    };
    console.log(order);
    addDoc(orderCollection, order).then(({ id }) => {setOrderId(id)});
    setShowForm(false);
  }

  const form = (
    <div>
      <h1> Completa tus datos para finalizar la compra</h1>
      <form onSubmit={(e) => handleClick(e)}>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Nombre"
          required
        />
        <input
          onChange={(e) => setCel(e.target.value)}
          type="tel"
          pattern="[0-9]{3}[0-9]{7}"
          placeholder="Tel:123 1234567 "
          required
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="me@mail.com"
          required
        />
        {name && cel && email ? (
          <input
            type="submit"
            value="Finalizar Compra"
          />
        ) : (
          <input type="submit" value="Finalizar Compra" disabled />
        )}
      </form>
    </div>
  );

  return <>{showForm ? form : 'gracias por su compra. su numero de orden es: ' + orderId}</>;
}
