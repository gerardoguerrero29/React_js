import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function Item({ id, title, price, description, picture }) {
    return (

        <>
            <div>   - Foto: {picture} </div>

            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    Descripcion: {description}
                    <br/>
                    Precio: {price}
                    <br/>
                    Id: {id}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </>

    )
}
