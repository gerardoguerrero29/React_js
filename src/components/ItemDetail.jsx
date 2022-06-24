
import React, { useState } from 'react'
import {Badge, Figure, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

export default function ItemDetail({ productDetail }) {

    const [showItemCount, setshowItemCount] = useState(true)

    const [cantToCart, setcantToCart] = useState(0)

    const onAdd = (cantidad) => {
        alert(`agregaste al carrito ${cantidad} productos `);
        setshowItemCount(false);
        console.log(cantToCart);
        setcantToCart(parseInt(cantidad));
        console.log(cantToCart);
    }


    return (
        <div>
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
                        <h2>Stock: <Badge bg="secondary">{productDetail.stock}</Badge></h2>
                        <h2>Precio: <Badge bg="primary">{productDetail.price}</Badge></h2>
                       {showItemCount? <ItemCount stock={productDetail.stock} initial={1} onAdd={onAdd} /> : <Link to={"/cart/"} > <Button variant="success">Finalizar Compra</Button> </Link>}
                    </div>
                </div>

            </div>



        </div>
    )
}
