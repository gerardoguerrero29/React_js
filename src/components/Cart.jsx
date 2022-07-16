import { Button, Card } from 'react-bootstrap'
import React, { useContext } from 'react'
import { Context } from '../context/CartContext'
import CartTemplate from './CartTemplate'
import { Link } from 'react-router-dom'


export default function Cart() {

    const { cart, cartPrice, cartItemCount } = useContext(Context)
    const cartCount = cartItemCount();

    let emptyCart = <div className='emptyPage'>
        <Card>
            <Card.Body>
                <Card.Title>Tu Carrito esta Vacio</Card.Title>
               <div> <img src="https://www.iconpacks.net/icons/3/free-green-shopping-cart-icon-10909.png" alt="CarritoIcon" /></div>
                <Link to={"/home"}><Button variant="outline-success" style={{ alignSelf: `center`, margin: '1rem' }}> Ir a la Tienda</Button></Link>
            </Card.Body>
        </Card>
    </div>

    return <>
        {cartCount === 0 ? emptyCart :
            <div>
                {cart.map((cart) => <CartTemplate key={cart.id} id={cart.id} image={cart.image} title={cart.title} price={cart.price} cant={cart.cantidad} />)}
                <div style={{ textAlign: `end`, marginRight: `8rem` }}>
                    <h1>{"Total Carrito: $  " + cartPrice()}</h1>
                    <Link to={"/checkout"}><Button variant="outline-success" style={{ alignSelf: `center`, margin: '1rem' }}> Finalizar Compra</Button></Link>
                </div>
            </div>
        }
    </>

}
