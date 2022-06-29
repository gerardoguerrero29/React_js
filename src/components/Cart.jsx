import React, { useContext } from 'react'
import { Context } from '../context/CartContext'
import CartTemplate from './CartTemplate'


export default function Cart() {

    const { cart,cartPrice } = useContext(Context)

    return (<>
        <div>
            {cart.map((cart) => <CartTemplate key={cart.id} id={cart.id} image={cart.image} title={cart.title} price={cart.price} cant={cart.cantidad} />)}
            <div>
                <h1>{cartPrice()}</h1>
            </div>
        </div>

    </>
    )
}
