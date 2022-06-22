import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import { Mock_Items } from './Mock_Items';

export default function ItemDetailedContainer() {

    const [productDetail, setProductDetail] = useState([])
    const { id } = useParams();

    useEffect(() => {

        const getItem = () => {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    res(Mock_Items);
                    console.log(Mock_Items)
                }, 2000);
            });
        };

        getItem()
            .then((res) => {
                if (id) {
                    setProductDetail(res.filter((product) => product.id === id));
                } else {
                    setProductDetail(res);
                }
            })
            .catch((err) => {
                console.log(err);
            });



        /*  fetch('https://fakestoreapi.com/products')
             .then(res => res.json())
             .then((res) => {
                 setProductDetail(res[0])
             })
             .catch((e) => {
                 setError(e)
             }) */

    }, [id])

    console.log(productDetail)

    return (
        <ItemDetail productDetail={productDetail} />

    )
}
