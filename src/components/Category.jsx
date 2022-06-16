import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function Category() {
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
    }, [id])


    return (
        <div>Category</div>
    )
}
