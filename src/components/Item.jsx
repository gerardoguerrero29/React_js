import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Item({ id, title, price, description, image }) {


    return (
        <>
            <Card style={{ width: '15rem', margin: 15 }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Descripcion: {description}
                        <br />
                        Precio: {price}
                    </Card.Text>
                </Card.Body>
             <div style={{alignSelf: 'center', margin: '1rem'} }> <Link to={"/item/" +id} > <Button variant="primary">Ver Detalles</Button> </Link> </div>
            </Card>
        </>
    )
}
