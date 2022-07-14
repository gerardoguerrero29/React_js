import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { Mock_Items } from './Mock_Items';


export default function ItemListContainer() {

    const [productos, setProductos] = useState([])
    const { catId } = useParams();

    useEffect(() => {
        const getItems = () => {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res(Mock_Items);
                }, 2000);
            });
        };

        getItems()
            .then((res) => {
                if (catId) {
                    setProductos(res.filter((product) => product.category === catId));
                } else {
                    setProductos(res);
                }
            })
            .catch((err) => {
                console.log(err);
            });

    }, [catId])
    console.log(productos)

    return <>

        <ItemList productos={productos} />

    </>
}

