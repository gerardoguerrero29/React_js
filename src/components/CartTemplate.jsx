import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Context } from '../context/CartContext'


export default function CartTemplate({ id, title, image, cant, price }) {
    
    const {removeItem} = useContext(Context)
    /* onClick={removeItem(id)} */

    return (<>

        <div>
            <div>
                <img src={image} alt="img producto" />
                <h2> {title}</h2>
            </div>
            <div>
                <Button variant="danger"  > X</Button>
                <h3>{price*cant}</h3>
                <h3>{cant}</h3>
            </div>

        </div>


    </>
    )
}
