import React, { useState } from 'react'

export default function ItemCount({ stock, initial, onAdd }) {

    const [i, setI] = useState(initial);

    const handleSumClick = () => {
        i < stock ? setI(i + 1) : setI(stock);
    }

    const handleSubsClick = () => {
        i === 0 ? setI(0) : setI(i - 1);
    }

    const handleAddToCartClick = () => {
        onAdd(i);
    }

    return (<>
        <button onClick={handleSubsClick}>-</button>
        {i}  
        <button onClick={handleSumClick}>+</button>
        <br />
        <button onClick={handleAddToCartClick}>Agregar al Carrito</button>

        
    </>
    )
}
