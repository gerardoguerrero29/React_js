import React, { useState } from 'react'

export default function ItemCount({ stock, initial, onAdd }) {

    const [i, setI] = useState(initial);
    const [stk, setStk] = useState(stock);

    return (<>
        <button onClick={() => { i == 0 ? setI(0) : setI(i - 1) }}>-</button>
        {i}
        <button onClick={() => { setI(i + 1) }}>+</button>

        <br />

        <button onClick={() => { i <= stk ? onAdd(i) : alert('ERROR: la cantidad supera al stock disponible') }}>Agregar al Carrito</button>

    </>
    )
}
