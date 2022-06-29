import React, { useContext } from 'react'
import { Context } from '../context/CartContext'

export default function Cart() {

    const { cartPrice, cart } = useContext(Context)

    return (<>

        <div>{cartPrice()}</div>


    </>
    )
}
