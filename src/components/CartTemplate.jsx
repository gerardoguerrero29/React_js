import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Context } from '../context/CartContext'


export default function CartTemplate({ id, title, image, cant, price }) {

    const { removeItem } = useContext(Context)


    return (<>

        <div className='cartTemplate'>
            <div className='cartTemplate'>
                <img src={image} alt="img producto" />
                <h2> {title}</h2>
            </div>
            <div style={{display: `flex`}} >
                <Button variant="danger" /* onClick={removeItem(id)} */  style={{width:`3rem` , height:`3rem`, alignSelf:`center`, margin: '1rem'}}> X</Button>
                <div>
                    <h3>{"Cantidad:" + cant}</h3>
                    <h3>{"Subtotal: $ " + price * cant}</h3>
                </div>
            </div>

        </div>


    </>
    )
}
