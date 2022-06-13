import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

export default function ItemDetailedContainer() {

    const [productDetail, setProductDetail] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then((res) => {
                setProductDetail(res[0])
            })
            .catch((e) => {
                setError(e)
            })

    }, [])

    console.log(productDetail)

    return (
                <ItemDetail productDetail={productDetail} />

    )
}
