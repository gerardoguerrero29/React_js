import React, { useContext, useState } from 'react'
import {Button} from 'react-bootstrap';
import '../App.css'
import { Context } from '../context/CartContext';

export default function ItemCount({ stock, initial,productDetail }) {

    const {addItem} = useContext(Context)

    const [i, setI] = useState(initial);

    const handleSumClick = () => {
        i < stock ? setI(i + 1) : setI(stock);
    }

    const handleSubsClick = () => {
        i === 0 ? setI(0) : setI(i - 1);
    }

    const handleAddToCartClick = () => {
        addItem(productDetail, i);
    }

    return (<>
    <div className='itemCount'>
        <Button variant="light" onClick={handleSubsClick}>-</Button>
        {i}  
        <Button variant="light" onClick={handleSumClick}>+</Button>
        <Button variant="success" onClick={handleAddToCartClick}>Agregar al Carrito</Button>
    </div>
        
    </>

    )
}
