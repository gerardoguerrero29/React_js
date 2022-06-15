
import React from 'react'
import { Badge, Figure } from 'react-bootstrap'
import ItemCount from './ItemCount'

export default function ItemDetail({ productDetail }) {

    const onAdd = (cantidad) => {
        alert(`agregaste al carrito ${cantidad} productos `);
    }

    return (
        <div>
            <hr /> <h1> Aqui comienza el Item Detail </h1> <br />
            <div className='itemContainer'>

                <Figure>
                    <Figure.Image
                        width={400}
                        height={400}
                        alt="imagen"
                        src={productDetail.image}
                    />
                    <Figure.Caption>
                        Categoria: {productDetail.category}
                    </Figure.Caption>
                </Figure>

                <div className='itemDetails'>
                    <h1>{productDetail.title}</h1>
                    <h3>{productDetail.description}</h3>
                    <div>
                        <h2>Precio: <Badge bg="secondary">{productDetail.price}</Badge></h2>
                        <ItemCount stock={10} initial={1} onAdd={onAdd} />
                    </div>
                </div>

            </div>



        </div>
    )
}
