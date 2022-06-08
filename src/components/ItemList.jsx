import React from 'react'
import Item from './Item'

export default function ItemList({ productos }) {
    return (
        <div>
            {productos?.map((producto) => <Item id={producto.id} title={producto.title} price={producto.price} description={producto.description} picture={producto.picture} /> )}
        </div>
    )
}
