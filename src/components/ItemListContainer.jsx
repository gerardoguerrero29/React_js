import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';

export default function ItemListContainer() {

    const [productos, setProductos] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then((res) => {
                setProductos(res)
            })
            .catch((e) => {
                setError(e)  
            })

        /* const promiseProductos = new Promise((res, rej) => {
            setTimeout(() => {
                res([
                    { id: "1", title: "Notebook", price: 50000, description: "descripcion", picture: "foto" },
                    { id: "2", title: "Pendrive", price: 1000, description: "descripcion", picture: "foto" },
                    { id: "3", title: "Celular", price: 25000, description: "descripcion", picture: "foto" },
                    { id: "4", title: "Camara de fotos", price: 18000, description: "descripcion", picture: "foto" },
                    { id: "5", title: "Auriculares", price: 3500, description: "descripcion", picture: "foto" },
                ]);

            }, 2000);
        });

        promiseProductos
            .then((res) => {
                setProductos(res);
            })
            .catch((error) => {
                setError(error);
            }) */

    }, [])
console.log(productos)

    return <>

        <ItemList productos={productos} />

    </>
}

