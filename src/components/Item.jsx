import React from 'react'

export default function Item({id, title, price, description, picture}) {
  return (
    <div>Id: {id}  - Producto: {title} - Precio: {price} - Descripcion: {description} - Foto: {picture} </div>
  )
}
