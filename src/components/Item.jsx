import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function Item({ id, title, price, description, image }) {
    

    return (
        <>
            <Card style={{ width: '15rem' , margin:15}}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Descripcion: {description}
                        <br />
                        Precio: {price}
                        <br />
                        Id: {id}
                    </Card.Text>
                    <Button variant="primary">Ver Detalles</Button>
                </Card.Body>
            </Card>
        </>
    )
}
