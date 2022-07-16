import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";


export default function ItemDetailedContainer() {
  const [productDetail, setProductDetail] = useState();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState();

  useEffect(() => {
    const db = getFirestore();
    const productItem = doc(db, "products", id);

    getDoc(productItem)
      .then((res) => {
        setProductDetail({ ...res.data(), id: res.id });
      })
      .catch((error) => {
        setErr(error);
        console.log(err)
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      <div className="loader">{loading && <img src="https://github.com/gerardoguerrero29/tienda-cs_gerardoguerrero/blob/master/src/assets/Spinner-1s-250px.gif?raw=true" alt="Loading" /> }</div>
      {productDetail && <ItemDetail productDetail={productDetail} />}
    </>
  );
}
