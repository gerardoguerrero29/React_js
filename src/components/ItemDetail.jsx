import React, { useContext, useState } from "react";
import { Badge, Figure, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { Context } from "../context/CartContext";

export default function ItemDetail({ productDetail }) {
  const { addItem } = useContext(Context);
  const [showItemCount, setshowItemCount] = useState(true);

  function onAdd(cant) {
    setshowItemCount(false);
    addItem(productDetail, cant);
  }

  return (
    <div>
      <div className="itemContainer">
        <Figure>
          <Figure.Image
            width={400}
            height={400}
            alt="imagen"
            src={productDetail.image}
          />
          <Figure.Caption>Categoria: {productDetail.category}</Figure.Caption>
        </Figure>

        <div className="itemDetails">
          <h3>{productDetail.title}</h3>
          <p>{productDetail.description}</p>
          <div>
            <h5>
              Stock: <Badge bg="secondary">{productDetail.stock}</Badge>
            </h5>
            <h5>
              Precio: <Badge bg="primary">{productDetail.price}</Badge>
            </h5>

            {showItemCount ? (
              <ItemCount stock={productDetail.stock} initial={1} onAdd={onAdd}/>
            ) :
             (<>
              <Link to={"/home/"}><Button variant="primary" style={{marginRight:'5px'}}>Continuar Comprando</Button></Link>
              <Link to={"/cart/"}><Button variant="success">Ir al Carrito</Button></Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
