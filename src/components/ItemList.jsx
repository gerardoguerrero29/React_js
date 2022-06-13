import React from 'react'
import Item from './Item'

export default function ItemList({ productos }) {
    return (
        <div style={{ display: `flex`, flexWrap: `wrap`, justifyContent: 'space-evenly' }}>
            {productos?.map((producto) => <Item key={producto.id} id={producto.id} title={producto.title} price={producto.price} description={producto.description} image={producto.image} />)}
        </div>
    )
}
