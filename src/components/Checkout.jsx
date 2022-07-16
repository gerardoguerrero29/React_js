import React, { useState } from "react";

export default function Checkout() {
  const [name, setName] = useState("");
  const [Cel, setCel] = useState(0);
  const [email, setEmail] = useState("");

  return <div>
    <h1> Complete el formulario para finalizar</h1>
    <input type="text" placeholder="Nombre"/>
    <input type="tel"  pattern="[0-9]{3}-[0-9]{7}"placeholder="Celular"/>
    <input type="email" placeholder="E-Mail"/>
  </div>;
}
