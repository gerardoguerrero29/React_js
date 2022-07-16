import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Image } from "react-bootstrap";

export default function ItemDetailedContainer() {
  const [productDetail, setProductDetail] = useState();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const db = getFirestore();
    const productItem = doc(db, "products", id);

    getDoc(productItem)
      .then((res) => {
        setProductDetail({ ...res.data(), id: res.id });
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <div>{loading && <img src="https://i.gifer.com/ZZ5H.gif" alt="" /> }</div>
      {productDetail && <ItemDetail productDetail={productDetail} />}
    </>
  );
}
